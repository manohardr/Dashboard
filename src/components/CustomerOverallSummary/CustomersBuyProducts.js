import { Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Group A",
    value: 3000,
  },
  {
    name: "Group B",
    value: 4567,
  },

  {
    name: "Group D",
    value: 5000,
  },
];
function CustomersBuyProducts() {
  return (
    <div className="h-100 shadow-sm bg-body rounded d-flex align-items-center justify-content-center">
      <ResponsiveContainer width="95%" height={250}>
        <PieChart>
          {
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={80}
              fill="#900C3F"
              label
            />
          }
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export default CustomersBuyProducts;
