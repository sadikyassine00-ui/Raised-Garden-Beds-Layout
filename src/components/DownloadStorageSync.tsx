'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface DownloadStorageSyncProps {
  currentTransactionId?: string;
  currentEmail?: string;
}

export function DownloadStorageSync({
  currentTransactionId,
  currentEmail,
}: DownloadStorageSyncProps) {
  const router = useRouter();
  const [isRestoring, setIsRestoring] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Case 1: URL has transaction_id -> Cache it and guarantee fulfillment
    if (currentTransactionId) {
      try {
        sessionStorage.setItem('rgb_transaction_id', currentTransactionId);
        localStorage.setItem('rgb_transaction_id', currentTransactionId);
        sessionStorage.setItem('rgb_txn_timestamp', Date.now().toString());
        localStorage.setItem('rgb_txn_timestamp', Date.now().toString());

        const effectiveEmail =
          currentEmail ||
          sessionStorage.getItem('rgb_customer_email') ||
          localStorage.getItem('rgb_customer_email') ||
          '';

        if (effectiveEmail) {
          sessionStorage.setItem('rgb_customer_email', effectiveEmail);
          localStorage.setItem('rgb_customer_email', effectiveEmail);
        }

        // Trigger fulfillment if not yet recorded in this browser session
        const dedupKey = `rgb_fulfilled_${currentTransactionId}`;
        if (sessionStorage.getItem(dedupKey) !== '1' && effectiveEmail) {
          fetch('/api/order-fulfillment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              transaction_id: currentTransactionId,
              customer_email: effectiveEmail,
            }),
          })
            .then((res) => {
              if (res.ok) {
                sessionStorage.setItem(dedupKey, '1');
              }
            })
            .catch((err) => {
              console.warn('Fulfillment trigger error:', err);
            });
        }
      } catch (err) {
        console.warn('Storage sync error:', err);
      }
      return;
    }

    // Case 2: URL has NO transaction_id -> Check for recent cached transaction
    try {
      const storedTxn =
        sessionStorage.getItem('rgb_transaction_id') ||
        localStorage.getItem('rgb_transaction_id');
      const storedTime =
        sessionStorage.getItem('rgb_txn_timestamp') ||
        localStorage.getItem('rgb_txn_timestamp');
      const storedEmail =
        sessionStorage.getItem('rgb_customer_email') ||
        localStorage.getItem('rgb_customer_email') ||
        '';

      if (storedTxn) {
        const isRecent =
          !storedTime || Date.now() - parseInt(storedTime, 10) < 24 * 60 * 60 * 1000;

        if (isRecent) {
          setIsRestoring(true);
          const params = new URLSearchParams();
          params.set('transaction_id', storedTxn);
          if (storedEmail) params.set('email', storedEmail);

          router.replace(`/download?${params.toString()}`);
        }
      }
    } catch (err) {
      console.warn('Storage check error:', err);
    }
  }, [currentTransactionId, currentEmail, router]);

  if (!isRestoring) {
    return null;
  }

  return (
    <div className="mb-6 p-4 rounded-xl bg-[#FAF7F2] border border-[#1B4D3E]/20 text-[#1B4D3E] flex items-center justify-center gap-3 text-sm animate-pulse">
      <svg
        className="w-5 h-5 animate-spin"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
        <path d="M12 2a10 10 0 0 1 10 10" />
      </svg>
      <span>Restoring your verified purchase session...</span>
    </div>
  );
}
