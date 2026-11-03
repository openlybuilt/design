import { InputOTP, InputOTPGroup, InputOTPSlot } from '../vendor/kobra/input-otp';
import type { GalleryItem } from './items';
export const kobraItems:GalleryItem[]=[{id:'kobra-input-otp',name:'Verification code',category:'Inputs',source:'Kobra',sourceUrl:'https://kobra.systems/components/input-otp',render:()=> <InputOTP maxLength={6} aria-label="Verification code"><InputOTPGroup>{Array.from({length:6},(_,i)=><InputOTPSlot key={i} index={i}/>)}</InputOTPGroup></InputOTP>}];
