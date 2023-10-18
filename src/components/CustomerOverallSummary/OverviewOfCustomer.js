import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Jan",
    value: 5500,
  },
  {
    name: "Feb",

    value: 3500,
  },
  {
    name: "Mar",
    value: 8000,
  },
  {
    name: "Apr",
    value: 6000,
  },
  {
    name: "May",
    value: 7000,
  },
  {
    name: "Jun",
    value: 6800,
  },
  {
    name: "Jul",
    value: 4300,
  },
  {
    name: "Aug",
    value: 8000,
  },
  {
    name: "Sep",
    value: 7000,
  },
  {
    name: "Oct",
    value: 5500,
  },
  {
    name: "Nov",
    value: 5000,
  },
  {
    name: "Dec",
    value: 6000,
  },
];
function OverviewOfCustomer() {
  return (
    <div class="h-100 shadow-sm p-3 mb-4 bg-body rounded">
      {/* <nav class="navbar"> */}
      <div class="container-fluid w-100 d-flex flex-row align-items-center justify-content-between">
        <div>
          <h5 class="navbar-brand">Overview</h5>
          <div>Monthly earning</div>
        </div>

        <div>Quaterly</div>
      </div>
      {/* </nav> */}
      <div>
        <ResponsiveContainer width="95%" height={250}>
          <BarChart data={data}>
            <Bar dataKey="value" fill="#8884d8">
              <XAxis dataKey="name" />
              <YAxis />
              {data.map((entry) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={entry.name === "Aug" ? "green" : "#8d54d5"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default OverviewOfCustomer;
