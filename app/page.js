import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-20 bg-slate-400 p-4 flex items-center gap-4 justify-center">
        <Link className="font-bold text-white" href="/home">
          Home
        </Link>
        <Link className="font-bold text-white" href="/account">
          My Account
        </Link>
        <Link className="font-bold text-white" href="/settings">
          Settings
        </Link>
      </div>
    </div>
  );
}
