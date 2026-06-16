import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="p-8 rounded-lg">
      <h2 className="text-2xl font-anton mb-4 text-white">Get in touch</h2>
      <p className="text-muted mb-6">I'm available for freelance work and collaborations.</p>

      <form method="post" action="mailto:you@example.com" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" placeholder="Your name" className="p-3 rounded bg-[#071018] border border-gray-800 text-muted" />
        <input name="email" placeholder="Email" className="p-3 rounded bg-[#071018] border border-gray-800 text-muted" />
        <textarea name="message" placeholder="Message" className="p-3 rounded bg-[#071018] border border-gray-800 text-muted md:col-span-2 h-32" />

        <div className="md:col-span-2 flex items-center gap-4">
          <button type="submit" className="px-5 py-3 bg-teal-400 text-gray-900 rounded font-semibold">Send message</button>
          <a href="mailto:you@example.com" className="text-muted underline">Or email directly</a>
        </div>
      </form>
    </section>
  );
}
