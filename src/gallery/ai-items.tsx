import { DitheredObject } from '../vendor/canvas/DitheredObject/DitheredObject';
import { ThinkingOrb, type OrbState } from 'thinking-orbs';
import { VoiceRing } from 'voice-ring';
import { BotAvatar, type BotAvatarType } from 'bot-avatars';
import { ImageGeneration, type ImageGenerationPreset } from 'img-fx';
import { BorderBeam } from 'border-beam';
import { ThinkingState, ThinkingReasoning, Orb, TextResponse, StreamingText, CodeBlock, TodoList, DataTable, PromptInput, ApprovalCard, type OrbVariant } from '@aicss/react';
import type { GalleryItem } from './items';
const states:OrbState[]=['working','searching','solving','listening','connecting','weaving','composing','breathing','shaping'];
const shapes:BotAvatarType[]=['clover','flower','triangle','square','blob','ghost','circle','drop','star','droid','mech','alien','hexagon','cat','cloud','pill','pebble','puddle'];
const variants:OrbVariant[]=['S1','S2','S3','S4','S5','B1','B2','B3','B4','B5','C1','C2','C3','C4','C5','G1','G2','G3','G4','G5','M1','M2','M3','M4','M5'];
const presets:ImageGenerationPreset[]=['pixels-organic','pixels-mechanic','sweep-gradient'];
const isReduced=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const aiItems:GalleryItem[]=[
 ...(['bayer','halftone','floyd'] as const).map(method=>({id:`canvas-dither-${method}`,name:`Dithered object: ${method}`,category:'Effects' as const,source:'Canvas UI',render:()=> <div role="img" aria-label={`Dithered dog: ${method}`} className="effect-center"><DitheredObject dracoDecoderPath={`${import.meta.env.BASE_URL}assets/draco/`} src={`${import.meta.env.BASE_URL}assets/models/dog.glb`} method={method} gridSize={3} cameraDistance={3.3} orbit autoRotate autoRotateSpeed={1} style={{width:220,height:160}}/></div>})),
 ...states.map(state=>({id:`libraries-orb-${state}`,name:`Thinking orb: ${state}`,category:'AI' as const,source:'Libraries.dev',render:(prefs:import('../types').Preferences)=><ThinkingOrb state={state} theme="dark" color={prefs.accent} paused={isReduced()} size={64} aria-label={`Thinking orb: ${state}`}/>})),
 ...variants.map(variant=>({id:`aicss-orb-${variant}`,name:`Thinking orb ${variant}`,category:'AI' as const,source:'AICSS',render:()=> <Orb variant={variant} size={56} label={`Thinking orb ${variant}`}/>})),
 ...shapes.map(shape=>({id:`libraries-avatar-${shape}`,name:`Bot avatar: ${shape}`,category:'Avatars' as const,source:'Libraries.dev',render:(prefs:import('../types').Preferences)=><BotAvatar type={shape} size={80} color={prefs.accent} aria-label={`Bot avatar: ${shape}`}/>})),
 ...(['idle','listening','speaking','processing'] as const).map(state=>({id:`libraries-voice-${state}`,name:`Voice ring: ${state}`,category:'Voice' as const,source:'Libraries.dev',render:()=> <VoiceRing state={state} theme="dark" size={100} level={state==='speaking'?.45:0} paused={isReduced()}/> })),
 ...presets.map(preset=>({id:`libraries-image-${preset}`,name:`Image loader: ${preset}`,category:'Effects' as const,source:'Libraries.dev',render:()=> <ImageGeneration className="effect-center" preset={preset} theme="dark" images={[`${import.meta.env.BASE_URL}assets/preview-landscape.svg`]} autoReveal={!isReduced()} paused={isReduced()}><div style={{width:200,height:140,borderRadius:6}}/></ImageGeneration>})),
 {id:'libraries-border-beam',name:'Border beam',category:'Effects',source:'Libraries.dev',render:()=> <BorderBeam><div className="beam-demo">Continue</div></BorderBeam>},
 {id:'aicss-thinking',name:'Thinking label',category:'AI',source:'AICSS',render:()=> <ThinkingState/>},
 {id:'aicss-reasoning',name:'Thinking and reasoning',category:'AI',source:'AICSS',render:()=> <ThinkingReasoning/>},
 {id:'aicss-response',name:'Text response',category:'Chat',source:'AICSS',render:()=> <TextResponse>Your workflow is ready to review.</TextResponse>},
 {id:'aicss-streaming',name:'Streaming text',category:'Chat',source:'AICSS',render:()=> <StreamingText text="I'm organizing the next steps for your workflow."/>},
 {id:'aicss-code',name:'Code block',category:'Chat',source:'AICSS',render:()=> <CodeBlock lang="json" code={'{ "status": "ready" }'}/>},
 {id:'aicss-task-list',name:'Task list',category:'AI',source:'AICSS',render:()=> <TodoList/>},
 {id:'aicss-data-table',name:'Data table',category:'Tables',source:'AICSS',render:()=> <DataTable/>},
 {id:'aicss-prompt',name:'Prompt input',category:'Chat',source:'AICSS',render:()=> <PromptInput/>},
 {id:'aicss-approval-questions',name:'Approval questions',category:'AI',source:'AICSS',render:()=> <ApprovalCard variant="questions"/>},
 {id:'aicss-approval-command',name:'Command approval',category:'AI',source:'AICSS',render:()=> <ApprovalCard variant="command"/>},
 {id:'aicss-approval-plan',name:'Plan approval',category:'AI',source:'AICSS',render:()=> <ApprovalCard variant="plan"/>},
];
