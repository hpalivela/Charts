// import React from 'react'
// import { AreaChart,XAxis,YAxis,CartesianGrid,Tooltip,Area,Label } from 'recharts';
// const StreamedChart = () => {
//     const data = [
//         {
//           "name": "Jan",
//           "Issue Open": 40,
//           "Issue Started": 30,
//           "Issue Completed": 20,
//           'storyPoint':0
//         },
//         {
//           "name": "Feb",
//           "Issue Open": 41,
//           "Issue Started": 31,
//           "Issue Completed": 21,
//           'storyPoint':10
//         },
//         {
//           "name": "Mar",
//           "Issue Open": 42,
//           "Issue Started": 32,
//           "Issue Completed": 22,
//           'storyPoint':20
//         },
//         {
//           "name": "Apr",
//           "Issue Open": 43,
//           "Issue Started": 33,
//           "Issue Completed": 23,
//           'storyPoint':40
//         },
//         {
//           "name": "May",
//           "Issue Open": 44,
//           "Issue Started": 32,
//           "Issue Completed": 22,
//           'storyPoint':60
//         },
//         {
//           "name": "June",
//           "Issue Open": 51,
//           "Issue Started": 31,
//           "Issue Completed": 18,

//         },
//         {
//           "name": "July",
//           "Issue Open": 58,
//           "Issue Started": 29,
//           "Issue Completed":5,

//         }
//       ]
//   return (
//     <center>
//     <div>
//       <AreaChart width={730} height={250} data={data}
//   margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
//   <defs>
//     <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
//       <stop offset='5%' stopColor="#5D8AA8" />
//       <stop offset="95%" stopColor="#5D8AA8" />
//     </linearGradient>
//     <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
//       <stop offset='5%'  stopColor="#BCD4E6" />
//       <stop offset="95%" stopColor="#BCD4E6" />
//     </linearGradient>
//     <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
//       <stop offset='5%'  stopColor="#9BC4E2" />
//       <stop offset="95%" stopColor="#9BC4E2" />
//     </linearGradient>
//   </defs>
//   <XAxis dataKey="name">
//     <Label value="Hours in Avg" offset={0}  position="insideBottom" />
//   </XAxis>
//   <YAxis dataKey={'storyPoint'}  label= {{ value: 'Story Point (Days)', angle: -90, position: 'insideLeft'  }} />
//   <CartesianGrid strokeDasharray="3 3" />
//   <Tooltip />
//   <Area type="monotone" dataKey="Issue Open" stroke="#5D8AA8"  fill="url(#colorUv)" />
//   <Area type="monotone" dataKey="Issue Started" stroke="#BCD4E6"  fill="url(#colorPv)" />
//   <Area type="monotone" dataKey="Issue Completed" stroke="#9BC4E2"  fill="url(#colorPv)" />
// </AreaChart>
//     </div>
//     </center>
//   )
// }

// export default StreamedChart

import React from 'react'
import { AreaChart,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,Area} from 'recharts';
import './Streamed.css'
import './index.css';
  const data=[
    {
      month: "Jan",
      values: {
        issueOpen: [16, 18],
        issueStarted: [14, 16],
        issueCompleted: [12, 14],
      },
    },
    {
      month: "Jan",
      values: {
        issueOpen: [16.8, 19.5],
        issueStarted: [13.8, 16.8],
        issueCompleted: [10.2, 13.8],
      },
    },
    {
      month: "Feb",
      values: {
        issueOpen: [16.2, 22],
        issueStarted: [12.6, 16.2],
        issueCompleted: [10, 12.6],
      },
    },
    {
      month: "Mar",
      values: {
        issueOpen: [15.7, 24],
        issueStarted: [12.5, 15.7],
        issueCompleted: [9.5, 12.5],
      },
    },
    {
      month: "Apr",
      values: {
        issueOpen: [16.2, 26],
        issueStarted: [12.6, 16.2],
        issueCompleted: [9.5, 12.6],
      },
    },
    {
      month: "May",
      values: {
        issueOpen: [17.3, 27],
        issueStarted: [12.9, 17.3],
        issueCompleted: [9.4, 12.9],
      },
    },
    {
      month: "Jun",
      values: {
        issueOpen: [19.8, 29],
        issueStarted: [13.9, 19.8],
        issueCompleted: [9.38, 13.9],
      },
    },
    {
      month: "Jul",
      values: {
        issueOpen: [19.2, 32],
        issueStarted: [14.9, 19.2],
        issueCompleted: [8, 14.9],
      },
    },
    {
      month: "",
      values: {
        issueOpen: [23.5, 35],
        issueStarted: [17, 23.5],
        issueCompleted: [5.3, 17],
      },
    },
  ]
const CustmizedTool=({active,payload,label})=>{
    if (active && payload && payload.length) {
      const monthIndex = data.findIndex((item) => item.month === label);
      const issueCompletedValue = Math.floor(
        data[monthIndex].values.issueCompleted[0]
      );
      const issueStartedValue = Math.floor(
        data[monthIndex].values.issueStarted[0]
      );
      const issueOpenValue = Math.floor(
        data[monthIndex].values.issueOpen[0]
      );
  
      return (
        <div className="custom_tooltip">
          <p>{`${label} 01 - ${label} 31, 2023`}</p>
          <div className="issue_container">
            <p>Issue Opened</p>
            <p>{`${issueCompletedValue}d`}</p>
          </div>
          <div className="issue_container">
            <p>Issue Started</p>
            <p>{`${issueStartedValue}d`}</p>
          </div>
          <div className="issue_container">
            <p>Issue Completed</p>
            <p>{`${issueOpenValue}d`}</p>
          </div>
        </div>
      );
    }
  
    return null;
  };

  const StreamedChart = () => {
  return (
    <>
    <div className="sprints_container">
        <div className="sprints_header_text_container">
          <h6 className="sprints_text">Total Lead Time:35 days(Avg)</h6>

          <h6 className="sprints_text">Total Cycle Time:33 days(Avg)</h6>
        </div>
        <div className="area_chart_container">
          <ResponsiveContainer>
            <AreaChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid />
              <Tooltip content={<CustmizedTool/>} />
              <XAxis
                dataKey="month"
                label={{
                  value: "Hours in Avg",
                  angle: 360,
                  position: "bottom",
                }}
              />
              <YAxis
                ticks={[0, 10, 20, 30, 40, 50, 60]}
                label={{
                  value: "Stay Point(Days)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Area
                dataKey="values.issueOpen"
                stroke="var(--primary-color)"
                fill="var(--primary-color)"
              />
              <Area
                dataKey="values.issueStarted"
                stroke="var(--secondary-color)"
                fill="var(--secondary-color)"
              />
              <Area
                dataKey="values.issueCompleted"
                stroke="var(--third-color)"
                fill="var(--third-color)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="chart_text_container">
          <div className="chart_text_indicate_container">
            <div className="icon issue_open_container" />
            <p className="issue_text">Issue open</p>
          </div>
          <div className="chart_text_indicate_container">
            <div className="icon issue_started_container" />
            <p className="issue_text">Issue Started</p>
          </div>
          <div className="chart_text_indicate_container">
            <div className="icon issue_completed_container" />
            <p className="issue_text">Issue Completed</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default StreamedChart


