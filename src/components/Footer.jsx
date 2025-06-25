import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full mt-12 border-t border-gray-200 dark:border-gray-700 py-6 px-4 text-center">
      <p className="text-sm text-gray-600 dark:text-gray-400">
     Built by <span className="font-medium text-indigo-600 dark:text-pink-400">Juggernaut</span> • © {new Date().getFullYear()} QR Code Generator
      </p>
      
      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-4 text-xl">
        <a
          href="https://github.com/Juggernaut7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-pink-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/abdulkabir-lawal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-pink-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/Kaybee77770"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-pink-400 transition"
        >
          <FaTwitter />
        </a>
      </div>

      <p className="text-xs mt-2 text-gray-500 dark:text-gray-500">
        Made with 💙 using React & Tailwind CSS
      </p>
    </footer>
  );
}

export default Footer;
