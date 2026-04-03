/**
 * Google Ads & Analytics Conversion Tracking Utility
 * 
 * Tracks key user actions as conversions so Google Ads can optimize
 * to show ads to people who are most likely to contact Royal Mabati.
 */

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Google Ads Conversion ID
const ADS_CONVERSION_ID = "AW-2270137631";

/**
 * Send a conversion event to Google Ads & GA4
 */
const sendConversion = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window.gtag === "function") {
    // GA4 event
    window.gtag("event", eventName, params);
  }
};

/**
 * Track when someone clicks a phone number to call
 */
export const trackPhoneClick = (phoneNumber: string) => {
  sendConversion("conversion", {
    send_to: `${ADS_CONVERSION_ID}/phone_call`,
    event_category: "contact",
    event_label: phoneNumber,
    value: 1.0,
    currency: "KES",
  });
  sendConversion("phone_click", {
    event_category: "contact",
    event_label: phoneNumber,
  });
};

/**
 * Track when someone clicks WhatsApp to chat
 */
export const trackWhatsAppClick = (source: string) => {
  sendConversion("conversion", {
    send_to: `${ADS_CONVERSION_ID}/whatsapp_inquiry`,
    event_category: "contact",
    event_label: source,
    value: 1.0,
    currency: "KES",
  });
  sendConversion("whatsapp_click", {
    event_category: "contact",
    event_label: source,
  });
};

/**
 * Track when someone submits the quote request form
 */
export const trackQuoteSubmission = (subject: string) => {
  sendConversion("conversion", {
    send_to: `${ADS_CONVERSION_ID}/quote_request`,
    event_category: "lead",
    event_label: subject || "Quote Request",
    value: 5.0,
    currency: "KES",
  });
  sendConversion("generate_lead", {
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
  sendConversion("select_item", {
    event_category: "product",
    event_label: productName,
    item_name: productName,
    action: action,
  });
};

/**
 * Track email link clicks
 */
export const trackEmailClick = (email: string) => {
  sendConversion("email_click", {
    event_category: "contact",
    event_label: email,
  });
};
