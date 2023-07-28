"use client";

import { signOut } from "next-auth/react";
import toast from "react-hot-toast";

export default function SignOut() {
  const logOut = () => {
    signOut({ callbackUrl: `${window.location.origin}` });
    toast.success("Logged out successfully!");
  };
  return (
    <button className="mx-5 inline-block " onClick={logOut}>
      Log Out
    </button>
  );
}
