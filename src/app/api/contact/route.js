import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
      throw new Error(
        "Missing SMTP_EMAIL or SMTP_PASSWORD environment variables"
      );
    }
    const formData = await request.json();

    // Create transporter with Zoho SMTP settings using port 587 and TLS
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587,
      secure: false, // Use STARTTLS (false for port 587, as TLS is handled via STARTTLS)
      auth: {
        user: process.env.SMTP_EMAIL, // Your Zoho email
        pass: process.env.SMTP_PASSWORD, // Your Zoho password or app-specific password
      },
      tls: {
        // Ensure STARTTLS is used
        rejectUnauthorized: true,
      },
    });

    // Prepare email content
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_TO_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${formData.fullName || "Not provided"}</p>
        <p><strong>Company:</strong> ${formData.company || "Not provided"}</p>
        <p><strong>Email:</strong> ${formData.email || "Not provided"}</p>
        <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
        <p><strong>Services:</strong> ${
          formData.services?.join(", ") || "None selected"
        }</p>
        <p><strong>Message:</strong> ${formData.message || "No message"}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
