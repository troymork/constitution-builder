"use client";
import StepNav from "@/components/StepNav";
import Field from "@/components/Field";
import { useBuilderStore } from "@/lib/store";
export default function Page(){
  const governance = useBuilderStore(s=>s.governance);
  const set = useBuilderStore(s=>s.set);
  return (
    <main className="min-h-screen grid place-items-start bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 text-zinc-100 px-6 py-10">
      <section className="w-full max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold">Governance</h1>
        <p className="mt-2 text-zinc-300">Define roles, processes, proposals, and amendments.</p>
        <StepNav/>
        <Field label="Governance" value={governance} onChange={(v)=>set("governance",v)} placeholder="Council structure, voting, quorum, amendment process..." rows={14}/>
      </section>
    </main>
  );
}
