import { EmailTemplate} from "../../components/email-template"
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const { name, email, message } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'fileshare@raiyananwar.com',
      to: ['raiyananwar.12@gmail.com'],
      subject: `${name} sent you a message`,
      react: EmailTemplate({ message: message, email: email }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
