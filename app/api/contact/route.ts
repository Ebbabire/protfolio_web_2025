export const runtime = "nodejs";

import { Resend } from "resend";

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, message } = data;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`,
      to: process.env.TO_EMAIL || "ebba.birhanu@gmail.com",
      subject: `Portfolio Contact from ${name}`,
      text: `Hello,

You’ve received a new message through your portfolio website:

Name: ${name}
Email: ${email}

Message:
"${message}"

Please respond to the sender as needed.

Best regards,
Your Portfolio Website
`,
    });

    console.log("SEND RESULT:", data);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("SEND ERROR:", e);
    if (e instanceof Error) {
      return new Response(
        JSON.stringify({ error: e.message || "Failed to send email" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }
}
