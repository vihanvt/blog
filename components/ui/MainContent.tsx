// app/components/MainContent.tsx

"use client"; // Ensure this component is client-side rendered

import { Button } from "@/components/ui/button";

const MainContent = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h2 className="text-4xl font-bold mb-4">Welcome to the Blog!</h2>
      <p className="text-lg mb-8">
        This is a simple blog page where you can toggle dark mode.
      </p>
      <Button className="bg-primary text-primary-foreground hover:bg-muted">
        Read More
      </Button>
    </div>
  );
};

export default MainContent;
