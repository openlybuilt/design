import {useState} from 'react';
import {AsciiObject} from '../vendor/canvas/AsciiObject/AsciiObject';
import {ParticleObject} from '../vendor/canvas/ParticleObject/ParticleObject';
import {InkObject} from '../vendor/canvas/InkObject/InkObject';
import {GlassObject} from '../vendor/canvas/GlassObject/GlassObject';
import {LiquidObject} from '../vendor/canvas/LiquidObject/LiquidObject';
import {AsciiSweep} from '../vendor/canvas/AsciiSweep/AsciiSweep';
import type {GalleryItem} from './items';
import type {Preferences} from '../types';
const objects=[['ascii-object','ASCII object',AsciiObject],['particle-object','Particle object',ParticleObject],['ink-object','Ink object',InkObject],['glass-object','Glass object',GlassObject],['liquid-object','Liquid object',LiquidObject]] as const;
function InkDog({prefs}:{prefs:Preferences}){const [error,setError]=useState(false);return <div><InkObject dracoDecoderPath="/assets/draco/" src="/assets/models/dog.glb" className="canvas-effect-demo" inkColor={prefs.text} onError={()=>setError(true)}/>{error&&<p role="status">Could not load the 3D model.</p>}</div>}
function Sweep(){const [index,setIndex]=useState(0);return <><AsciiSweep className="canvas-effect-demo" index={index} alternate={<div className="canvas-effect-content">Second view</div>}><div className="canvas-effect-content">First view</div></AsciiSweep><button className="save" onClick={()=>setIndex(v=>v===0?1:0)}>Switch</button></>}
export const canvasObjectItems:GalleryItem[]=[...objects.map(([id,name,Object])=>({id:`canvas-${id}`,name,category:'Effects' as const,source:'Canvas UI',sourceUrl:`https://canvasui.dev/docs/components/${id}`,render:(prefs:Preferences)=> id==='ink-object'?<InkDog prefs={prefs}/>:<Object dracoDecoderPath="/assets/draco/" src="/assets/models/dog.glb" className="canvas-effect-demo"/>})),{id:'canvas-ascii-sweep',name:'ASCII sweep',category:'Effects',source:'Canvas UI',sourceUrl:'https://canvasui.dev/docs/components/ascii-sweep',render:()=> <Sweep/>}];
