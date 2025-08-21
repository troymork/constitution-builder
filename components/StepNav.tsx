"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const steps = [
  {href:"/builder", label:"Preamble"},
  {href:"/builder/rights", label:"Rights"},
  {href:"/builder/governance", label:"Governance"},
  {href:"/builder/review", label:"Review & Export"},
];

export default function StepNav(){
  const path = usePathname();
  return (
    <nav className="flex flex-wrap gap-2 justify-center my-6">
      {steps.map((s,i)=>{
        const active = path === s.href || (i===0 && path.endsWith("/builder"));
        return (
          <Link key={s.href} href={s.href}
            className={"px-3 py-2 rounded-full border text-sm " + (active ? "bg-emerald-500 text-black border-emerald-400" : "border-zinc-600 hover:bg-zinc-700")}>
            {i+1}. {s.label}
          </Link>
        );
      })}
    </nav>
  );
}
