const startups = [
  { name: "Tech Innovation", sector: "AI", status: "Pending" },
  { name: "Tech Innovation", sector: "AI", status: "Pending" },
  { name: "Tech Innovation", sector: "AI", status: "Approved" },
  { name: "Tech Innovation", sector: "AI", status: "Rejected" },
];

export default function StartupsTable() {
  const statusColor = (status) =>
    status === "Approved"
      ? "text-green-600"
      : status === "Pending"
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <div className="bg-white shadow-sm rounded-lg p-4 w-full">
      <h3 className="font-semibold mb-3">Startups</h3>
      <input
        placeholder="Search"
        className="border px-2 py-1 rounded mb-3 w-40 text-sm"
      />
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Name</th>
            <th className="text-left py-2">Sector</th>
            <th className="text-left py-2">Status</th>
            <th className="text-left py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {startups.map((s, i) => (
            <tr key={i} className="border-b">
              <td className="py-2">{s.name}</td>
              <td>{s.sector}</td>
              <td className={statusColor(s.status)}>{s.status}</td>
              <td>
                <button className="bg-green-500 text-white px-3 py-1 rounded mr-2 text-sm">
                  Approve
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded text-sm">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
