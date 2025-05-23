'use client';

import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Technology from '../components/Technology';
import Investment from '../components/Investment';
import Offerings from '../components/Offerings';
import Team from '../components/Team';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Overview />
      <Technology />
      <Investment />
      <Offerings />
      <Team />
      <ContactForm />
    </main>
  );
}
