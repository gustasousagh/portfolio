import { BarChart3, GanttChartSquareIcon } from "lucide-react"
import { Button } from "./ui/button"

export const MetricsButton = () => {
  return (
    <>
    <Button
  asChild
    variant={"outline"}
    size={"icon"}
    >
      <BarChart3 className="p-2"/>
    </Button>
    </>
  )
}