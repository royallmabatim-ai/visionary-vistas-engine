/**
 * Conversion Tracking Utility
 *
 * Pushes key user actions onto the GTM dataLayer so tags configured in
 * Google Tag Manager (GTM-M9T3TJQZ) can forward them to GA4, Google Ads,
 * or any other destination.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const pushEvent = (event: string, params?: Record<string, unknown>) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...(params || {}) });
};

/**
 * Track when someone clicks a phone number to call
 */
export const trackPhoneClick = (phoneNumber: string) => {
  pushEvent("phone_click", {
    event_category: "contact",
    event_label: phoneNumber,
    value: 1.0,
    currency: "KES",
  });
};

/**
 * Track when someone clicks WhatsApp to chat
 */
export const trackWhatsAppClick = (source: string) => {
  pushEvent("whatsapp_click", {
    event_category: "contact",
    event_label: source,
    value: 1.0,
    currency: "KES",
  });
};

/**
 * Track when someone submits the quote request form
 */
export const trackQuoteSubmission = (subject: string) => {
  pushEvent("generate_lead", {
    event_category: "lead",
    event_label: subject || "Quote Request",
    value: 5.0,
    currency: "KES",
  });
};

/**
 * Track when someone clicks on a specific product
 */
export const trackProductClick = (productName: string, action: string) => {
  pushEvent("select_item", {
    event_category: "product",
    event_label: productName,
    item_name: productName,
    action,
  });
};

/**
 * Track email link clicks
 */
export const trackEmailClick = (email: string) => {
  pushEvent("email_click", {
    event_category: "contact",
    event_label: email,
  });
};
