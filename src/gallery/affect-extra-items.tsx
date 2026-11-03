import {AgentTeam} from '../vendor/affectui/illustrations/agent-team';
import {CoverFlow} from '../vendor/affectui/illustrations/cover-flow';
import {EmptyCalendar} from '../vendor/affectui/illustrations/empty-calendar';
import {EnrichmentOrbit} from '../vendor/affectui/illustrations/enrichment-orbit';
import {FrostCloud} from '../vendor/affectui/illustrations/frost-cloud';
import {GhostedChat} from '../vendor/affectui/illustrations/ghosted-chat';
import {GlowCloud} from '../vendor/affectui/illustrations/glow-cloud';
import {IntegrationBeam} from '../vendor/affectui/illustrations/integration-beam';
import {IntegrationGrid} from '../vendor/affectui/illustrations/integration-grid';
import {LayerStack} from '../vendor/affectui/illustrations/layer-stack';
import {LeadSourcing} from '../vendor/affectui/illustrations/lead-sourcing';
import {LogoCluster} from '../vendor/affectui/illustrations/logo-cluster';
import {ModelWheel} from '../vendor/affectui/illustrations/model-wheel';
import {RegionDach} from '../vendor/affectui/illustrations/region-dach';
import {SideFolder} from '../vendor/affectui/illustrations/side-folder';
import {TabOverload} from '../vendor/affectui/illustrations/tab-overload';
import {TeamInvite} from '../vendor/affectui/illustrations/team-invite';
import {GridBackground} from '../vendor/affectui/motion/grid-background';
import {NumberTicker} from '../vendor/affectui/motion/number-ticker';
import {Skeleton,ShimmerText} from '../vendor/affectui/motion/shimmer-loader';
import {TextReveal} from '../vendor/affectui/motion/text-reveal';
import {LogoMarquee} from '../vendor/affectui/blocks/logo-marquee';
import {TestimonialWall} from '../vendor/affectui/blocks/testimonial-wall';
import type {GalleryItem} from './items';
const face='/assets/preview-person.svg';const source='AffectUI';
export const affectExtraItems:GalleryItem[]=[
 {id:'affect-agent-team',name:'Agent team',category:'AI',source,render:()=> <AgentTeam members={[{role:'Research',avatar:face},{role:'Planning',avatar:face},{role:'Review',avatar:face}]}/>},
 {id:'affect-cover-flow',name:'Cover flow',category:'Effects',source,render:()=> <CoverFlow items={['First','Second','Third'].map((title,id)=>({id,title,image:'/assets/preview-landscape.svg'}))} itemWidth={100} itemHeight={130}/>},
 {id:'affect-empty-calendar',name:'Empty calendar',category:'Controls',source,render:()=> <EmptyCalendar/>},
 {id:'affect-enrichment-orbit',name:'Enrichment orbit',category:'Effects',source,render:()=> <EnrichmentOrbit/>},
 {id:'affect-frost-cloud',name:'Frost cloud',category:'Effects',source,render:()=> <FrostCloud/>},
 {id:'affect-ghosted-chat',name:'Ghosted chat',category:'Chat',source,render:()=> <GhostedChat/>},
 {id:'affect-glow-cloud',name:'Glow cloud',category:'Effects',source,render:()=> <GlowCloud/>},
 {id:'affect-integration-beam',name:'Integration beam',category:'Effects',source,render:()=> <IntegrationBeam/>},
 {id:'affect-integration-grid',name:'Integration grid',category:'Effects',source,render:()=> <IntegrationGrid columns={5}/>},
 {id:'affect-layer-stack',name:'Layer stack',category:'Effects',source,render:()=> <LayerStack/>},
 {id:'affect-lead-sourcing',name:'Lead sourcing',category:'Effects',source,render:()=> <LeadSourcing/>},
 {id:'affect-logo-cluster',name:'Logo cluster',category:'Effects',source,render:()=> <LogoCluster/>},
 {id:'affect-model-wheel',name:'Model wheel',category:'AI',source,render:()=> <ModelWheel/>},
 {id:'affect-region-dach',name:'Region map',category:'Charts',source,render:()=> <RegionDach showSwitcher/>},
 {id:'affect-side-folder',name:'Side folder',category:'Effects',source,render:()=> <SideFolder/>},
 {id:'affect-tab-overload',name:'Tab overload',category:'Effects',source,render:()=> <TabOverload/>},
 {id:'affect-team-invite',name:'Team invite',category:'Avatars',source,render:()=> <TeamInvite avatars={[{src:face,name:'Alex'},{src:face,name:'Sam'},{src:face,name:'Taylor'}]}/>},
 {id:'affect-grid-background',name:'Grid background',category:'Effects',source,render:()=> <GridBackground><div className="canvas-effect-content">A moving grid</div></GridBackground>},
 {id:'affect-number-ticker',name:'Number ticker',category:'Charts',source,render:()=> <NumberTicker value={128}/>},
 {id:'affect-skeleton-loader',name:'Shimmer loader',category:'Controls',source,render:()=> <Skeleton width={180} height={18}/>},
 {id:'affect-shimmer-text',name:'Shimmer text',category:'AI',source,render:()=> <ShimmerText>Thinking…</ShimmerText>},
 {id:'affect-text-reveal',name:'Text reveal',category:'Effects',source,render:()=> <TextReveal text="Ideas become clear"/>},
 {id:'affect-logo-marquee',name:'Logo marquee',category:'Effects',source,render:()=> <LogoMarquee logos={[{name:'One',svg:<span>◆</span>},{name:'Two',svg:<span>●</span>},{name:'Three',svg:<span>■</span>}]}/>},
 {id:'affect-testimonial-wall',name:'Testimonial wall',category:'Controls',source,render:()=> <TestimonialWall items={[{name:'Alex',quote:'A simple way to get started.'},{name:'Sam',quote:'Everything feels clearer.'}]} columns={1}/>},
];
