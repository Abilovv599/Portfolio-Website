"use server";

import { createElement } from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/utils";
import { ContactFormEmail } from "@/email";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "abilovv@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });

    return { data };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};

export { sendEmail };
