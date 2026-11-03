import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious} from '../vendor/kobra/carousel';
import {Editor} from '../vendor/kobra/ai-editor';
import {Toasts,toast} from '../vendor/kobra/toast';
import type {GalleryItem} from './items';
export const kobraAdaptedItems:GalleryItem[]=[
 {id:'kobra-carousel',name:'Carousel',category:'Effects',source:'Kobra',sourceUrl:'https://kobra.systems/components/carousel',render:()=> <Carousel className="kobra-carousel"><CarouselContent><CarouselItem><div className="canvas-effect-content">First slide</div></CarouselItem><CarouselItem><div className="canvas-effect-content">Second slide</div></CarouselItem></CarouselContent><CarouselPrevious/><CarouselNext/></Carousel>},
 {id:'kobra-ai-editor',name:'AI editor',category:'Chat',source:'Kobra',sourceUrl:'https://kobra.systems/components/ai-editor',render:()=> <Editor title="Draft" answer="Here is a clearer version of the selected text.">Select part of this text to explore the editing tools.</Editor>},
 {id:'kobra-toast',name:'Toast',category:'Controls',source:'Kobra',sourceUrl:'https://kobra.systems/components/toast',render:()=> <><button className="save" onClick={()=>toast({message:'Changes saved',state:'success'})}>Show toast</button><Toasts/></>},
];
