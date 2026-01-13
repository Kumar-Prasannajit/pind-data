export default function ServicesGrid({ cards }) {
  return (
    <section className="px-8 py-12">
      <h2 className="text-2xl font-bold mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {cards?.map((card, i) => (
          <div key={i} className="border rounded-lg overflow-hidden shadow">
            <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
