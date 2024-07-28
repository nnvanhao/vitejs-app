import { Outlet } from "react-router-dom";

import { Alert, AlertDescription, AlertTitle } from "@components/ui/alert";
import { Button } from "@components/ui/button";
import { ChartConfig, ChartContainer } from "@components/ui/chart";
import { Terminal } from "lucide-react";
import { Bar, BarChart } from "recharts";

export default function Root() {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
    <div>
      <span>
        Collaboration with different teams to improve the process & to bring
        integrity as a whole -
      </span>
    </div>
  );
}
