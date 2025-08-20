"use client";
import StepNav from "@/components/StepNav";
import { toMarkdown, downloadMarkdown, useBuilderStore } from "@/lib/store";

export default function Page(){
  const s = useBuilderStore();
  const md = toMarkdown();
  return (
    <main className="min-h-screen grid place-items-start bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 text-zinc-100 px-6 py-10">
      <section className="w-full max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold">Review & Export</h1>
        <p className="mt-2 text-zinc-300">Preview the generated Markdown and export.</p>
        <StepNav/>
        <div className="my-4 flex gap-3">
          <button onClick={()=>downloadMarkdown()} className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400 transition">Download Markdown</button>
          <button onClick={()=>s.reset()} className="rounded-full border border-zinc-600 px-4 py-2 text-sm hover:bg-zinc-700 transition">Reset</button>
        </div>
        <pre className="whitespace-pre-wrap rounded-lg border border-zinc-700 bg-zinc-900/60 p-4 text-sm overflow-auto">{md}</pre>
      </section>
    </main>
  );
}
