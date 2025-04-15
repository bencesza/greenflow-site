'use client';

export default function Overview() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Greenflow BESS Project Overview</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>5–10 MWh park capacity per site</li>
            <li>Supports renewable energy integration</li>
            <li>Decentralized smart grid-ready storage</li>
            <li>Crypto mining integration as a dual-use case</li>
            <li>Flexible scalability across industrial sites</li>
            <li>Battery and inverter tech optimized for EU grid</li>
          </ul>
        </div>
        <div>
          <img
            src="https://heyboss.heeyo.ai/1744382638-a75fbe0f-142257164.fs1.hubspotusercontent-eu1.net-hubfs-142257164-BESS-Demand-Response-Whats-the-Connection-1920-1080px.jpg"
            alt="BESS Park Overview"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

