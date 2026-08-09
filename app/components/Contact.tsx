"use client";

import React, { useState, useRef } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const [copied, setCopied] = useState(false);
  const blurredRef = useRef(false);

  const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "nitheshk573@gmail.com";
  const CONTACT_API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL || "https://adminpage-8xdz.onrender.com/api/hiring-users";

  const getApiMessage = (data: unknown) => {
    if (typeof data === "object" && data !== null) {
      const payload = data as Record<string, unknown>;

      if (typeof payload.message === "string" && payload.message.trim()) {
        return payload.message;
      }

      if (typeof payload.error === "string" && payload.error.trim()) {
        return payload.error;
      }

      if (payload.data && typeof payload.data === "object") {
        const dataEntries = Object.values(payload.data as Record<string, unknown>);
        const firstValue = dataEntries[0];

        if (Array.isArray(firstValue) && firstValue[0]) {
          return String(firstValue[0]);
        }

        if (typeof firstValue === "string" && firstValue.trim()) {
          return firstValue;
        }
      }
    }

    return "Something went wrong. Please try again.";
  };

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
    setSuccessMessage("");

    try {
      const res = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        const message = getApiMessage(data);
        throw new Error(message);
      }

      setStatus("success");
      setSuccessMessage(typeof data?.message === "string" && data.message.trim()
        ? data.message
        : "Thanks! Your message has been sent successfully.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
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
    <section id="contact" className="relative overflow-hidden rounded-[2.5rem] border border-cyan-400/15 bg-slate-950/90 p-8 shadow-2xl shadow-cyan-500/10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-cyan-500/10 to-transparent" />
      <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">Contact</p>
            <h2 className="mt-3 text-4xl font-anton text-white">Let&apos;s build something great together</h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-400">
            I&apos;m open to freelance projects, full-time roles, and product collaborations where modern web experiences matter. Whether it&apos;s a web app, API integration, or mobile product, I&apos;m ready to help you ship faster.
          </p>

          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-6 shadow-xl shadow-cyan-500/5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Fastest way to connect</p>
                <p className="mt-2 text-sm text-slate-300">Send your idea or launch plan and I&apos;ll reply quickly.</p>
              </div>
              <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 ring-1 ring-cyan-300/15">
                24h response
              </span>
            </div>

            <a
              href={`mailto:${EMAIL}`}
              onClick={handleEmailClick}
              className="mt-6 inline-flex w-full items-center justify-between rounded-full border border-cyan-400/20 bg-slate-950/95 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-slate-900 sm:w-auto"
            >
              <span>{EMAIL}</span>
              <span className="text-cyan-200">↗</span>
            </a>

            <p className="mt-4 text-sm text-slate-400">
              Prefer a different mail client? Open Gmail, Outlook, or copy the address below.
            </p>

            {showEmailOptions && (
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-300">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-700/80 bg-slate-950/90 px-4 py-2 underline decoration-cyan-400/40 underline-offset-4 transition hover:text-cyan-300"
                >
                  Open in Gmail
                </a>
                <a
                  href={`https://outlook.live.com/mail/0/deeplink/compose?to=${EMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-700/80 bg-slate-950/90 px-4 py-2 underline decoration-cyan-400/40 underline-offset-4 transition hover:text-cyan-300"
                >
                  Open in Outlook
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="rounded-full border border-slate-700/80 bg-slate-950/90 px-4 py-2 underline decoration-cyan-400/40 underline-offset-4 transition hover:text-cyan-300"
                >
                  {copied ? "Copied!" : "Copy address"}
                </button>
              </div>
            )}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-slate-800/80 bg-slate-950/95 p-6 shadow-xl shadow-slate-950/20"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="name"
              placeholder="Your name"
              required
              className="h-14 rounded-3xl border border-slate-800 bg-slate-900/95 px-4 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/15"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="h-14 rounded-3xl border border-slate-800 bg-slate-900/95 px-4 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/15"
            />
          </div>

          <div className="mt-4">
            <input
              name="phone"
              placeholder="Phone number"
              required
              className="w-full h-14 rounded-3xl border border-slate-800 bg-slate-900/95 px-4 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/15"
            />
          </div>

          <div className="mt-4">
            <textarea
              name="message"
              placeholder="Tell me about your project"
              required
              className="h-40 w-full rounded-[1.5rem] border border-slate-800 bg-slate-900/95 px-4 py-4 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/15"
            />
          </div>

          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex h-14 items-center justify-center rounded-full bg-cyan-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>
            <a
              href={`mailto:${EMAIL}`}
              onClick={handleEmailClick}
              className="text-sm text-slate-400 underline decoration-cyan-400/40 underline-offset-4 transition hover:text-cyan-200"
            >
              Email directly instead
            </a>
          </div>

          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
            I usually respond within 24-48 hours. If you want to share a specification, roadmap, or launch timeline, drop it in the message.
          </p>

          {status === "success" && (
            <p aria-live="polite" className="mt-4 text-sm text-emerald-400">{successMessage}</p>
          )}
          {status === "error" && (
            <p aria-live="polite" className="mt-4 text-sm text-red-400">{errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}