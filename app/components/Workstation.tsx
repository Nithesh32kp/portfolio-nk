import React from "react";

const items = [
  { title: "My Main Working Area" },
  { title: "My Macbook" },
  { title: "My iPad" },
  { title: "My Mac & iPhone" },
];

export default function Workstation() {
  return (
    <section>
      <h2 className="text-4xl font-anton mb-8 text-white">MY WORKSTATION</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.title} className="p-4 card">
            <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-700 rounded mb-3" />
            <h3 className="font-semibold text-white">{it.title}</h3>
            <p className="text-sm text-muted">Short description about this item.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
