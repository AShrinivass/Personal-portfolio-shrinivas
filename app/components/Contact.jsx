"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const ref = useRef();
  const [isSent, setIsSent] = useState(false);
  const [err, setErr] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        ref.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setIsSent(!isSent);
          setErr(false);
          ref.current.reset();
        },
        (error) => {
          setErr(!err);
          setIsSent(false);
          console.log(error);
        }
      );
  };
  return (
    <>
      <div className="px-5 flex flex-col items-center rounded-t-3xl">
        <h2 className="text-3xl font-bold text-[#f2e6d8] mb-8">
          Let's get in touch
        </h2>
        <form
          ref={ref}
          onSubmit={sendEmail}
          action="#"
          method="POST"
          className="bg-[#2a2525] rounded-lg p-8 w-full max-w-md"
          style={{
            boxShadow: `
            0 4px 8px rgba(0, 0, 0, 0.2),
            0 8px 30px rgba(0, 0, 0, 0.25)
          `,
          }}
        >
          <div className="mb-4">
            <label className="block text-[#e4d8c4] mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 bg-[#3a3232] border border-[#4d4545] rounded text-[#f2e6d8] placeholder-[#bbaea0] focus:outline-none focus:ring-2 focus:ring-[#c4b69b]"
              placeholder="Your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#e4d8c4] mb-1">Email</label>
            <input
              type="email"
              name="name"
              required
              className="w-full px-4 py-2 bg-[#3a3232] border border-[#4d4545] rounded text-[#f2e6d8] placeholder-[#bbaea0] focus:outline-none focus:ring-2 focus:ring-[#c4b69b]"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#e4d8c4] mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 bg-[#3a3232] border border-[#4d4545] rounded text-[#f2e6d8] placeholder-[#bbaea0] focus:outline-none focus:ring-2 focus:ring-[#c4b69b]"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#c4b69b] hover:bg-[#b5a88f] text-[#201c1c] font-semibold py-2 px-4 rounded transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
      <span className="text-white flex justify-center">
        {isSent && "your message has been sent to Shrinivas"}
        {err && "Sorry, something went wrong"}
      </span>
    </>
  );
}

export default Contact;
