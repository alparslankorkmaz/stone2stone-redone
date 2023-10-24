"use client";

import SignOut from "@/components/SignOut";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const dashboard = () => {
  const { data: session } = useSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <div className="mb-5">
        <h1 className="capitalize mb-5 font-playfair text-center text-4xl lg:text-6xl font-bold bg-hero_bg bg-cover bg-center bg-clip-text text-transparent">
          {" "}
          {session?.user?.name} Dashboard
        </h1>
        <div className="text-center mt-16">
          <SignOut />
        </div>
      </div>

      <div className="p-10 lg:p-20 grid grid-cols-2 gap-10">
        <div className="bg-tab-dark-gray rounded-xl col-span-2 lg:col-span-1 p-10">
          <h2 className="font-montserrat text-2xl">Invoices</h2>
        </div>
        <div className="bg-tab-dark-gray rounded-xl col-span-2 lg:col-span-1 p-10">
          <h2 className="font-montserrat text-2xl">Current Project</h2>
        </div>
      </div>
    </>
  );
};

export default dashboard;
