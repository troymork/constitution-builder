"use client";
import StepNav from "@/components/StepNav";
import Field from "@/components/Field";
import { useBuilderStore } from "@/lib/store";
export default function Page(){
  const rights = useBuilderStore(s=>s.rights);
  const set = useBuilderStore(s=>s.set);
  return (
    <main className="min-h-screen grid place-items-start bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 text-zinc-100 px-6 py-10">
      <section className="w-full max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold">Rights</h1>
        <p className="mt-2 text-zinc-300">Enumerate rights, protections, and guarantees.</p>
        <StepNav/>
        <Field label="Rights" value={rights} onChange={(v)=>set("rights",v)} placeholder="1) Freedom to... 2) Right to ..." rows={14}/>
      </section>
    </main>
  );
}
