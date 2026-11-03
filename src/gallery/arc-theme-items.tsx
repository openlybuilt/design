import {useState} from 'react';
import {ThemeSwitch,type Theme,type ThemeSwitchVariant} from '../vendor/arc/theme-switch/theme-switch';
import type {GalleryItem} from './items';
function Demo({variant}:{variant:ThemeSwitchVariant}){const [theme,setTheme]=useState<Theme>('dark');return <ThemeSwitch theme={theme} variant={variant} onThemeChange={setTheme}/>}
export const arcThemeItems:GalleryItem[]=(['eclipse','split','rise'] as const).map(variant=>({id:`arc-theme-switch-${variant}`,name:`Theme switch: ${variant}`,category:'Controls',source:'Arc Library',sourceUrl:`https://uiarc.dev/components/theme-switch-${variant}`,render:()=> <Demo variant={variant}/> }));
