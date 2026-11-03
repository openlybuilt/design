import type {GalleryItem} from "./items";
import { PricingFaq as BlockDemo0 } from "../vendor/arc/blocks/faq-section-demo";
import { Numbers as BlockDemo1 } from "../vendor/arc/blocks/stats-band-demo";
import { Alternatives as BlockDemo2 } from "../vendor/arc/blocks/comparison-table-demo";
import { PricingPage as BlockDemo3 } from "../vendor/arc/blocks/plan-comparison-demo";
import { EmptyGallery as BlockDemo4 } from "../vendor/arc/blocks/empty-states-demo";
import { ProjectPage as BlockDemo5 } from "../vendor/arc/blocks/page-header-demo";
import { Closing as BlockDemo6 } from "../vendor/arc/blocks/cta-section-demo";
import { Hero as BlockDemo7 } from "../vendor/arc/blocks/hero-section-demo";
import { SignupDemo as BlockDemo8 } from "../vendor/arc/blocks/signup-form-demo";
import { LoginDemo as BlockDemo9 } from "../vendor/arc/blocks/login-centered-demo";
import { BlogGridBlock } from "../vendor/arc/blocks/blog-grid/blog-grid";
import { ContactSection } from "../vendor/arc/blocks/contact-section/contact-section";
export const arcBlockItems:GalleryItem[]=[
 {id:"arc-block-blog-grid",name:"Blog Grid",category:"Cards",source:"Arc Library",sourceUrl:"https://uiarc.dev/components/blocks/blog-grid",render:()=> <div className="arc-block-preview"><BlogGridBlock/></div>},
 {id:"arc-block-contact-section",name:"Contact Section",category:"Inputs",source:"Arc Library",sourceUrl:"https://uiarc.dev/components/blocks/contact-section",render:()=> <div className="arc-block-preview"><ContactSection/></div>},
 {id:"arc-block-faq-section",name:"Faq Section",category:"Controls",source:"Arc Library",sourceUrl:"https://uiarc.dev/components/blocks/faq-section",render:()=> <div className="arc-block-preview" onClickCapture={e=>{if((e.target as HTMLElement).closest("a")) e.preventDefault()}}><BlockDemo0/></div>},
 {id:"arc-block-stats-band",name:"Stats Band",category:"Charts",source:"Arc Library",sourceUrl:"https://uiarc.dev/components/blocks/stats-band",render:()=> <div className="arc-block-preview" onClickCapture={e=>{if((e.target as HTMLElement).closest("a")) e.preventDefault()}}><BlockDemo1/></div>},
 {id:"arc-block-comparison-table",name:"Comparison Table",category:"Tables",source:"Arc Library",sourceUrl:"https://uiarc.dev/components/blocks/comparison-table",render:()=> <div className="arc-block-preview" onClickCapture={e=>{if((e.target as HTMLElement).closest("a")) e.preventDefault()}}><BlockDemo2/></div>},
 {id:"arc-block-plan-comparison",name:"Plan Comparison",category:"Tables",source:"Arc Library",sourceUrl:"https://uiarc.dev/components/blocks/plan-comparison",render:()=> <div className="arc-block-preview" onClickCapture={e=>{if((e.target as HTMLElement).closest("a")) e.preventDefault()}}><BlockDemo3/></div>},
 {id:"arc-block-empty-states",name:"Empty States",category:"Controls",source:"Arc Library",sourceUrl:"https://uiarc.dev/components/blocks/empty-states",render:()=> <div className="arc-block-preview" onClickCapture={e=>{if((e.target as HTMLElement).closest("a")) e.preventDefault()}}><BlockDemo4/></div>},
 {id:"arc-block-page-header",name:"Page Header",category:"Controls",source:"Arc Library",sourceUrl:"https://uiarc.dev/components/blocks/page-header",render:()=> <div className="arc-block-preview" onClickCapture={e=>{if((e.target as HTMLElement).closest("a")) e.preventDefault()}}><BlockDemo5/></div>},
 {id:"arc-block-cta-section",name:"Cta Section",category:"Controls",source:"Arc Library",sourceUrl:"https://uiarc.dev/components/blocks/cta-section",render:()=> <div className="arc-block-preview" onClickCapture={e=>{if((e.target as HTMLElement).closest("a")) e.preventDefault()}}><BlockDemo6/></div>},
 {id:"arc-block-hero-section",name:"Hero Section",category:"Controls",source:"Arc Library",sourceUrl:"https://uiarc.dev/components/blocks/hero-section",render:()=> <div className="arc-block-preview" onClickCapture={e=>{if((e.target as HTMLElement).closest("a")) e.preventDefault()}}><BlockDemo7/></div>},
 {id:"arc-block-signup-form",name:"Signup Form",category:"Inputs",source:"Arc Library",sourceUrl:"https://uiarc.dev/components/blocks/signup-form",render:()=> <div className="arc-block-preview" onClickCapture={e=>{if((e.target as HTMLElement).closest("a")) e.preventDefault()}}><BlockDemo8/></div>},
 {id:"arc-block-login-centered",name:"Login Centered",category:"Inputs",source:"Arc Library",sourceUrl:"https://uiarc.dev/components/blocks/login-centered",render:()=> <div className="arc-block-preview" onClickCapture={e=>{if((e.target as HTMLElement).closest("a")) e.preventDefault()}}><BlockDemo9/></div>},
];
