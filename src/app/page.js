'use client';
import Team from '../components/Team';
import Offerings from '../components/Offerings';
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
      <Offerings />

    </main>
  );
}
