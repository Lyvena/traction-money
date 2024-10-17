import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ProjectProgress = () => {
  const projects = [
    { id: 1, name: "Project A", progress: 75 },
    { id: 2, name: "Project B", progress: 50 },
    { id: 3, name: "Project C", progress: 25 },
  ];

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Project Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id}>
              <div className="flex justify-between mb-1">
                <span>{project.name}</span>
                <span>{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="w-full" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectProgress;