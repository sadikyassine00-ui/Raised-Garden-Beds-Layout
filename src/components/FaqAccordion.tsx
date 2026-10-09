'use client';

import React, { useState } from 'react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: 1,
    question: 'How do I receive my files after payment?',
    answer:
      'You receive instant access. As soon as your order completes, an automated download link appears on your order confirmation screen and is emailed directly to your inbox within seconds. You can download and save the files immediately to your smartphone, tablet, or computer.',
  },
  {
    id: 2,
    question: 'Can I print these on regular home printer paper?',
    answer:
      'Yes, absolutely. The bundle includes both standard US Letter (8.5" x 11") and international A4 formats designed with crisp, high-contrast black line work that prints legibly on standard home monochrome or color printers. They can also be sent to any local copy shop or used digitally on iPad note-taking apps.',
  },
  {
    id: 3,
    question: 'Do I need woodworking experience for the build plans?',
    answer:
      'Not at all. The cut lists and assembly instructions are beginner friendly. They use simple 90-degree straight cuts that can be done with a basic hand saw, circular saw, or cut directly at your local lumber yard. All hardware sizes, screw lengths, and pilot hole positions are clearly specified.',
  },
  {
    id: 4,
    question: 'What size beds are included in the bundle?',
    answer:
      'The bundle includes complete blueprints for four configurations: the standard 4\' x 8\' high-yield bed, the 4\' x 4\' compact intensive square bed, the 2\' x 8\' narrow border bed (great along fences or narrow walkways), and an 8\' x 8\' L-shaped corner configuration.',
  },
  {
    id: 5,
    question: 'Is this a one-time payment or a subscription?',
    answer:
      'It is a single, one-time payment of $19. There are no recurring fees or hidden charges. You keep the digital files forever and receive all future updates for free.',
  },
];

export function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section-padding" aria-label="Frequently Asked Questions">
      <div className="container-narrow">
        <div className="section-header">
          <p className="section-eyebrow">Common Questions</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">Quick answers to help you get started right away.</p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  onClick={() => toggle(faq.id)}
                >
                  <span>{faq.question}</span>
                  <svg
                    className="faq-icon-chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className="faq-content">{faq.answer}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
