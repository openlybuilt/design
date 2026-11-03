import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import type { SankeyData } from 'recharts';
import type { Preferences } from '../types';
import { EvilAreaChart } from '../registry/charts/recharts-area-chart';
import { EvilSankeyChart } from '../registry/charts/recharts-sankey-chart';
import { EvilHeatmapChart, type HeatmapDatum } from '../registry/charts/recharts-heatmap-chart';
import { Popover, PopoverContent, PopoverTrigger } from '../vendor/arc/popover/popover';

type Curve = 'monotone' | 'bump' | 'step' | 'monotoneY';
type Stack = 'default' | 'stacked' | 'expanded';
type Fill = 'gradient' | 'gradient-reverse' | 'solid' | 'dotted' | 'lines' | 'hatched';
type Stroke = 'solid' | 'dashed' | 'animated-dashed';
type Link = 'gradient' | 'solid' | 'source' | 'target';
type ChartSettings = { curve: Curve; stack: Stack; fill: Fill; stroke: Stroke; labels: 'inside' | 'outside' | 'none'; links: Link; values: boolean; week: 'sunday' | 'monday'; scale: 'quantile' | 'linear'; shape: 'square' | 'rounded'; spacing: 'compact' | 'roomy'; thresholds: 'automatic' | 'fixed'; };
const defaults: ChartSettings = { curve:'monotone', stack:'stacked', fill:'gradient', stroke:'solid', labels:'outside', links:'gradient', values:true, week:'sunday', scale:'quantile', shape:'square', spacing:'compact', thresholds:'automatic' };
function useChartSettings(name: string) {
  const key = `design-chart-${name}`;
  const [settings, setSettings] = useState<ChartSettings>(() => {
    try { const saved = localStorage.getItem(key); return saved ? { ...defaults, ...JSON.parse(saved) } : defaults; } catch { return defaults; }
  });
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(settings)); } catch { /* The preview still works without browser storage. */ } }, [key, settings]);
  const set = <K extends keyof ChartSettings>(field: K, value: ChartSettings[K]) => setSettings(previous => ({...previous, [field]: value}));
  return [settings, set] as const;
}
function Controls({name, children}: {name:string; children:ReactNode}) {
  const [open, setOpen] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const cancelClose = () => clearTimeout(closeTimer.current);
  useEffect(() => () => clearTimeout(closeTimer.current), []);
  return <Popover open={open} onOpenChange={setOpen}>
    <div className="chart-controls" onPointerEnter={event => {if (event.pointerType === 'mouse') { cancelClose(); setOpen(true); }}} onPointerLeave={event => {if (event.pointerType === 'mouse') closeTimer.current = setTimeout(() => setOpen(false), 400);}}>
      <PopoverTrigger ref={node => { if (node) setContainer(node.closest<HTMLElement>('.app')); }} type="button" className="chart-controls-trigger" aria-label={`Customize ${name}`}><ChevronDown size={17} aria-hidden="true" /></PopoverTrigger>
    </div>
    <PopoverContent portalContainer={container} className="chart-controls-panel" align="end" sideOffset={6} aria-label={`${name} options`} onOpenAutoFocus={event => event.preventDefault()} onPointerEnter={cancelClose} onPointerLeave={event => {if (event.pointerType === 'mouse' && !event.currentTarget.contains(document.activeElement)) closeTimer.current = setTimeout(() => setOpen(false), 400);}}>
      <div className="chart-controls-title">Chart settings</div>{children}
    </PopoverContent>
  </Popover>;
}
function Choice<T extends string>({label,value,options,onChange}: {label:string;value:T;options:readonly (readonly [T,string])[];onChange:(value:T)=>void}) {
  return <div className="chart-option"><span>{label}</span><details className="chart-choice">
    <summary className="chart-choice-trigger" aria-label={`${label}: ${options.find(([key]) => key === value)?.[1] ?? value}`}><span>{options.find(([key]) => key === value)?.[1] ?? value}</span><ChevronDown size={15} aria-hidden="true" /></summary>
    <div className="chart-choice-options" role="group" aria-label={`${label} options`}>{options.map(([key,text]) => <button type="button" key={key} className="chart-choice-item" aria-pressed={key === value} onClick={event => {onChange(key); const details = event.currentTarget.closest('details'); if (details) { details.open = false; details.querySelector('summary')?.focus(); }}}>{text}{key === value && <span aria-hidden="true">✓</span>}</button>)}</div>
  </details></div>;
}
const areaData = [
  {day:'Mon', desktop:34, mobile:24}, {day:'Tue', desktop:65, mobile:42}, {day:'Wed', desktop:48, mobile:35}, {day:'Thu', desktop:72, mobile:49}, {day:'Fri', desktop:56, mobile:41}, {day:'Sat', desktop:81, mobile:60}, {day:'Sun', desktop:68, mobile:52},
];
export function ConfigurableArea({prefs}: {prefs:Preferences}) {
  const [s,set] = useChartSettings('area');
  const config = {desktop:{label:'Desktop',colors:{light:[prefs.accent],dark:[prefs.accent]}},mobile:{label:'Mobile',colors:{light:[prefs.active],dark:[prefs.active]}}};
  return <div className="configurable-chart"><Controls name="area chart">
    <Choice label="Curve" value={s.curve} onChange={v=>set('curve',v)} options={[["monotone","Smooth"],["bump","Bump"],["step","Step"],["monotoneY","Vertical smooth"]]} />
    <Choice label="Stack" value={s.stack} onChange={v=>set('stack',v)} options={[["default","Overlaid"],["stacked","Stacked"],["expanded","100% stacked"]]} />
    <Choice label="Fill" value={s.fill} onChange={v=>set('fill',v)} options={[["gradient","Gradient"],["gradient-reverse","Reverse gradient"],["solid","Solid"],["dotted","Dots"],["lines","Lines"],["hatched","Hatched"]]} />
    <Choice label="Outline" value={s.stroke} onChange={v=>set('stroke',v)} options={[["solid","Solid"],["dashed","Dashed"],["animated-dashed","Animated dashed"]]} />
  </Controls><div className="evil-chart"><EvilAreaChart data={areaData} config={config} curveType={s.curve} stackType={s.stack} animationType="none"><EvilAreaChart.Grid/><EvilAreaChart.XAxis dataKey="day"/><EvilAreaChart.Tooltip/><EvilAreaChart.Area dataKey="desktop" variant={s.fill} strokeVariant={s.stroke}/><EvilAreaChart.Area dataKey="mobile" variant={s.fill} strokeVariant={s.stroke}/></EvilAreaChart></div></div>;
}
const sankeyData: SankeyData = { nodes:[{name:'Search'},{name:'Social'},{name:'Visitors'},{name:'Customers'},{name:'Left'}], links:[{source:0,target:2,value:65},{source:1,target:2,value:35},{source:2,target:3,value:55},{source:2,target:4,value:45}] };
export function ConfigurableSankey({prefs}: {prefs:Preferences}) {
  const [s,set] = useChartSettings('sankey');
  const config = Object.fromEntries(sankeyData.nodes.map((node,index)=>{const colors=[prefs.accent,prefs.active,prefs.success,prefs.warning,prefs.muted];return [node.name,{label:node.name,colors:{light:[colors[index]],dark:[colors[index]]}}]}));
  return <div className="configurable-chart"><Controls name="Sankey chart">
    <Choice label="Node labels" value={s.labels} onChange={v=>set('labels',v)} options={[["outside","Outside"],["inside","Inside"],["none","Hidden"]]} />
    <Choice label="Connections" value={s.links} onChange={v=>set('links',v)} options={[["gradient","Gradient"],["solid","Solid"],["source","Source color"],["target","Target color"]]} />
    <label className="chart-option chart-check"><span>Show values</span><input type="checkbox" checked={s.values} onChange={e=>set('values',e.target.checked)}/></label>
  </Controls><div className="evil-chart"><EvilSankeyChart data={sankeyData} config={config} nodeWidth={s.labels==='inside'?66:10} nodePadding={18} sankeyProps={{margin:{top:8,right:82,bottom:8,left:58}}}><EvilSankeyChart.Node radius={4}>{s.labels!=='none' && <EvilSankeyChart.NodeLabel position={s.labels} showValues={s.values}/>}</EvilSankeyChart.Node><EvilSankeyChart.Link variant={s.links}/><EvilSankeyChart.Tooltip/></EvilSankeyChart></div></div>;
}
const heatmapData: HeatmapDatum[] = Array.from({length:91},(_,i)=>({date:new Date(Date.UTC(2025,9,1+i)).toISOString().slice(0,10),value:(i*17+i%7*5)%18}));
export function ConfigurableHeatmap({prefs}: {prefs:Preferences}) {
  const [s,set] = useChartSettings('heatmap');
  const config = {activity:{label:'Activity',colors:{light:[prefs.muted,prefs.accent,prefs.active,prefs.success],dark:[prefs.muted,prefs.accent,prefs.active,prefs.success]}}};
  return <div className="configurable-chart"><Controls name="heatmap">
    <Choice label="Week starts" value={s.week} onChange={v=>set('week',v)} options={[["sunday","Sunday"],["monday","Monday"]]} />
    <Choice label="Color scale" value={s.scale} onChange={v=>set('scale',v)} options={[["quantile","Balanced"],["linear","Linear"]]} />
    <Choice label="Cell shape" value={s.shape} onChange={v=>set('shape',v)} options={[["square","Square"],["rounded","Rounded"]]} />
    <Choice label="Cell spacing" value={s.spacing} onChange={v=>set('spacing',v)} options={[["compact","Compact"],["roomy","Roomy"]]} />
    <Choice label="Color thresholds" value={s.thresholds} onChange={v=>set('thresholds',v)} options={[["automatic","Automatic"],["fixed","Fixed"]]} />
  </Controls><div className="evil-chart"><EvilHeatmapChart data={heatmapData} config={config} range={['2025-10-01','2025-12-30']} weekStart={s.week} scale={s.scale} thresholds={s.thresholds==='fixed'?[3,10]:undefined} animation={false}><EvilHeatmapChart.Cell dataKey="activity" radius={s.shape==='rounded'?6:0} gap={s.spacing==='roomy'?5:2}/><EvilHeatmapChart.MonthLabel/><EvilHeatmapChart.DayLabel/><EvilHeatmapChart.Tooltip/><EvilHeatmapChart.Legend/></EvilHeatmapChart></div></div>;
}
