'use client';

export default function Offerings() {
  return (
    <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Offerings</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Greenflow provides end-to-end solutions for decentralized energy and asset-backed investment opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Turnkey BESS Parks</h3>
            <p className="text-gray-600">From planning to grid connection — fully installed battery parks from 5–10MWh.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Web3 Token Integration</h3>
            <p className="text-gray-600">Tokenize your energy production or investments for liquidity, governance, and growth.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Smart Yield Packages</h3>
            <p className="text-gray-600">Flexible energy-based yield products backed by on-chain metrics and performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

