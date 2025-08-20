import { create } from "zustand";

export type BuilderState = {
  preamble: string;
  rights: string;
  governance: string;
  set(field: keyof Omit<BuilderState,"set"|"reset">, value: string): void;
  reset(): void;
  _loaded: boolean;
};

const KEY="cbuilder:v1";

export const useBuilderStore = create<BuilderState>((set,get)=>({
  preamble:"", rights:"", governance:"", _loaded:false,
  set:(field,value)=>{ set({[field]: value} as any); try{ const s=get(); const data={preamble:s.preamble,rights:s.rights,governance:s.governance}; localStorage.setItem(KEY, JSON.stringify(data)); }catch{} },
  reset:()=>{ set({preamble:"",rights:"",governance:""}); try{ localStorage.removeItem(KEY);}catch{} },
}));

export function useHydrateFromStorage(){
  const st = useBuilderStore.getState();
  if(typeof window==="undefined" || st._loaded) return;
  try{ const raw=localStorage.getItem(KEY); if(raw){ const d=JSON.parse(raw); useBuilderStore.getState().set("preamble", d.preamble||""); useBuilderStore.getState().set("rights", d.rights||""); useBuilderStore.getState().set("governance", d.governance||""); } }catch{}
  (useBuilderStore.getState() as any)._loaded = true;
}

export function toMarkdown(){
  const { preamble, rights, governance } = useBuilderStore.getState();
  const md = [
    "# Constitution",
    "",
    "## Preamble",
    preamble||"_TBD_",
    "",
    "## Rights",
    rights||"_TBD_",
    "",
    "## Governance",
    governance||"_TBD_",
    ""
  ].join("\n");
  return md;
}

export function downloadMarkdown(filename="constitution.md"){
  const md = toMarkdown();
  const blob = new Blob([md],{type:"text/markdown"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 0);
}
