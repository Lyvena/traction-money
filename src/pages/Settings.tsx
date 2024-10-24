import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon, Key } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Settings = () => {
  const [apiKey, setApiKey] = useState('');
  const { toast } = useToast();

  const handleSaveApiKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey) {
      localStorage.setItem('openai_api_key', apiKey);
      toast({
        title: "API Key Saved",
        description: "Your OpenAI API key has been saved successfully.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <SettingsIcon className="h-6 w-6" />
              AI Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSaveApiKey} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="apiKey" className="text-sm font-medium">
                  OpenAI API Key
                </label>
                <div className="relative">
                  <Input
                    id="apiKey"
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter your OpenAI API key"
                    className="pl-10"
                  />
                  <Key className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500">
                  Your API key is stored locally and never sent to our servers.
                </p>
              </div>
              <Button type="submit" className="w-full">
                Save API Key
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;