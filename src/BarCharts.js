import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,ResponsiveContainer
} from "recharts";

const data = [
  { name: 'S1', 'sp forecast': 0,'sp planned': 0, 'sp added': 100, 'sp completed': 70 },
  { name: 'S2', 'sp forecast': 0,'sp planned': 60, 'sp added': 100, 'sp completed': 60 },
  { name: 'S3','sp forecast': 0, 'sp planned': 90, 'sp added': 40, 'sp completed': 30 },
  { name: 'S4', 'sp forecast': 0,'sp planned': 130, 'sp added': 60, 'sp completed': 40 },
  { name: 'S5', 'sp forecast': 0,'sp planned': 23, 'sp added': 30, 'sp completed': 70 },
  {name: 'forecast 1','sp forecast': 160,'sp planned': 0, 'sp added': 0, 'sp completed': 0}
];



const CustomLegend = ({ payload }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {payload.map((entry, index) => (
        <div
          key={`legend-${index}`}
          style={{
            marginRight: '10px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: entry.color,
              borderRadius: '50%',
              marginRight: '5px',
            }}
          />
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div style={{ width: '50%', height: '400px', margin: 'auto', textAlign: 'center' }}>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            domain={[0, 200]}
            ticks={[0, 50, 100, 150, 200]}
            label={{ value: 'Storypoint (sp) ', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip />
          <Legend content={<CustomLegend />} />
          <Bar dataKey="sp forecast" stackId="a" fill="#F0F0F0" radius={[10, 10, 0, 0]} barSize={15} />
          <Bar dataKey="sp planned" stackId="a" fill="#D3D3D3" barSize={15} />
          <Bar dataKey="sp added" stackId="a" fill="#808080" radius={[10, 10, 0, 0]} barSize={15} />
          <Bar dataKey="sp completed" fill="#404040" radius={[10, 10, 0, 0]} barSize={15} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

