export default function StatCard({ title, value }) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 text-center flex-1">
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-gray-500">{title}</p>
    </div>
  );
}
