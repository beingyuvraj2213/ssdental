import fetch from "node-fetch";

/**
 * Sends a WhatsApp message to the clinic owner using the CallMeBot API.
 * Docs: https://www.callmebot.com/blog/free-api-whatsapp-messages/
 *
 * Setup (one-time):
 * 1. Save +34 644 59 71 44 as a contact on your phone.
 * 2. WhatsApp that number: "I allow callmebot to send me messages"
 * 3. You'll get an apikey back on WhatsApp - put it in .env as CALLMEBOT_API_KEY
 * 4. Put your own WhatsApp number (with country code, digits only) in OWNER_WHATSAPP_NUMBER
 */
export async function sendAppointmentWhatsApp(appointment) {
  const phone = process.env.OWNER_WHATSAPP_NUMBER;
  const apikey = process.env.CALLMEBOT_API_KEY;

  if (!phone || !apikey || phone.includes("XXXX") || apikey.includes("your_")) {
    console.warn(
      "[whatsapp] CallMeBot not configured yet - skipping WhatsApp notification. " +
        "Fill OWNER_WHATSAPP_NUMBER and CALLMEBOT_API_KEY in backend/.env"
    );
    return { sent: false, reason: "not_configured" };
  }

  const text =
    `New appointment booked at SS Dental Health!\n\n` +
    `Patient: ${appointment.name}\n` +
    `Phone: ${appointment.phone}\n` +
    `Service: ${appointment.service}\n` +
    `Preferred: ${appointment.preferredDate} at ${appointment.preferredTime}\n` +
    (appointment.message ? `Note: ${appointment.message}\n` : "") +
    `\nReply to the patient to confirm.`;

  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(
    text
  )}&apikey=${apikey}`;

  try {
    const res = await fetch(url);
    const body = await res.text();
    console.log("[whatsapp] CallMeBot response:", body);
    return { sent: true, response: body };
  } catch (err) {
    console.error("[whatsapp] Failed to send WhatsApp notification:", err.message);
    return { sent: false, reason: err.message };
  }
}
