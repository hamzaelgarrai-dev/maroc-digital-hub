import { Home, Rocket, Calendar, MessageSquare, Users } from "lucide-react";

export default function Sidebar() {
  const items = [
    { icon: <Home size={18} />, label: "Dashboard" },
    { icon: <Rocket size={18} />, label: "Manage Startup" },
    { icon: <Calendar size={18} />, label: "Manage Events" },
    { icon: <MessageSquare size={18} />, label: "Manage Forum" },
    { icon: <Users size={18} />, label: "Manage Users" },
  ];

  return (
    <aside className="w-60 bg-[#f7f7fb] min-h-screen p-5 flex flex-col gap-3">
      {items.map((item, i) => (
        <button
          key={i}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-indigo-100 text-gray-700"
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </aside>
  );
}
