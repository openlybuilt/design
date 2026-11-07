import type { Preferences } from './types';

const key = 'openly.design.preferences';
const defaults: Preferences = { page:'#000000', surface:'#111111', input:'#252525', text:'#f5f5f5', muted:'#b8b8b8', accent:'#c6c6c6', success:'#8ddab0', error:'#ffaaaa', warning:'#f2d078', active:'#a5c8ff', font:'Manrope', weight:300, heading:30, body:16, radius:0, spacing:20, speed:140, mainButton:'outlined', secondaryButton:'text', saved:[] };

export function loadPreferences(): Preferences {
  const raw = localStorage.getItem(key);
  if (!raw) return { ...defaults, saved: [] };
  const value: unknown = JSON.parse(raw);
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid preferences');
  const candidate = { ...defaults, ...value } as Preferences;
  const colors: (keyof Preferences)[] = ['page','surface','input','text','muted','accent','success','error','warning','active'];
  const numbers: (keyof Preferences)[] = ['weight','heading','body','radius','spacing','speed'];
  if (colors.some(k => typeof candidate[k] !== 'string' || !/^#[0-9a-fA-F]{6}$/.test(candidate[k] as string)) ||
      numbers.some(k => typeof candidate[k] !== 'number' || !Number.isFinite(candidate[k])) ||
      typeof candidate.font !== 'string' || !['outlined','solid','soft'].includes(candidate.mainButton) ||
      !['text','outlined','soft'].includes(candidate.secondaryButton) || !Array.isArray(candidate.saved) ||
      candidate.saved.some(v => typeof v !== 'string')) throw new Error('Invalid preferences');
  return candidate;
}

export function savePreferences(value: Preferences): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function defaultPreferences(): Preferences {
  return { ...defaults, saved: [] };
}
