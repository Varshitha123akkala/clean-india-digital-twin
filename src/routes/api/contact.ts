import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Invalid email address"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

export const Route = createFileRoute("/api/contact")({
  component: () => null,
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          
          // 1. Input validation using Zod
          const result = contactSchema.safeParse(body);
          if (!result.success) {
            return new Response(
              JSON.stringify({
                success: false,
                message: "Validation failed",
                errors: result.error.flatten().fieldErrors,
              }),
              {
                status: 400,
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          const { name, email, message } = result.data;
          const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "codehacker12345000@gmail.com";
          const apiKey = process.env.RESEND_API_KEY;

          // 2. Dev Fallback / Log to console if key is missing or is the placeholder
          if (!apiKey || apiKey === "re_xxxxxxxxxxxxxxxxxxxxx") {
            console.warn("==================================================");
            console.warn("RESEND_API_KEY is missing or placeholder. Running in DEVELOPMENT mode.");
            console.warn("MOCK EMAIL DISPATCH:");
            console.warn(`Recipient (Admin): ${receiverEmail}`);
            console.warn(`Subject: New Contact Form Submission - Clean India Website`);
            console.warn("------------------------------------------------");
            console.warn(`Name: ${name}`);
            console.warn(`Email: ${email}`);
            console.warn(`Message:\n${message}`);
            console.warn("------------------------------------------------");
            console.warn(`Auto-reply sent to: ${email}`);
            console.warn("==================================================");

            return new Response(
              JSON.stringify({
                success: true,
                message: "Message logged to console successfully (Development Mode)",
              }),
              {
                status: 200,
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          // 3. Dispatch to Admin (codehacker12345000@gmail.com)
          const adminResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              from: "Clean India Website <onboarding@resend.dev>",
              to: receiverEmail,
              subject: "New Contact Form Submission - Clean India Website",
              html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 600px; margin: auto;">
                  <h2 style="color: #4CAF50; border-bottom: 2px solid #4CAF50; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
                  <p style="font-size: 14px; margin: 10px 0;"><strong>Name:</strong> ${name}</p>
                  <p style="font-size: 14px; margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #4CAF50; text-decoration: none;">${email}</a></p>
                  <p style="font-size: 14px; margin: 10px 0; font-weight: bold;">Message:</p>
                  <div style="background-color: #f8fafc; border-left: 4px solid #4CAF50; padding: 15px; border-radius: 4px; font-size: 14px; white-space: pre-wrap;">${message}</div>
                </div>
              `,
            }),
          });

          if (!adminResponse.ok) {
            const errorText = await adminResponse.text();
            console.error("Resend API response error (Admin notify):", errorText);
            return new Response(
              JSON.stringify({ success: false, message: "Failed to send message" }),
              {
                status: 500,
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          // 4. Dispatch Auto-Reply to user (Confirm receipt)
          try {
            await fetch("https://api.resend.com/emails", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
              },
              body: JSON.stringify({
                from: "Clean India <onboarding@resend.dev>",
                to: email,
                subject: "Thank You for Contacting Clean India",
                html: `
                  <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 600px; margin: auto;">
                    <p style="font-size: 14px;">Hello ${name},</p>
                    <p style="font-size: 14px;">Thank you for reaching out to Clean India.</p>
                    <p style="font-size: 14px;">We have successfully received your message and our team will get back to you shortly.</p>
                    <p style="font-size: 14px; margin-top: 20px; border-top: 1px solid #eee; padding-top: 15px;">Regards,<br /><strong>Clean India Team</strong></p>
                  </div>
                `,
              }),
            });
          } catch (autoReplyErr) {
            console.error("Auto-reply confirmation email failed to send:", autoReplyErr);
          }

          return new Response(
            JSON.stringify({ success: true, message: "Message sent successfully" }),
            {
              status: 200,
              headers: { "Content-Type": "application/json" },
            }
          );
        } catch (error) {
          console.error("Unhandled error in contact api route handler:", error);
          return new Response(
            JSON.stringify({ success: false, message: "Failed to send message" }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            }
          );
        }
      },
    },
  },
});
