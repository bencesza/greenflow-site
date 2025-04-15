'use client';

export default function Technology() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Greenflow leverages cutting-edge battery systems and inverters, integrating smart grid protocols and real-time energy analytics.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Lithium-Iron Phosphate Batteries</h3>
            <p className="text-gray-600">Safe, long-life, high-efficiency batteries with strong thermal stability.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Bi-directional Inverters</h3>
            <p className="text-gray-600">Allow dynamic energy flow between grid, batteries, and local usage zones.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Smart Monitoring & BMS</h3>
            <p className="text-gray-600">Real-time control, diagnostics, and performance optimization using AI-driven systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

