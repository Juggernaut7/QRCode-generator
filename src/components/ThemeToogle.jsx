import { BsMoon, BsSun } from "react-icons/bs";
import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-xl p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
