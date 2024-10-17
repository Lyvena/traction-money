import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const UpcomingEvents = () => {
  const events = [
    { id: 1, title: "Board Meeting", date: "2023-04-20" },
    { id: 2, title: "Project C Kickoff", date: "2023-04-22" },
    { id: 3, title: "Investor Presentation", date: "2023-04-25" },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
        <Calendar className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {events.map((event) => (
            <li key={event.id} className="flex justify-between items-center">
              <span>{event.title}</span>
              <span className="text-sm text-muted-foreground">{event.date}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default UpcomingEvents;