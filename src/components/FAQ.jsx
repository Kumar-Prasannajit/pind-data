import { useState } from "react";

export default function FAQ({ faqs }) {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-gray-100 mx-8 my-12 p-6 rounded-xl">
      <h2 className="text-center text-xl mb-6">FAQ</h2>

      {faqs.map((f, i) => (
        <div key={i} className="border-b py-3">
          <button
            className="flex justify-between w-full"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{f.q}</span>
            <span>{open === i ? "-" : "+"}</span>
          </button>

          {open === i && <p className="mt-2 text-sm text-gray-600">{f.a}</p>}
        </div>
      ))}
    </section>
  );
}
