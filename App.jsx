import { motion } from 'framer-motion';

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-blue-50 to-white flex items-center justify-center px-4">
      <motion.div
        className="bg-white p-10 rounded-2xl shadow-lg text-center w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src="/src/assets/logo.png" alt="IESCO Logo" className="w-24 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-blue-700 mb-2">IESCO AUDIT PORTAL</h1>
        <p className="text-gray-600 text-sm">This is a front-end React demo interface.</p>
      </motion.div>
    </main>
  );
}
