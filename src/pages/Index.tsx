import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Calendar, ChartLine, Settings, User } from "lucide-react";
import Header from '@/components/Header';
import DashboardMetrics from '@/components/DashboardMetrics';
import RecentActivity from '@/components/RecentActivity';
import UpcomingEvents from '@/components/UpcomingEvents';
import ProjectProgress from '@/components/ProjectProgress';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">AI-PGF Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardMetrics />
          <RecentActivity />
          <UpcomingEvents />
          <ProjectProgress />
        </div>
      </main>
    </div>
  );
};

export default Index;