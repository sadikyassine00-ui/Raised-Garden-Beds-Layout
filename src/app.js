/**
 * Raised Garden Bed Blueprint & Layout Bundle
 * Mobile-First Landing Page Application Logic
 */

(function () {
  'use strict';

  // Configurable Shopify checkout URL
  // Can be overridden via URL parameter: ?checkout_url=https://store.myshopify.com/cart/...
  // Or via window.SHOPIFY_CHECKOUT_URL
  const DEFAULT_CHECKOUT_URL = 'https://checkout.shopify.com/store/raised-garden-bed-pack?variant=bundle_19';

  function getCheckoutUrl() {
    const params = new URLSearchParams(window.location.search);
    const paramUrl = params.get('checkout_url');
    if (paramUrl) return paramUrl;
    if (window.SHOPIFY_CHECKOUT_URL) return window.SHOPIFY_CHECKOUT_URL;
    return localStorage.getItem('custom_shopify_checkout_url') || DEFAULT_CHECKOUT_URL;
  }

  function handleCheckout(e) {
    if (e) e.preventDefault();
    const url = getCheckoutUrl();

    // Check if user holds Shift or clicked while testing or if demo mode
    const params = new URLSearchParams(window.location.search);
    if (params.get('demo') === '1' || params.get('test') === '1') {
      openCheckoutTester(url);
      return;
    }

    // Direct push into Shopify checkout
    window.location.href = url;
  }

  /* -------------------------------------------------------------------------
     1. STICKY MOBILE PURCHASE BAR
     ------------------------------------------------------------------------- */
  function initStickyBar() {
    const stickyBar = document.getElementById('sticky-bar');
    const heroCta = document.getElementById('hero-cta-btn');

    if (!stickyBar || !heroCta) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // When hero CTA is visible, hide sticky bar.
            // When hero CTA scrolls past viewport, show sticky bar.
            if (entry.isIntersecting) {
              stickyBar.classList.remove('is-visible');
            } else {
              // Only show if user has scrolled past (bounding rect top < 0)
              if (entry.boundingClientRect.top < 0) {
                stickyBar.classList.add('is-visible');
              } else {
                stickyBar.classList.remove('is-visible');
              }
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(heroCta);
    } else {
      // Fallback scroll listener
      window.addEventListener('scroll', () => {
        const rect = heroCta.getBoundingClientRect();
        if (rect.bottom < 0) {
          stickyBar.classList.add('is-visible');
        } else {
          stickyBar.classList.remove('is-visible');
        }
      }, { passive: true });
    }
  }

  /* -------------------------------------------------------------------------
     2. INTERACTIVE BLUEPRINT PREVIEW TABS
     ------------------------------------------------------------------------- */
  function initPreviewTabs() {
    const tabButtons = document.querySelectorAll('.preview-tab-btn');
    const tabPanels = document.querySelectorAll('.preview-tab-panel');

    tabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab');

        tabButtons.forEach((b) => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        tabPanels.forEach((p) => p.classList.remove('is-active'));

        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');

        const activePanel = document.getElementById(targetId);
        if (activePanel) {
          activePanel.classList.add('is-active');
        }
      });
    });
  }

  /* -------------------------------------------------------------------------
     3. INTERACTIVE 4x8 SQUARE-FOOT GARDEN GRID CELL INSPECTION
     ------------------------------------------------------------------------- */
  const plantData = {
    tomato: {
      name: 'Indeterminate Trellised Tomato',
      density: '1 Plant / Sq. Ft.',
      notes: 'Planted on North bed trellis. Companion allies: Sweet Basil & French Marigolds deter hornworms.',
      days: '75-85 days to harvest'
    },
    pepper: {
      name: 'Sweet Bell & Jalapeño Peppers',
      density: '1 Plant / Sq. Ft.',
      notes: 'Thrives in warm micro-climate center rows. Pairs well with Carrots, Basil, and Onions.',
      days: '65-75 days to harvest'
    },
    basil: {
      name: 'Sweet Genovese Basil',
      density: '2 Plants / Sq. Ft.',
      notes: 'Natural pest deterrent. Improves vigor and flavor profile of adjacent tomatoes.',
      days: '40-50 days to harvest'
    },
    beans: {
      name: 'Bush Green Beans (Blue Lake)',
      density: '9 Plants / Sq. Ft.',
      notes: 'Nitrogen-fixing legume. Enriches bed soil for heavy feeding root crops.',
      days: '50-55 days to harvest'
    },
    carrots: {
      name: 'Deep Nantes Carrots',
      density: '16 Plants / Sq. Ft.',
      notes: 'Loose raised bed soil allows perfectly straight taproots. Companion: Rosemary & Lettuce.',
      days: '60-70 days to harvest'
    },
    lettuce: {
      name: 'Butterhead & Romaine Lettuce',
      density: '4 Plants / Sq. Ft.',
      notes: 'Front row South exposure. Shaded slightly by taller mid-row peppers in peak summer heat.',
      days: '45-50 days to harvest'
    },
    radish: {
      name: 'French Breakfast Radish',
      density: '16 Plants / Sq. Ft.',
      notes: 'Fastest harvest crop. Natural soil aerator and trap crop for flea beetles.',
      days: '22-28 days to harvest'
    },
    marigold: {
      name: 'French Marigold (Tagetes)',
      density: '4 Plants / Sq. Ft.',
      notes: 'Roots secrete alpha-terthienyl, suppressing root-knot nematodes and repelling aphids.',
      days: 'Continuous bloom'
    }
  };

  function initGridInspector() {
    const cells = document.querySelectorAll('.grid-cell');
    const inspectName = document.getElementById('inspect-name');
    const inspectDensity = document.getElementById('inspect-density');
    const inspectNotes = document.getElementById('inspect-notes');

    if (!cells.length || !inspectName) return;

    cells.forEach((cell) => {
      cell.addEventListener('click', () => {
        cells.forEach((c) => c.classList.remove('is-selected'));
        cell.classList.add('is-selected');

        const cropKey = cell.getAttribute('data-crop');
        const data = plantData[cropKey];

        if (data) {
          inspectName.textContent = data.name;
          inspectDensity.textContent = data.density + ' · ' + data.days;
          inspectNotes.textContent = data.notes;
        }
      });
    });
  }

  /* -------------------------------------------------------------------------
     4. COMPACT FAQ ACCORDION
     ------------------------------------------------------------------------- */
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
      const trigger = item.querySelector('.faq-trigger');
      if (!trigger) return;

      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        // Close other items for a clean single-open mobile experience
        faqItems.forEach((other) => {
          other.classList.remove('is-open');
          const btn = other.querySelector('.faq-trigger');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* -------------------------------------------------------------------------
     5. DIRECT CHECKOUT ROUTING & TEST MODAL
     ------------------------------------------------------------------------- */
  function initCheckoutButtons() {
    const checkoutButtons = document.querySelectorAll('[data-action="checkout"]');
    checkoutButtons.forEach((btn) => {
      btn.addEventListener('click', handleCheckout);
    });

    // Check for discreet setup trigger in URL: ?setup=1
    const params = new URLSearchParams(window.location.search);
    if (params.get('setup') === '1') {
      const trigger = document.getElementById('setup-trigger-wrap');
      if (trigger) trigger.style.display = 'block';
    }
  }

  function openCheckoutTester(currentUrl) {
    let backdrop = document.getElementById('checkout-tester-modal');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'checkout-tester-modal';
      backdrop.className = 'checkout-modal-backdrop';
      backdrop.innerHTML = `
        <div class="checkout-modal" role="dialog" aria-modal="true">
          <div class="modal-header">
            <h3 class="modal-title">Shopify Checkout Link Config</h3>
            <button class="btn-close-modal" id="btn-close-checkout-modal" aria-label="Close">✕</button>
          </div>
          <p style="font-size: 13.5px; color: var(--ink-secondary); margin-bottom: 14px;">
            Set your real Shopify checkout or Buy Button URL below. Visitors will be sent directly to this address.
          </p>
          <div style="margin-bottom: 16px;">
            <label style="display: block; font-size: 12px; font-weight: 600; font-family: var(--font-mono); color: var(--ink-muted); margin-bottom: 6px;">
              CURRENT CHECKOUT URL
            </label>
            <input type="text" id="shopify-url-input" value="${currentUrl}" style="width: 100%; padding: 10px 12px; font-size: 13px; font-family: var(--font-mono); border: 1px solid var(--hairline-strong); border-radius: var(--radius-xs); background: var(--bg-surface-muted);" />
          </div>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button id="btn-save-checkout-url" style="padding: 10px 18px; background: var(--signal); color: #fff; font-size: 14px; font-weight: 600; border-radius: var(--radius-xs);">
              Save & Redirect
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(backdrop);

      document.getElementById('btn-close-checkout-modal').addEventListener('click', () => {
        backdrop.classList.remove('is-active');
      });

      document.getElementById('btn-save-checkout-url').addEventListener('click', () => {
        const val = document.getElementById('shopify-url-input').value.trim();
        if (val) {
          localStorage.setItem('custom_shopify_checkout_url', val);
          backdrop.classList.remove('is-active');
          window.location.href = val;
        }
      });

      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) backdrop.classList.remove('is-active');
      });
    }

    backdrop.classList.add('is-active');
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initStickyBar();
    initPreviewTabs();
    initGridInspector();
    initFaqAccordion();
    initCheckoutButtons();
  });
})();
