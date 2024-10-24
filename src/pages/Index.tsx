import React from 'react';
import { Card } from "@/components/ui/card";
import { Activity, Calendar, ChartLine, Settings, User } from "lucide-react";
import Navigation from '@/components/Navigation';
import DashboardMetrics from '@/components/DashboardMetrics';
import RecentActivity from '@/components/RecentActivity';
import UpcomingEvents from '@/components/UpcomingEvents';
import ProjectProgress from '@/components/ProjectProgress';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">AI-PGF Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardMetrics />
          <RecentActivity />
          <UpcomingEvents />
          <ProjectProgress />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;