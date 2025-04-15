'use client';

export default function Investment() {
  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Investment Highlights</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Greenflow's BESS installations offer a reliable, high-yield opportunity to invest in the transition to clean energy infrastructure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">15–20% ROI</h3>
            <p className="text-gray-600">Estimated annual returns from energy resale, grid balancing, and mining operations.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Low Risk</h3>
            <p className="text-gray-600">Diversified income streams and long-term grid demand reduce exposure and volatility.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Green Certified</h3>
            <p className="text-gray-600">
              Eligible for sustainability-linked finance and green bond compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

