import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", events: 2 },
  { month: "Feb", events: 3 },
  { month: "Mar", events: 4 },
  { month: "Apr", events: 2 },
  { month: "May", events: 4 },
  { month: "Jun", events: 3 },
  { month: "Jul", events: 5 },
];

export default function ChartEvents() {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col w-full">
      <h3 className="font-semibold mb-3">Event by Month</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="events" fill="#5B5BD6" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
