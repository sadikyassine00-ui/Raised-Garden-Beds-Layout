import React from 'react';

export function GuaranteeSection() {
  return (
    <section className="section-padding" aria-label="Purchase Reassurance">
      <div className="container">
        <div className="guarantee-block">
          <div className="guarantee-grid">
            <div className="guarantee-card">
              <div className="guarantee-icon-wrap">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <h3 className="guarantee-title">Instant Email Delivery</h3>
              <p className="guarantee-text">
                Your PDF download link arrives in your inbox within 3 seconds of checkout. Open
                immediately on your phone, iPad, or computer.
              </p>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon-wrap">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
              </div>
              <h3 className="guarantee-title">Home Printer Ready</h3>
              <p className="guarantee-text">
                Formatted for standard US Letter (8.5×11") and international A4 home printing. Also
                compatible with GoodNotes, Notability, and PDF tablet apps.
              </p>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon-wrap">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="guarantee-title">30-Day Harvest Guarantee</h3>
              <p className="guarantee-text">
                If these blueprints don't save you hours of planning and help you grow a more
                productive garden, send a quick email for a 100% refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
