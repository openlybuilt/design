// @ts-nocheck
// Original free Transitions.dev components and recipes, adapted for this local preview.
import {useEffect, useState} from 'react';
import { CardResize } from '../vendor/transitions/card-resize';
import { NumberPopIn } from '../vendor/transitions/number-pop-in';
import { NotificationBadge } from '../vendor/transitions/notification-badge';
import { TextStatesSwap } from '../vendor/transitions/text-states-swap';
import { MenuDropdown } from '../vendor/transitions/menu-dropdown';
import { Modal } from '../vendor/transitions/modal';
import { PanelReveal } from '../vendor/transitions/panel-reveal';
import { PageSlide } from '../vendor/transitions/page-side-by-side';
import { IconSwap } from '../vendor/transitions/icon-swap';
import { SuccessCheck } from '../vendor/transitions/success-check';
import { AvatarGroup } from '../vendor/transitions/avatar-group-hover';
import { InputShake } from '../vendor/transitions/error-state-shake';
import { ClearInput } from '../vendor/transitions/input-clear-dissolve';
import { SkeletonReveal } from '../vendor/transitions/skeleton-reveal';
import { Shimmer } from '../vendor/transitions/shimmer-text';
import { SlidingTabs } from '../vendor/transitions/tabs-sliding';
import { TooltipGroup } from '../vendor/transitions/tooltip';
import { StaggerReveal } from '../vendor/transitions/texts-reveal';
import { TiltCard } from '../vendor/transitions/card-tilt';
import { PlusMenu } from '../vendor/transitions/plus-menu-morph';
import { Accordion } from '../vendor/transitions/accordion';
import { Toast } from '../vendor/transitions/toast';
import { LikeButton } from '../vendor/transitions/like-button';
import { LearnMore } from '../vendor/transitions/learn-more-hover';
import { Checkbox } from '../vendor/transitions/checkbox-check';
import { Counter } from '../vendor/transitions/spinning-counter';
import { Toggle } from '../vendor/transitions/toggle';
import '../vendor/transitions/extra.css';
import type { GalleryItem } from './items';

