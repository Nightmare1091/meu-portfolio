import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["jjoaopedrodeoliveira1091@gmail.com"],
      subject: `Novo contato: ${subject}`,
      text: `
Nome: ${name}
Email: ${email}

Mensagem:
${message}
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: "Erro ao enviar email" }, { status: 500 });
  }
}