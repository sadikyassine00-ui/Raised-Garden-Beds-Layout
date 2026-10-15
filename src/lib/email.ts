import { Resend } from 'resend';

export function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

export interface SendDeliveryEmailOptions {
  to: string;
  transactionId: string;
  customerName?: string;
  amountFormatted?: string;
}

export async function sendDeliveryEmail({
  to,
  transactionId,
  customerName,
  amountFormatted = '$9.00 USD',
}: SendDeliveryEmailOptions): Promise<{ success: boolean; id?: string; error?: string }> {
  const resend = getResendClient();

  if (!resend) {
    console.warn('[Resend] RESEND_API_KEY is not configured. Delivery email skipped.');
    return { success: false, error: 'RESEND_API_KEY not configured' };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.raisedgardenbedslayout.com';
  const downloadUrl = `${siteUrl}/download?transaction_id=${encodeURIComponent(transactionId)}`;
  const directApiDownloadUrl = `${siteUrl}/api/download?transaction_id=${encodeURIComponent(transactionId)}`;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Raised Garden Beds <orders@raisedgardenbedslayout.com>';

  const greeting = customerName ? `Hello ${customerName},` : 'Hello,';

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Your Raised Garden Bed Blueprints &amp; Layout Bundle</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FBFBFA; margin: 0; padding: 0; color: #1A1A1A; line-height: 1.6; }
    .wrapper { max-width: 600px; margin: 30px auto; background-color: #ffffff; border: 1px solid #E8E8E6; border-radius: 12px; overflow: hidden; }
    .header { background-color: #1B4D3E; padding: 28px 32px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.01em; }
    .header p { color: #A8D5BA; margin: 6px 0 0; font-size: 13px; }
    .content { padding: 32px; }
    .badge { display: inline-block; background-color: #E8F3EE; color: #1B4D3E; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 4px; margin-bottom: 16px; }
    .order-box { background-color: #FAF7F2; border: 1px solid #EFE4D6; border-radius: 8px; padding: 20px; margin: 24px 0; }
    .order-row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 13px; }
    .order-title { font-weight: 700; color: #1A1A1A; font-size: 15px; margin-bottom: 8px; }
    .cta-button { display: inline-block; background-color: #1B4D3E; color: #ffffff !important; text-decoration: none; font-weight: 600; font-size: 15px; padding: 14px 28px; border-radius: 6px; text-align: center; margin: 12px 0 20px; }
    .checklist { list-style: none; padding: 0; margin: 16px 0; }
    .checklist li { padding: 6px 0; font-size: 13px; color: #4A4E4A; }
    .checklist li strong { color: #1B4D3E; margin-right: 6px; }
    .footer { padding: 24px 32px; background-color: #F9F9F8; border-top: 1px solid #EFEFEF; font-size: 12px; color: #717571; text-align: center; }
    .footer a { color: #1B4D3E; text-decoration: underline; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>Raised Garden Beds Layout</h1>
      <p>Digital Blueprint &amp; Layout Bundle (Spring 2026 Edition)</p>
    </div>
    <div class="content">
      <span class="badge">Payment Confirmed &bull; Merchant of Record: Paddle.com</span>
      <p>${greeting}</p>
      <p>Thank you for purchasing the <strong>Raised Garden Bed Blueprint &amp; Layout Bundle</strong>. Your one-time payment of <strong>${amountFormatted}</strong> has been confirmed.</p>
      
      <div style="text-align: center; margin: 28px 0;">
        <a href="${downloadUrl}" class="cta-button" target="_blank">Access Your Digital Blueprints</a>
        <br>
        <span style="font-size: 12px; color: #717571;">Permanent personal license &bull; Printable high-res PDF</span>
      </div>

      <div class="order-box">
        <div class="order-title">Order Summary</div>
        <div style="font-size: 13px; color: #4A4E4A; margin-bottom: 8px;">
          Product: Raised Garden Bed Blueprint and Layout Bundle<br>
          Amount: ${amountFormatted} (One-Time)<br>
          Transaction ID: <code style="font-family: monospace; background: #eee; padding: 2px 4px; border-radius: 3px;">${transactionId}</code>
        </div>
      </div>

      <p style="font-size: 13px; font-weight: 700; margin-bottom: 6px;">What is included in your download:</p>
      <ul class="checklist">
        <li><strong>&check;</strong> 4 Modular Bed Build Blueprints (4&times;8, 4&times;4, 2&times;8, L-shape)</li>
        <li><strong>&check;</strong> Precision Hardware &amp; Lumber Cut List (Zero-Waste)</li>
        <li><strong>&check;</strong> Companion Planting Matrix &amp; Bad Neighbor Isolation Guide</li>
        <li><strong>&check;</strong> Organic Soil Volume &amp; Mel&rsquo;s Mix Fertilizer Ratios</li>
      </ul>

      <p style="font-size: 12px; color: #717571; margin-top: 24px;">
        Direct file link: <a href="${directApiDownloadUrl}" style="color: #1B4D3E;">${directApiDownloadUrl}</a>
      </p>
    </div>
    <div class="footer">
      <p>Transactions conducted and billed by Paddle.com as Merchant of Record.<br>
      Questions or need assistance? Email us at <a href="mailto:support@raisedgardenbedslayout.com">support@raisedgardenbedslayout.com</a>.</p>
      <p>&copy; ${new Date().getFullYear()} raisedgardenbedslayout.com. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `;

  try {
    let result = await resend.emails.send({
      from: fromEmail,
      to,
      subject: 'Your Raised Garden Bed Blueprints & Layout Bundle ($9 Order Confirmed)',
      html: htmlContent,
    });

    // If custom domain is not yet verified in Resend, fall back to testing sender
    if (
      result.error &&
      (result.error.message?.toLowerCase().includes('domain') ||
        result.error.message?.toLowerCase().includes('verify'))
    ) {
      console.warn(
        `[Resend] Domain verification pending for "${fromEmail}". Falling back to onboarding@resend.dev.`
      );
      result = await resend.emails.send({
        from: 'Raised Garden Beds <onboarding@resend.dev>',
        to,
        subject: 'Your Raised Garden Bed Blueprints & Layout Bundle ($9 Order Confirmed)',
        html: htmlContent,
      });
    }

    if (result.error) {
      console.error('[Resend] Error sending delivery email:', result.error);
      return { success: false, error: result.error.message };
    }

    console.log('[Resend] Delivery email sent successfully. ID:', result.data?.id);
    return { success: true, id: result.data?.id };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[Resend] Unexpected exception sending delivery email:', message);
    return { success: false, error: message };
  }
}
