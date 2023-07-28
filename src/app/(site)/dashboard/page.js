"use client";

import SignOut from "@/components/SignOut";
import { useSession } from "next-auth/react";

const dashboard = () => {
  const { data: session } = useSession();
  return (
    <div className="mb-32">
      <h1 className="capitalize mb-5 font-playfair text-center text-4xl lg:text-6xl font-bold bg-hero_bg bg-cover bg-center bg-clip-text text-transparent">
        {" "}
        {session?.user?.name} Dashboard
      </h1>
      <div className="text-center">
        <SignOut />
      </div>
    </div>
  );
};

export default dashboard;
