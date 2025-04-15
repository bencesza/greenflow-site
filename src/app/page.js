'use client';

import Hero from '../components/Hero';
import Overview from '../components/Overview';

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <Overview />
    </main>
  );
}

