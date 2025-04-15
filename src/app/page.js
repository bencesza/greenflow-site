'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <header className="max-w-5xl mx-auto py-16 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Shaping Denmark&apos;s Energy Future</h1>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Advanced Battery Energy Storage Systems with sustainable returns.
        </motion.p>
      </header>
    </main>
  );
}
