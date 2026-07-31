import fetch from "node-fetch";

/**
 * Sends a Telegram message to the clinic owner using the Telegram Bot API.
 *
 * Setup:
 * 1. Create a bot with BotFather and copy the bot token.
 * 2. Start a chat with your bot and use @userinfobot or another tool to get your chat ID.
 * 3. Put the values in backend/.env as TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.
 */
export async function sendAppointmentTelegram(appointment) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId || token.includes("your_") || chatId.includes("your_")) {
    console.warn(
      "[telegram] Bot token or chat ID not configured yet - skipping Telegram notification. " +
        "Fill TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in backend/.env"
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

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
    });

    const body = await res.text();
    console.log("[telegram] Telegram response:", body);
    return { sent: true, response: body };
  } catch (err) {
    console.error("[telegram] Failed to send Telegram notification:", err.message);
    return { sent: false, reason: err.message };
  }
}
