import { ThinkingLoader } from '../vendor/affectui/thinking-loader';
import { SegmentedControl } from '../vendor/affectui/segmented-control';
import { ToolCallCard } from '../vendor/affectui/tool-call-card';
import { ReactionBar } from '../vendor/affectui/reaction-bar';
import { EmailDraft } from '../vendor/affectui/email-draft';
import { NotificationStack } from '../vendor/affectui/notification-stack';
import { SmartRecommendation } from '../vendor/affectui/smart-recommendation';
import { MessageActions } from '../vendor/affectui/message-actions';
import { ChangeSummary } from '../vendor/affectui/change-summary';
import { CommentThread } from '../vendor/affectui/comment-thread';
import { TipsPanel } from '../vendor/affectui/tips-panel';
import { DecisionInbox } from '../vendor/affectui/decision-inbox';
import { ProfileMenu } from '../vendor/affectui/profile-menu';
import { OtpInput } from '../vendor/affectui/otp-input';
import { FilterMenu } from '../vendor/affectui/filter-menu';
import { ProgressTracker } from '../vendor/affectui/progress-tracker';
import type { GalleryItem } from './items';
export const affectItems:GalleryItem[]=[
 {id:'affect-thinking-loader',name:'Thinking loader',category:'AI',source:'AffectUI',render:()=> <ThinkingLoader/>},
 {id:'affect-thinking-plain',name:'Thinking loader: plain',category:'AI',source:'AffectUI',render:()=> <ThinkingLoader variant="plain"/>},
 {id:'affect-segmented-tray',name:'Segmented control',category:'Controls',source:'AffectUI',render:()=> <SegmentedControl aria-label="Time range" options={[{value:'day',label:'Day'},{value:'week',label:'Week'},{value:'month',label:'Month'}]}/>},
 {id:'affect-segmented-underline',name:'Underline control',category:'Controls',source:'AffectUI',render:()=> <SegmentedControl variant="underline" aria-label="Time range" options={[{value:'day',label:'Day'},{value:'week',label:'Week'},{value:'month',label:'Month'}]}/>},
 {id:'affect-tool-call',name:'Tool call',category:'AI',source:'AffectUI',render:()=> <ToolCallCard name="search" summary="Found relevant results" status="success" duration={1200}/>},
 {id:'affect-tool-error',name:'Tool call: error',category:'AI',source:'AffectUI',render:()=> <ToolCallCard name="search" summary="Could not complete" status="error" error="Try again."/>},
 {id:'affect-reaction-bar',name:'Reaction bar',category:'Chat',source:'AffectUI',render:()=> <ReactionBar/>},
 {id:'affect-email-draft',name:'Draft preview',category:'Chat',source:'AffectUI',render:()=> <EmailDraft/>},
 {id:'affect-notifications',name:'Notification stack',category:'Controls',source:'AffectUI',render:()=> <NotificationStack notices={[{id:'1',title:'Workflow ready',text:'Your workflow is ready to review.'},{id:'2',title:'New activity',text:'A new task needs your attention.'}]}/>},
 {id:'affect-recommendation',name:'Smart recommendation',category:'AI',source:'AffectUI',render:()=> <SmartRecommendation options={[{id:'1',label:'Review changes',reason:'Your latest workflow is ready.',signal:3},{id:'2',label:'Continue later',reason:'Keep the current draft.',signal:1}]}/>},
 {id:'affect-message-actions',name:'Message actions',category:'Chat',source:'AffectUI',render:()=> <MessageActions text="Your workflow is ready to review." versions={2}/>},
 {id:'affect-change-summary',name:'Change summary',category:'Charts',source:'AffectUI',render:()=> <ChangeSummary period="This week" changes={[{label:'Completed',change:'Up 12% to 128',tone:'good'},{label:'Pending',change:'Down to 4',tone:'neutral'}]}/>},
 {id:'affect-comment-thread',name:'Comment thread',category:'Chat',source:'AffectUI',render:()=> <CommentThread currentUser={{name:'Alex'}} messages={[{id:'1',author:{name:'Sam'},createdAt:Date.now(),text:'The draft is ready to review.'}]}/>},
 {id:'affect-tips',name:'Tips panel',category:'Controls',source:'AffectUI',render:()=> <TipsPanel tips={[{id:'1',title:'Get started',description:'Set up your first workflow.',action:'Start',primary:true},{id:'2',title:'Invite your team',description:'Work together on a project.',action:'Invite'}]}/>},
 {id:'affect-decisions',name:'Decision inbox',category:'AI',source:'AffectUI',render:()=> <DecisionInbox decisions={[{id:'1',title:'Review the workflow',detail:'Your draft is ready.',primary:'Approve',secondary:'Revise'}]}/>},
 {id:'affect-profile',name:'Profile menu',category:'Controls',source:'AffectUI',render:()=> <ProfileMenu name="Alex Morgan" email="alex@example.com"/>},
 {id:'affect-otp',name:'Animated verification code',category:'Inputs',source:'AffectUI',render:()=> <OtpInput/>},
 {id:'affect-filter',name:'Filter menu',category:'Controls',source:'AffectUI',render:()=> <FilterMenu groups={[{id:'status',label:'Status',options:[{id:'ready',label:'Ready'},{id:'draft',label:'Draft'}]}]}/>},
 {id:'affect-progress-tracker',name:'Progress tracker',category:'Controls',source:'AffectUI',render:()=> <ProgressTracker steps={[{id:'1',label:'Create a workflow',done:true},{id:'2',label:'Review your settings'},{id:'3',label:'Invite your team'}]}/>},
];
