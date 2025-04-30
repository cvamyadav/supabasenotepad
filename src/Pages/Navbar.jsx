
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="text-supa-green font-bold text-xl">
            Supabase Notes App
          </div>
          <Menubar />
        </div>
      </div>
    </nav>
  );
};

const menuItems = [
  { title: "Home", route: "/" },
  { title: "Login", route: "/login" },
  { title: "Note", route: "/note" },
];

function Menubar() {
  return (
    <div className="flex space-x-8">
      {menuItems.map((item, index) => (
        <TopbarElement key={index} route={item.route} title={item.title} />
      ))}
    </div>
  );
}

function TopbarElement({ title, route }) {
  return (
    <Link
      to={route}
      className="text-gray-600 hover:text-supa-green px-3 py-2 rounded-md text-sm font-medium transition-colors"
    >
      {title}
    </Link>
  );
}