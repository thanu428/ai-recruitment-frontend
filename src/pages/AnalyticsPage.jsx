import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell
} from "recharts";

function AnalyticsPage() {

  const barData = [

    {
      name: "Resume Match",
      score: 75
    },

    {
      name: "MCQ Score",
      score: 8
    },

    {
      name: "AI Ranking",
      score: 90
    }
  ];

  const pieData = [

    {
      name: "Selected Skills",
      value: 75
    },

    {
      name: "Missing Skills",
      value: 25
    }
  ];

  const COLORS = [
    "#0088FE",
    "#FF8042"
  ];

  return (

    <div
      style={{
        minHeight:"100vh",
        background:
          "linear-gradient(to right, #141e30, #243b55)",
        padding:"40px",
        color:"white"
      }}
    >

      <h1
        style={{
          textAlign:"center",
          marginBottom:"40px"
        }}
      >
        Recruitment Analytics Dashboard
      </h1>

      <div
        style={{
          display:"flex",
          justifyContent:"center",
          gap:"40px",
          flexWrap:"wrap"
        }}
      >

        <div
          style={{
            background:"white",
            padding:"20px",
            borderRadius:"20px"
          }}
        >

          <h2
            style={{
              color:"black",
              textAlign:"center"
            }}
          >
            Performance Analytics
          </h2>

          <BarChart
            width={500}
            height={300}
            data={barData}
          >

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="score" fill="#8884d8" />

          </BarChart>

        </div>

        <div
          style={{
            background:"white",
            padding:"20px",
            borderRadius:"20px"
          }}
        >

          <h2
            style={{
              color:"black",
              textAlign:"center"
            }}
          >
            Skill Match Ratio
          </h2>

          <PieChart width={400} height={300}>

            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label
            >

              {pieData.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </div>

      </div>

    </div>
  );
}

export default AnalyticsPage;