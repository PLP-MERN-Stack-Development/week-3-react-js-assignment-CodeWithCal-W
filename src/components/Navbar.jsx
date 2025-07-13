
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/posts">Posts</Link></li>
      </ul>
      <button onClick={toggleTheme} className="bg-white text-blue-600 px-2 py-1 rounded">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}