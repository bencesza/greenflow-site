'use client';

import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Technology from '../components/Technology';
import Investment from '../components/Investment';

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <Overview />
      <Technology />
      <Investment />
    </main>
  );
}
