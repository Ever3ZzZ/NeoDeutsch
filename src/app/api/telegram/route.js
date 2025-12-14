export async function POST(req) {
  try {
    const { type, data } = await req.json();

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      return Response.json({ ok: false, error: "Missing BOT TOKEN or CHAT ID" });
    }

    const text =
      type === "trial"
        ? `📘 *Пробний урок*\n\n👤 Ім'я: ${data.name}\n📞 Телефон: ${data.phone}\n📧 Email: ${data.email}\n📚 Рівень: ${data.level}`
        : `👨‍🏫 *Заявка викладача*\n\n👤 Ім'я: ${data.name}\n📞 Телефон: ${data.phone}\n📧 Email: ${data.email}\n⏳ Досвід: ${data.experience}\n📝 Про себе: ${data.message}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const send = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "Markdown"
      }),
    });

    const result = await send.json();

    if (!result.ok) {
      return Response.json({ ok: false, error: result.description });
    }

    return Response.json({ ok: true });

  } catch (err) {
    console.error(err);
    return Response.json({ ok: false, error: "Server error" });
  }
}
