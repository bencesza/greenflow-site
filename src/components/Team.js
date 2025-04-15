'use client';

export default function Team() {
  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Visionaries, engineers, and innovators building the decentralized energy future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/120"
              alt="Bence Szabo"
              className="mx-auto w-28 h-28 rounded-full shadow-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Bence Szabo</h3>
            <p className="text-gray-600">Founder & Business Developer</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/120"
              alt="Tech Lead"
              className="mx-auto w-28 h-28 rounded-full shadow-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Tech Lead</h3>
            <p className="text-gray-600">Web3 & System Architecture</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/120"
              alt="Energy Expert"
              className="mx-auto w-28 h-28 rounded-full shadow-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Energy Expert</h3>
            <p className="text-gray-600">Battery Systems & Grid Ops</p>
          </div>
        </div>
      </div>
    </section>
  );
}

