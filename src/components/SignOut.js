"use client";

import { signOut } from "next-auth/react";
import toast from "react-hot-toast";

export default function SignOut() {
  const logOut = () => {
    signOut({ callbackUrl: `${window.location.origin}` });
    toast.success("Logged out successfully!");
  };
  return (
    <button
      className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
      onClick={logOut}
    >
      Log Out
    </button>
  );
}
