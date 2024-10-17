import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RecentActivity = () => {
  const activities = [
    { id: 1, description: "Project A funded", date: "2023-04-15" },
    { id: 2, description: "New milestone reached for Project B", date: "2023-04-14" },
    { id: 3, description: "Quarterly report submitted", date: "2023-04-13" },
  ];

  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li key={activity.id} className="flex justify-between items-center">
              <span>{activity.description}</span>
              <span className="text-sm text-muted-foreground">{activity.date}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;