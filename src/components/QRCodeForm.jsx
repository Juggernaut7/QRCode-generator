import { useState } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const QRCodeForm = ({ onGenerate }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      toast.error("Please enter a valid text or URL");
      return;
    }

    onGenerate(input.trim());
    toast.success("QR Code Generated!");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="max-w-xl w-full mx-auto mt-10 flex gap-4 flex-col sm:flex-row px-4"
    >
      <input
        type="text"
        placeholder="Enter text or URL"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Generate
      </button>
    </motion.form>
  );
};

export default QRCodeForm;
