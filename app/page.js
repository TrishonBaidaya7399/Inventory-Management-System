"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen flex-col mb-4">
      <h1 className="text-3xl font-bold text-blue-900 ">
        Inventory Management Software
      </h1>
      <li
        className="list-disc cursor-pointer"
        onClick={()=>router.push("/inventory-dashboard/home/overview")}
      >
        View Overview
      </li>
    </div>
  );
}
