import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "AI", value: 12 },
  { name: "Fintech", value: 3 },
  { name: "Tech", value: 5 },
  { name: "E-commerce", value: 8 },
];

const COLORS = ["#5B5BD6", "#FFC658", "#FF8042", "#8884D8"];

export default function ChartSector() {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col items-center w-full">
      <h3 className="font-semibold mb-3">Startups by Sector</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={70} label>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
