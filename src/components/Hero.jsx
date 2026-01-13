export default function Hero() {
    return (
        <section className="w-screen h-screen flex flex-col items-center gap-8 px-8 py-12 bg-gray-50">
            <h2 className="text-4xl font-serif mb-6">Your Spiritual Gateway</h2>
            <div className="bg-yellow-50 h-full mb-4 flex w-1/2 gap-8">

                <div className="bg-red-500 p-4 rounded shadow">
                    <h3 className="text-red-500 font-semibold mb-2">Puja Services</h3>

                    <input
                        className="w-full border p-2 rounded mb-4"
                        placeholder="What are you looking for?"
                    />

                    <div className="grid grid-cols-3 gap-2 text-xs">
                        {["Birthday Puja", "Shradh Puja", "Navgraha Puja"].map(p => (
                            <div key={p} className="border p-2 rounded text-center">
                                {p}
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between mt-4 text-sm">
                        <span>⭐ 4.8 Service Rating</span>
                        <span>👥 10K+ Happy Devotees</span>
                    </div>
                </div>
                <div className="w-1/2">
                    <img
                        src="https://as1.ftcdn.net/v2/jpg/14/22/23/64/1000_F_1422236444_HAxkBZAJQauLk618MO0YQAnJUknQSe04.jpg"
                        className="rounded-xl object-cover"
                        alt="Temple"
                    />
                </div>
            </div>
        </section>
    );
}