function Thinking(){const [i,set]=useState(0);const states=['Thinking…','Planning next steps…','Preparing a response…'];useEffect(()=>{const id=setInterval(()=>set(v=>(v+1)%states.length),2400);return()=>clearInterval(id)},[]);return <span className="t-think" role="status"><span className="t-think-sizer" aria-hidden="true">Preparing a response…</span><span className="t-think-text" data-text={states[i]}>{states[i]}</span></span>}
function Reasoning(){return <div className="t-reason"><div className="t-reason-viewport"><div className="t-reason-scroll reasoning-preview"><div className="t-reason-text"><p>Looking through the details.</p><p>Considering the next step.</p><p>Putting the answer together.</p></div></div></div></div>}
function Streaming(){const [visible,set]=useState(0);const words='Here is an answer appearing one word at a time.'.split(' ');useEffect(()=>{const id=setInterval(()=>set(v=>v>=words.length?0:v+1),300);return()=>clearInterval(id)},[]);return <div className="t-stream">{words.map((word,i)=><span key={i} className={'t-stream-w '+(i<visible?'is-in':'')}>{word}{' '}</span>)}</div>}
function Matrix(){return <div className="t-matrix" aria-label="Loading">{Array.from({length:16},(_,i)=><i key={i} style={{'--d':`${i*90}ms`}}/>)}</div>}
function Banners(){const [count,set]=useState(1);return <><button onClick={()=>set(v=>Math.min(v+1,3))}>Add banner</button><div className="t-stack">{Array.from({length:count},(_,i)=><div key={i} className="t-stack-banner" data-depth={i}>Update {count-i} received</div>)}</div><button onClick={()=>set(1)}>Reset</button></>}
const check=<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m5 12 4 4L19 6"/></svg>;
const entries=[
 ['card-resize','Card resize',()=> <CardResize/>],['number-pop-in','Number pop-in',()=> <NumberPopIn value="578"/>],['notification-badge','Notification badge',()=> <NotificationBadge>Notifications</NotificationBadge>],['text-states-swap','Text states swap',()=> <TextStatesSwap/>],['menu-dropdown','Menu dropdown',()=> <MenuDropdown/>],['modal','Modal open / close',()=> <Modal>Changes saved.</Modal>],['panel-reveal','Panel reveal',()=> <PanelReveal>Panel content</PanelReveal>],['page-side-by-side','Page side-by-side',()=> <PageSlide/>],['icon-swap','Icon swap',()=> <IconSwap iconA="♡" iconB="♥"/>],['success-check','Success check',()=> <SuccessCheck>{check}</SuccessCheck>],['avatar-group-hover','Avatar group hover',()=> <AvatarGroup items={['A','B','C','D'].map(x=><span className="transition-avatar">{x}</span>)}/>],['error-state-shake','Error state shake',()=> <InputShake message="Please enter a valid email."><input aria-label="Email" placeholder="Email"/></InputShake>],['input-clear-dissolve','Input clear with dissolve',()=> <ClearInput defaultValue="How do transitions work?" placeholder="Search"/>],['skeleton-reveal','Skeleton loader and reveal',()=> <SkeletonReveal skeleton={<div className="transition-skeleton"/>}><div className="transition-sample-card">Your content is ready.</div></SkeletonReveal>],['shimmer-text','Shimmer text',()=> <Shimmer>Planning next steps</Shimmer>],['tabs-sliding','Tabs sliding',()=> <SlidingTabs tabs={['Plan','Debug','Ask']}/>],['tooltip','Tooltip open/close',()=> <TooltipGroup id="transition-tooltip" items={[{label:'Copy',tooltip:'Copy link'},{label:'Share',tooltip:'Share item'}]}/>],['texts-reveal','Texts reveal',()=> <StaggerReveal primary="Request opened" secondary="Ready to review"/>],['card-tilt','3D tilt',()=> <TiltCard><div className="transition-sample-card">Move your pointer</div></TiltCard>],['plus-menu-morph','Dropdown menu morph',()=> <PlusMenu><button type="button" role="menuitem">New item</button><button type="button" role="menuitem">Upload</button></PlusMenu>],['accordion','Accordion',()=> <Accordion title="Appearance">Choose how things look.</Accordion>],['toast','Toast open/close',()=> <Toast>Changes saved</Toast>],['like-button','Like button',()=> <LikeButton/>],['learn-more-hover','Learn more hover',()=> <LearnMore/>],['checkbox-check','Checkbox check',()=> <Checkbox label="Notify me"/>],['spinning-counter','Spinning counter',()=> <Counter target={128}/>],['toggle','Toggle',()=> <Toggle/>],['thinking-states','Thinking states',()=> <Thinking/>],['reasoning-stream','Reasoning stream',()=> <Reasoning/>],['streaming-text','Streaming text',()=> <Streaming/>],['matrix-loader','Matrix dot loader',()=> <Matrix/>],['banner-stacking','Banner stacking',()=> <Banners/>],
];
const paths:Record<string,string>={modal:'modal-open-close','input-clear-dissolve':'input-clear-with-dissolve','skeleton-reveal':'skeleton-loader-and-reveal',tooltip:'tooltip-open-close','card-tilt':'3d-tilt','plus-menu-morph':'dropdown-menu-morph',toast:'toast-open-close','matrix-loader':'matrix-dot-loader'};
export const transitionItems:GalleryItem[]=entries.map(([slug,name,render])=>({id:slug==='modal'?'transitions-modal':`transitions-${slug}`,name,category:'Transitions',source:'Transitions.dev',sourceUrl:`https://transitions.dev/transitions/${paths[slug]||slug}/`,render:()=> <div className="transition-demo">{render()}</div>}));
