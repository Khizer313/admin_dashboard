import React from "react";
import "./nineTenBox.scss";
import { Bar, BarChart, Tooltip, ResponsiveContainer } from "recharts";
// -------------- TinyBarChart of BarChart from rechart.com --------------------------




type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const NineTenBox = (props: Props) => {
  return (
    <>
      <div className="barChartBox">
        <h1>{props.title}</h1>
        <div className="chart">
          <ResponsiveContainer width="99%" height={160}>
            <BarChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                labelStyle={{ display: "none" }}
                // to prevent hover effect we use cursor
                cursor={{ fill: "none" }}
              />

              <Bar dataKey={props.dataKey} fill={props.color} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default NineTenBox;
