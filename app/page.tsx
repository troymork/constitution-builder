export const metadata = {
  title: 'Constitution Builder – Coming Soon',
  description: 'Public infrastructure for designing living, evolvable constitutions.',
};

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 text-zinc-100 px-6">
      <section className="w-full max-w-2xl text-center">
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">Constitution Builder</h1>
        <p className="mt-4 text-lg text-zinc-300">
          Public infrastructure for designing <em>living</em> constitutions… coming soon.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com/troymork/constitution-builder"
            target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-black shadow hover:bg-emerald-400 transition"
          >
            View on GitHub
          </a>
          <a
            href="mailto:hello@example.com?subject=Notify%20me%20about%20Constitution%20Builder"
            className="rounded-full border border-zinc-600 px-6 py-3 text-sm font-medium text-zinc-200 hover:bg-zinc-700 transition"
          >
            Notify Me
          </a>
        </div>
        <p className="mt-10 text-sm text-zinc-500">© {new Date().getFullYear()} Constitution Builder</p>
      </section>
    </main>
  );
}
