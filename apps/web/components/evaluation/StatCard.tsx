import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const StatCard = ({ title, value, subtext }: { title: string, value: string, subtext: string }) => (
  <Card>
    <CardHeader className="text-sm font-medium text-muted-foreground">{title}</CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{subtext}</p>
    </CardContent>
  </Card>
);