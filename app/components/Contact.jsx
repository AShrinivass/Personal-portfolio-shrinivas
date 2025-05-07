"use client";
import React from "react";

function Contact() {
  return (
    <div className="px-5 flex flex-col items-center rounded-t-3xl">
      <h2 className="text-3xl font-bold text-[#f2e6d8] mb-8">
        Let's get in touch
      </h2>
      <form
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
            name="email"
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
  );
}

export default Contact;
