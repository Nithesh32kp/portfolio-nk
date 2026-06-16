import React from "react";

const notes = [
  "ALEX TRANSFORMED OUR WEBSITE WITH HIS EXCEPTIONAL DESIGN SKILLS AND TECHNICAL EXPERTISE.",
  "ALEX'S ATTENTION TO DETAIL AND USER-CENTRIC APPROACH RESULTED IN A BEAUTIFUL PLATFORM.",
  "JAWAD IS A RARE TALENT WHO EXCELS AT BOTH UI/UX DESIGN AND FULL-STACK DEVELOPMENT.",
];

export default function Testimonials() {
  return (
    <section>
      <h2 className="text-4xl font-anton mb-8 text-white">TESTIMONIALS</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {notes.map((n, i) => (
          <blockquote key={i} className="p-6 card text-muted">{n}</blockquote>
        ))}
      </div>
    </section>
  );
}
