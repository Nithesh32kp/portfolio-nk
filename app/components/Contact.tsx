"use client";

import React, { useState, useRef } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const [copied, setCopied] = useState(false);
  const blurredRef = useRef(false);

  const EMAIL = "nitheshk573@gmail.com";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/hiring-users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        const firstError =
          data?.data && Object.values(data.data)[0]
            ? (Object.values(data.data)[0] as string[])[0]
            : data?.message || "Something went wrong.";
        throw new Error(firstError);
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    blurredRef.current = false;

    const onBlur = () => {
      blurredRef.current = true;
    };
    window.addEventListener("blur", onBlur);

    window.location.href = `mailto:${EMAIL}`;

    setTimeout(() => {
      window.removeEventListener("blur", onBlur);
      if (!blurredRef.current) {
        setShowEmailOptions(true);
      }
    }, 600);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="rounded-4xl border border-cyan-400/20 bg-slate-900/70 p-8 shadow-2xl">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
          <h2 className="mt-3 text-3xl font-anton text-white">Let&apos;s build something great together</h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            I&apos;m open to freelance projects, full-time roles, and product collaborations where modern web experiences matter.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            onClick={handleEmailClick}
            className="mt-6 inline-flex text-sm font-semibold text-cyan-300 underline decoration-cyan-400/50 underline-offset-4"
          >
            {EMAIL}
          </a>

          {showEmailOptions && (
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-cyan-400/40 underline-offset-4 hover:text-cyan-300"
              >
                Open in Gmail
              </a>
              <a
                href={`https://outlook.live.com/mail/0/deeplink/compose?to=${EMAIL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-cyan-400/40 underline-offset-4 hover:text-cyan-300"
              >
                Open in Outlook
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="underline decoration-cyan-400/40 underline-offset-4 hover:text-cyan-300"
              >
                {copied ? "Copied!" : "Copy address"}
              </button>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            name="name"
            placeholder="Your name"
            required
            className="rounded border border-slate-800 bg-slate-950/80 p-3 text-sm text-slate-200 outline-none ring-0"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="rounded border border-slate-800 bg-slate-950/80 p-3 text-sm text-slate-200 outline-none ring-0"
          />
          <input
            name="phone"
            placeholder="Phone number"
            required
            className="rounded border border-slate-800 bg-slate-950/80 p-3 text-sm text-slate-200 outline-none ring-0 md:col-span-2"
          />
          <textarea
            name="message"
            placeholder="Tell me about your project"
            className="h-32 rounded border border-slate-800 bg-slate-950/80 p-3 text-sm text-slate-200 outline-none ring-0 md:col-span-2"
          />

          <div className="flex items-center gap-4 md:col-span-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>
            <a
              href={`mailto:${EMAIL}`}
              onClick={handleEmailClick}
              className="text-sm text-slate-400 underline"
            >
              Email directly
            </a>
          </div>

          {status === "success" && (
            <p className="text-sm text-emerald-400 md:col-span-2">Message sent — I&apos;ll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400 md:col-span-2">{errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}