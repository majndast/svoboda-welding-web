import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const data = schema.parse(body);

    await resend.emails.send({
      from: "Svoboda Welding <noreply@svobodawelding.cz>",
      to: ["info@svobodawelding.cz"],
      replyTo: data.email,
      subject: `Nová poptávka od ${data.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0c0c0c; color: #e8e4dc; padding: 32px;">
          <div style="border-top: 2px solid #e07b00; padding-top: 24px; margin-bottom: 24px;">
            <h1 style="font-size: 28px; font-weight: 900; text-transform: uppercase; margin: 0; color: #e8e4dc;">
              Nová poptávka
            </h1>
            <p style="color: #e07b00; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; margin-top: 4px;">
              Svoboda Welding
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e1e1e; color: #6b6560; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 120px;">
                Jméno
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e1e1e; color: #e8e4dc;">
                ${data.name}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e1e1e; color: #6b6560; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">
                E-mail
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e1e1e; color: #e8e4dc;">
                <a href="mailto:${data.email}" style="color: #e07b00;">${data.email}</a>
              </td>
            </tr>
            ${
              data.phone
                ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e1e1e; color: #6b6560; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">
                Telefon
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e1e1e; color: #e8e4dc;">
                <a href="tel:${data.phone}" style="color: #e07b00;">${data.phone}</a>
              </td>
            </tr>`
                : ""
            }
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #6b6560; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px;">
              Popis zakázky
            </p>
            <div style="background: #111111; border: 1px solid #2a2a2a; padding: 16px; color: #e8e4dc; line-height: 1.6; white-space: pre-wrap;">
              ${data.message}
            </div>
          </div>

          <p style="margin-top: 24px; color: #3d3a37; font-size: 11px;">
            Zpráva odeslána přes kontaktní formulář na svobodawelding.cz
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
