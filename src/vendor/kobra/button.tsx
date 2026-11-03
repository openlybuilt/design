import type {ComponentProps} from 'react';
export function Button({variant: _variant,size: _size,className='',...props}:ComponentProps<'button'> & {variant?:string;size?:string}){return <button className={`kobra-adapted-button ${className}`} {...props}/>}
