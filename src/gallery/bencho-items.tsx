import type { CSSProperties, ReactNode } from 'react';
import type { Preferences, Category } from '../types';
import type { GalleryItem } from './items';
import { ToastStack } from '../vendor/bencho/toast-stack';
import { ContextMeter } from '../vendor/bencho/context-meter';
import { WakeSlider } from '../vendor/bencho/wake-slider';
import { StackedBars } from '../vendor/bencho/stacked-bars';
import { Scrub } from '../vendor/bencho/time-scrubber';
import { Like } from '../vendor/bencho/like';
import { LabelInput } from '../vendor/bencho/label-input';
import { Otp } from '../vendor/bencho/one-time-code';
import { Aspect } from '../vendor/bencho/aspect';
import { Tilt } from '../vendor/bencho/tilt';
import { Particles } from '../vendor/bencho/particles';
import { HeatWord } from '../vendor/bencho/heat-word';
import { Generate } from '../vendor/bencho/generate';
import '../vendor/bencho/toast-stack.css';
import '../vendor/bencho/context-meter.css';
import '../vendor/bencho/wake-slider.css';
import '../vendor/bencho/stacked-bars.css';
import '../vendor/bencho/time-scrubber.css';
import '../vendor/bencho/like.css';
import '../vendor/bencho/label-input.css';
import '../vendor/bencho/one-time-code.css';
import '../vendor/bencho/aspect.css';
import '../vendor/bencho/tilt.css';
import '../vendor/bencho/particles.css';
import '../vendor/bencho/heat-word.css';
import '../vendor/bencho/generate.css';

function PreviewTheme({ prefs, children }: { prefs: Preferences; children: ReactNode }) {
  const rgb = (hex: string) => (hex.match(/[a-f\d]{2}/gi) ?? ['ff','ff','ff']).map(value => parseInt(value,16)).join(', ');
  const style = {
    '--font-ui': prefs.font === 'Manrope' ? '"Manrope Variable", sans-serif' : `${prefs.font}, sans-serif`, '--ink': prefs.text, '--ink-rgb': rgb(prefs.text),
    '--ink-2': prefs.muted, '--ink-3': prefs.muted, '--ink-4': prefs.muted, '--ink-5': prefs.muted,
    '--card': prefs.surface, '--pane': prefs.surface, '--pane-edge': prefs.input,
    '--fill-on': prefs.text, '--fill-on-rgb': rgb(prefs.text), '--fill-slab': prefs.input,
    '--surface-2': prefs.surface, '--surface-3': prefs.input, '--slab': prefs.input,
    '--signal': prefs.accent, '--on-ink': prefs.page, '--on-slab': prefs.text, '--bg': prefs.page,
  } as CSSProperties;
  return <div className="bencho-demo" style={style}>{children}</div>;
}
const examples: { id: string; name: string; category: Category; render: () => ReactNode }[] = [
  {id:'toast-stack',name:'Toast stack',category:'Controls',render:()=> <ToastStack/>},
  {id:'context-meter',name:'Context meter',category:'AI',render:()=> <ContextMeter/>},
  {id:'wake-slider',name:'Wake slider',category:'Controls',render:()=> <WakeSlider/>},
  {id:'stacked-bars',name:'Stacked bars',category:'Charts',render:()=> <StackedBars/>},
  {id:'time-scrubber',name:'Time scrubber',category:'Controls',render:()=> <Scrub/>},
  {id:'like',name:'Like button',category:'Buttons',render:()=> <Like/>},
  {id:'label-input',name:'Floating label input',category:'Inputs',render:()=> <LabelInput/>},
  {id:'one-time-code',name:'One-time code',category:'Inputs',render:()=> <Otp/>},
  {id:'aspect',name:'Aspect ratio selector',category:'Controls',render:()=> <Aspect/>},
  {id:'tilt',name:'Tilt card',category:'Cards',render:()=> <Tilt/>},
  {id:'particles',name:'Particles',category:'Effects',render:()=> <Particles/>},
  {id:'heat-word',name:'Heat map',category:'Effects',render:()=> <HeatWord/>},
  {id:'generate',name:'Generate',category:'Buttons',render:()=> <Generate/>},
];
export const benchoItems: GalleryItem[] = examples.map(({id,name,category,render}) => ({
  id:`bencho-${id}`, name, category, source:'Bencho', sourceUrl:`https://bencho.dev/blocks/${id}`,
  render: prefs => <PreviewTheme prefs={prefs}>{render()}</PreviewTheme>,
}));
