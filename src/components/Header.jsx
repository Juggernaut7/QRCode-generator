import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full px-4 py-4 shadow-md flex items-center justify-between bg-white dark:bg-zinc-900 dark:text-white"
    >
      <h1 className="text-xl font-bold tracking-wide">
        QR Code Generator
      </h1>

      <button
        onClick={toggleTheme}
        className="text-2xl p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
        aria-label="Toggle Theme"
      >
        {theme === "light" ? <FiMoon /> : <FiSun />}
      </button>
    </motion.header>
  );
};

export default Header;
