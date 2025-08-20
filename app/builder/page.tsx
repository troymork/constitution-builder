"use client";
import StepNav from "@/components/StepNav";
import Field from "@/components/Field";
import { useBuilderStore } from "@/lib/store";

export default function Page(){
  const preamble = useBuilderStore(s=>s.preamble);
  const set = useBuilderStore(s=>s.set);
  return (
    <main className="min-h-screen grid place-items-start bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 text-zinc-100 px-6 py-10">
      <section className="w-full max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold">Preamble</h1>
        <p className="mt-2 text-zinc-300">State the purpose, values, and intent of this constitution.</p>
        <StepNav/>
        <Field label="Preamble" value={preamble} onChange={(v)=>set("preamble",v)} placeholder="We, the members of ..."/>
      </section>
    </main>
  );
}
