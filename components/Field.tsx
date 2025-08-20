"use client";
type Props={ label:string; value:string; onChange:(v:string)=>void; placeholder?:string; rows?:number; };
export default function Field({label,value,onChange,placeholder,rows=10}:Props){
  return (
    <label className="block text-left">
      <div className="mb-2 text-zinc-300">{label}</div>
      <textarea value={value} onChange={e=>onChange(e.target.value)} rows={rows}
        className="w-full rounded-lg border border-zinc-700 bg-zinc-900/60 p-3 outline-none focus:border-emerald-500"
        placeholder={placeholder}/>
    </label>
  );
}
