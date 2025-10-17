import Sidebar from "./Sidebar";
import StatCard from "./StatCard";
import ChartSector from "./ChartSector";
import ChartEvents from "./ChartEvents";
import StartupsTable from "./StartupsTable";

export default function Dashboard() {
  return (
    <div className="flex pt-8">
      <Sidebar />

      <div className="flex-1 p-6 bg-[#f7f7fb] min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        
        <div className="grid grid-cols-4 gap-4 mb-6">
          <StatCard title="Total Startups" value="58" />
          <StatCard title="Total Events" value="25" />
          <StatCard title="Total Users" value="904" />
          <StatCard title="Forum Posts" value="180" />
        </div>

        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <ChartSector />
          <ChartEvents />
        </div>

        
        <StartupsTable />
      </div>
    </div>
  );
}
