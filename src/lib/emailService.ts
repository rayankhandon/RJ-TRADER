export interface WholesaleQuotePayload {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  city: string;
  productName: string;
  category?: string;
  productId?: string;
  quantity: string;
  requirements?: string;
  pageUrl?: string;
}

export interface EmailServiceResult {
  success: boolean;
  message?: string;
  isDemo?: boolean;
}

/**
 * Sends wholesale order/quote requests to business email via zero-backend third-party email service (Web3Forms/Formspree/EmailJS).
 */
export async function sendWholesaleQuote(payload: WholesaleQuotePayload): Promise<EmailServiceResult> {
  const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const formspreeKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY;

  const currentUrl = payload.pageUrl || (typeof window !== "undefined" ? window.location.href : "https://rjtraders.pk");
  const dateTimeStr = new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" });

  const formattedEmailBody = `
NEW WHOLESALE ORDER / QUOTE REQUEST

Customer:
Name: ${payload.name}
Company: ${payload.companyName}
Phone: ${payload.phone}
Email: ${payload.email}
City: ${payload.city}

Product:
Product Name: ${payload.productName}
Category: ${payload.category || "General Wholesale"}
Product ID / SKU: ${payload.productId || "N/A"}
Quantity: ${payload.quantity || "Not specified"}

Customer Message:
${payload.requirements?.trim() || "No additional message/requirements."}

Date & Time: ${dateTimeStr}
Page URL: ${currentUrl}
  `.trim();

  // 1. If Web3Forms Access Key is set in .env.local
  if (web3FormsKey && web3FormsKey !== "YOUR_WEB3FORMS_ACCESS_KEY") {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          subject: `NEW WHOLESALE ORDER / QUOTE REQUEST - ${payload.companyName || payload.name}`,
          from_name: "RJ Traders B2B Website",
          name: payload.name,
          company: payload.companyName,
          email: payload.email,
          phone: payload.phone,
          city: payload.city,
          product_name: payload.productName,
          category: payload.category || "General Wholesale",
          product_id: payload.productId || "N/A",
          quantity: payload.quantity || "N/A",
          message: formattedEmailBody,
          page_url: currentUrl,
          date_time: dateTimeStr,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        return { success: true, message: "Request sent successfully via Web3Forms!" };
      } else {
        return { success: false, message: data.message || "Failed to send email via Web3Forms." };
      }
    } catch (err: any) {
      console.error("[EmailService] Error submitting to Web3Forms:", err);
      return { success: false, message: err.message || "Network error. Please try again." };
    }
  }

  // 2. If Formspree Key is set
  if (formspreeKey && formspreeKey !== "YOUR_FORMSPREE_KEY") {
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          subject: `NEW WHOLESALE ORDER / QUOTE REQUEST - ${payload.companyName || payload.name}`,
          name: payload.name,
          company: payload.companyName,
          email: payload.email,
          phone: payload.phone,
          city: payload.city,
          productName: payload.productName,
          category: payload.category,
          productId: payload.productId,
          quantity: payload.quantity,
          message: formattedEmailBody,
          pageUrl: currentUrl,
        }),
      });

      if (response.ok) {
        return { success: true, message: "Request sent successfully via Formspree!" };
      } else {
        return { success: false, message: "Failed to send email via Formspree." };
      }
    } catch (err: any) {
      console.error("[EmailService] Error submitting to Formspree:", err);
      return { success: false, message: err.message || "Network error." };
    }
  }

  // 3. Fallback for initial setup before user sets environment key
  console.warn(
    "[EmailService] No email service access key configured in environment (NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY). Simulating successful form submission."
  );

  // Small artificial delay to simulate async network submission
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    isDemo: true,
    message: "Demo submission complete. (Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local to receive live emails)",
  };
}
