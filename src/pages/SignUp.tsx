import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { LogIn, UserPlus } from "lucide-react";

const SignUp = () => {
  const { toast } = useToast();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Sign up successful",
      description: "Welcome to AI-PGF!"
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login successful",
      description: "Welcome back!"
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to AI-PGF</CardTitle>
          <CardDescription>Create an account or sign in to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signup" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
              <TabsTrigger value="login">Login</TabsTrigger>
            </TabsList>
            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <Input placeholder="Name" required />
                <Input type="email" placeholder="Email" required />
                <Input type="password" placeholder="Password" required />
                <Button type="submit" className="w-full">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Sign Up
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <Input type="email" placeholder="Email" required />
                <Input type="password" placeholder="Password" required />
                <Button type="submit" className="w-full">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;