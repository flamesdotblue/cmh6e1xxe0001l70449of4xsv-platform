import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(10%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 sm:pb-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-3xl"
        >
          Define your street uniform
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-lg sm:text-xl text-neutral-200 max-w-2xl"
        >
          Minimal lines. Luxe texture. Engineered comfort. Drop 07 available now.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-semibold hover:opacity-90"
          >
            Shop Men
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-neutral-700 bg-neutral-900 text-white px-5 py-3 text-sm font-semibold hover:border-neutral-600"
          >
            Shop Women
          </a>
        </motion.div>
      </div>
    </section>
  );
}
