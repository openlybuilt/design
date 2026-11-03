import { useCallback, useEffect, useLayoutEffect, useRef, useState, type PointerEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ComposedChart, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, Radar, RadarChart, RadialBar, RadialBarChart, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';
import { Background, ReactFlow, type Edge, type Node as FlowNode } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { WaffleChart } from './vendor/arc/waffle-chart/waffle-chart';
import { EvilBarChart } from './registry/charts/recharts-bar-chart';
import { EvilHeatmapChart } from './registry/charts/recharts-heatmap-chart';

const palettes = [
  ['#f4aaa5', '#d96b78', '#a74156', '#f6d2b8'],
  ['#b0c7fc', '#8191e5', '#df91c9', '#c7b7ed'],
  ['#9ce0c1', '#55b9ae', '#e7c17b', '#9bb9e9'],
];

const examples = [
  { type: 'waffle', titles: ['Ideas by category', 'Community interests', 'Shared resources'] },
  { type: 'flowchart', titles: ['A simple process', 'A branching decision', 'A project pipeline'] },
  { type: 'evil-bar', titles: ['Gradient bars', 'Hatched bars', 'Two-tone bars'] },
  { type: 'heatmap', titles: ['Creative activity', 'Community contributions', 'Research days'] },
  { type: 'line', titles: ['Community growth', 'Ideas shared', 'Project activity'] },
  { type: 'area', titles: ['Research interest', 'Monthly downloads', 'People reached'] },
  { type: 'bar', titles: ['Projects by month', 'Resources shared', 'Contributions'] },
  { type: 'stacked', titles: ['Work across teams', 'Sources of support', 'Community participation'] },
  { type: 'donut', titles: ['Areas of work', 'Resource mix', 'Community interests'] },
  { type: 'radar', titles: ['Project strengths', 'Research priorities', 'Skills in the community'] },
  { type: 'radial', titles: ['Milestone progress', 'Goals in motion', 'Project completion'] },
  { type: 'scatter', titles: ['Ideas and impact', 'Reach and engagement', 'Effort and outcomes'] },
];

const tooltipStyle = { background: '#231918', border: '1px solid #55403f', borderRadius: 8, color: '#f7f6f2', fontSize: 12 };
const typeLabel = (type: string) => ({ 'evil-bar': 'Evil Bars', stacked: 'Combination' }[type] ?? type[0]!.toUpperCase() + type.slice(1));
const sourceFor = (type: string) => type === 'waffle'
  ? { name: 'Arc Library', href: 'https://github.com/kuratlielia/arc-library' }
  : type === 'flowchart' ? { name: 'React Flow', href: 'https://reactflow.dev/' }
  : type === 'evil-bar' ? { name: 'Evil Charts', href: 'https://evilcharts.com/docs/recharts/bar-chart' }
  : type === 'heatmap' ? { name: 'Evil Charts', href: 'https://evilcharts.com/docs/recharts/heatmap-chart' }
  : { name: 'Recharts', href: 'https://recharts.github.io/' };

function FlowPreview({ variant }: { variant: number }) {
  const labels = variant === 2 ? ['Collect', 'Prepare', 'Build', 'Share'] : ['New idea', variant === 1 ? 'Needs review?' : 'Create', variant === 1 ? 'Review' : 'Share'];
  const nodes: FlowNode[] = labels.map((label, i) => ({ id: String(i), position: { x: i * 200, y: variant === 1 && i === 2 ? 45 : 100 }, data: { label } }));
  if (variant === 1) nodes.push({ id: '3', position: { x: 400, y: 155 }, data: { label: 'Publish' } });
  const edges: Edge[] = variant === 1
    ? [{ id: '01', source: '0', target: '1', animated: true }, { id: '12', source: '1', target: '2' }, { id: '13', source: '1', target: '3' }]
    : labels.slice(1).map((_, i) => ({ id: `${i}-${i + 1}`, source: String(i), target: String(i + 1), animated: i === 0 }));
  return <div className="design-flow-preview"><ReactFlow nodes={nodes} edges={edges} fitView fitViewOptions={{ padding: .3 }} nodesDraggable={false} nodesConnectable={false} elementsSelectable={false} panOnDrag={false} zoomOnScroll={false} zoomOnPinch={false} zoomOnDoubleClick={false}><Background color="#704e4b" gap={24}/></ReactFlow></div>;
}

function ChartPreview({ type, variant }: { type: string; variant: number }) {
  const colors = palettes[variant]!;
  const values = [
    [18, 27, 23, 38, 33, 49, 57],
    [35, 28, 42, 39, 54, 48, 68],
    [12, 20, 32, 26, 43, 57, 64],
  ][variant]!;
  const data = values.map((value, i) => ({ name: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][i], value, other: Math.round(value * .45 + (i % 3) * 4), third: Math.round(value * .24 + 5) }));
  const parts = ['Design', 'Research', 'Tools', 'Community'].map((name, i) => ({ name, value: [37 - variant * 3, 27 + variant * 2, 21, 15 + variant][i]!, fill: colors[i] }));
  const grid = <CartesianGrid stroke="#51403f" strokeDasharray="3 5" vertical={false}/>;
  const xAxis = <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: '#c6b6b3', fontSize: 11 }} />;
  const yAxis = <YAxis width={32} tickLine={false} axisLine={false} tick={{ fill: '#c6b6b3', fontSize: 11 }} />;
  const tooltip = <Tooltip contentStyle={tooltipStyle} itemStyle={{ color: '#f7f6f2' }} cursor={{ fill: 'rgba(255,255,255,.05)' }}/>;
  switch (type) {
    case 'waffle': return <div className="design-waffle-preview"><WaffleChart label="Example distribution" data={parts.map(part => ({ key: part.name, label: part.name, value: part.value, color: part.fill }))}/></div>;
    case 'flowchart': return <FlowPreview key={variant} variant={variant}/>;
    case 'evil-bar': {
      const config = { value: { label: 'Total', colors: { light: [colors[0]!], dark: [colors[0]!] } } };
      const barVariant = (['gradient', 'hatched', 'duotone'] as const)[variant]!;
      return <div className="design-evil-preview"><EvilBarChart key={variant} data={data} config={config}><EvilBarChart.Grid/><EvilBarChart.XAxis dataKey="name"/><EvilBarChart.Tooltip/><EvilBarChart.Bar dataKey="value" variant={barVariant}/></EvilBarChart></div>;
    }
    case 'heatmap': {
      const heatData = Array.from({ length: 182 }, (_, i) => ({ date: new Date(Date.UTC(2025, 0, 1 + i)).toISOString().slice(0, 10), value: (i * 13 + (i % 7) * (variant + 3)) % 25 }));
      const ramp = ['#48312f', colors[2]!, colors[1]!, colors[0]!];
      const config = { activity: { label: 'Activity', colors: { light: ramp, dark: ramp } } };
      return <div className="design-evil-preview"><EvilHeatmapChart data={heatData} config={config} range={['2025-01-01', '2025-07-01']} animation={false}><EvilHeatmapChart.Cell dataKey="activity" radius={variant === 1 ? 8 : 3} gap={variant === 2 ? 4 : 2}/><EvilHeatmapChart.MonthLabel/><EvilHeatmapChart.DayLabel/></EvilHeatmapChart></div>;
    }
    case 'line': return <ResponsiveContainer width="100%" height="100%"><LineChart data={data}>{grid}{xAxis}{yAxis}{tooltip}<Line type={variant === 2 ? 'stepAfter' : 'monotone'} dataKey="value" name="Ideas" stroke={colors[0]} strokeWidth={3} dot={variant === 1} strokeDasharray={variant === 2 ? '7 4' : undefined}/>{variant !== 1 && <Line type="monotone" dataKey="other" name="Projects" stroke={colors[1]} strokeWidth={2} dot={false}/>}</LineChart></ResponsiveContainer>;
    case 'area': return <ResponsiveContainer width="100%" height="100%"><AreaChart data={data}>{grid}{xAxis}{yAxis}{tooltip}<Area type={variant === 2 ? 'stepAfter' : 'monotone'} dataKey="value" name="Total" stroke={colors[0]} fill={colors[0]} fillOpacity={.24} strokeWidth={3}/>{variant === 1 && <Area type="monotone" dataKey="other" name="Projects" stroke={colors[1]} fill={colors[1]} fillOpacity={.2}/>}</AreaChart></ResponsiveContainer>;
    case 'bar': return <ResponsiveContainer width="100%" height="100%"><BarChart data={data}>{grid}{xAxis}{yAxis}{tooltip}<Bar dataKey="value" name="Total" stackId={variant === 2 ? 'a' : undefined} fill={colors[0]} radius={variant === 2 ? undefined : [5, 5, 0, 0]}/>{variant !== 0 && <Bar dataKey="other" name="Projects" stackId={variant === 2 ? 'a' : undefined} fill={colors[1]} radius={[5, 5, 0, 0]}/>}</BarChart></ResponsiveContainer>;
    case 'stacked': return <ResponsiveContainer width="100%" height="100%"><ComposedChart data={data}>{grid}{xAxis}{yAxis}{tooltip}<Bar dataKey="other" name="Research" stackId="a" fill={colors[1]}/><Bar dataKey="third" name="Design" stackId="a" fill={colors[0]} radius={[5, 5, 0, 0]}/><Line type="monotone" dataKey="value" name="Total" stroke={colors[3]} strokeWidth={2} dot={false}/></ComposedChart></ResponsiveContainer>;
    case 'donut': return <ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={parts} dataKey="value" nameKey="name" innerRadius="52%" outerRadius="82%" paddingAngle={4} stroke="none">{parts.map(part => <Cell key={part.name} fill={part.fill}/>)}</Pie>{tooltip}</PieChart></ResponsiveContainer>;
    case 'radar': return <ResponsiveContainer width="100%" height="100%"><RadarChart data={parts.map((part, i) => ({ ...part, value: values[i + 2] }))} outerRadius="69%"><PolarGrid stroke="#6a5251"/><PolarAngleAxis dataKey="name" tick={{ fill: '#d3c4c2', fontSize: 11 }}/><Radar dataKey="value" name="Score" stroke={colors[0]} fill={colors[0]} fillOpacity={.28} strokeWidth={2}/>{tooltip}</RadarChart></ResponsiveContainer>;
    case 'radial': return <ResponsiveContainer width="100%" height="100%"><RadialBarChart innerRadius="25%" outerRadius="85%" data={parts} startAngle={90} endAngle={-270} barSize={13}><RadialBar dataKey="value" background={{ fill: '#3a2828' }} cornerRadius={8}/>{tooltip}</RadialBarChart></ResponsiveContainer>;
    default: return <ResponsiveContainer width="100%" height="100%"><ScatterChart>{grid}<XAxis type="number" dataKey="x" name="Effort" tickLine={false} axisLine={false} tick={{ fill: '#c6b6b3', fontSize: 11 }}/><YAxis type="number" dataKey="y" name="Impact" width={32} tickLine={false} axisLine={false} tick={{ fill: '#c6b6b3', fontSize: 11 }}/>{tooltip}<Scatter name="Projects" fill={colors[0]} data={values.map((value, i) => ({ x: 10 + i * 12 + (i % 2) * 6, y: value }))}/></ScatterChart></ResponsiveContainer>;
  }
}

export function DesignChartCarousel() {
  const [index, setIndex] = useState(0);
  const [variant, setVariant] = useState(0);
  const [direction, setDirection] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [openType, setOpenType] = useState<number | null>(null);
  const [menuLeft, setMenuLeft] = useState(0);
  const [manualVariation, setManualVariation] = useState(false);
  const start = useRef<{ x: number; y: number; id: number } | null>(null);
  const plot = useRef<HTMLDivElement>(null);
  const types = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const current = examples[index]!;
  const move = useCallback((amount: number) => { setDirection(amount); setManualVariation(false); setVariant(0); setIndex(previous => (previous + amount + examples.length) % examples.length); }, []);
  const positionMenu = useCallback(() => {
    const container = types.current;
    if (!container || openType === null) return;
    const tab = container.querySelector<HTMLElement>(`[data-chart-type="${openType}"]`);
    if (!tab) return;
    const bounds = container.getBoundingClientRect();
    const tabBounds = tab.getBoundingClientRect();
    setMenuLeft(Math.max(0, Math.min(tabBounds.left - bounds.left, bounds.width - Math.min(230, bounds.width))));
  }, [openType]);
  useLayoutEffect(() => {
    positionMenu();
    window.addEventListener('resize', positionMenu);
    return () => window.removeEventListener('resize', positionMenu);
  }, [positionMenu]);
  useEffect(() => {
    if (reduced || dragging || openType !== null || manualVariation) return;
    const timer = window.setInterval(() => setVariant(previous => (previous + 1) % current.titles.length), 4000);
    return () => window.clearInterval(timer);
  }, [index, reduced, dragging, openType, manualVariation, current.titles.length]);
  useEffect(() => {
    const node = plot.current;
    if (!node) return;
    let distance = 0;
    let moved = false;
    let idleTimer = 0;
    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      event.preventDefault();
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => { distance = 0; moved = false; }, 180);
      if (moved) return;
      distance += event.deltaX;
      if (Math.abs(distance) >= 40) { move(distance > 0 ? 1 : -1); moved = true; }
    };
    node.addEventListener('wheel', onWheel, { passive: false });
    return () => { node.removeEventListener('wheel', onWheel); window.clearTimeout(idleTimer); };
  }, [move]);
  const endSwipe = (event: PointerEvent<HTMLDivElement>) => {
    if (!start.current || start.current.id !== event.pointerId) return;
    const dx = event.clientX - start.current.x;
    const dy = event.clientY - start.current.y;
    start.current = null;
    setDragging(false);
    if (Math.abs(dx) >= 45 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
  };
  return <div className="design-chart-example" role="region" aria-label="Chart examples" aria-roledescription="carousel">
    <div className="design-chart-heading"><div className="design-chart-title"><p>{current.titles[variant]}</p><span>Example data</span></div>
      <div ref={types} className="design-chart-types" onMouseLeave={() => setOpenType(null)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenType(null); }}>
        <div className="design-chart-tabs" aria-label="Chart types" onScroll={positionMenu}>{examples.map((example, i) => <button type="button" key={example.type} data-chart-type={i} className="design-chart-tab" aria-current={i === index ? 'true' : undefined} aria-expanded={openType === i} aria-controls={openType === i ? 'design-chart-variations' : undefined} onMouseEnter={() => setOpenType(i)} onFocus={() => setOpenType(i)} onClick={() => { setDirection(i >= index ? 1 : -1); setIndex(i); setVariant(0); setManualVariation(false); }}>{typeLabel(example.type)}</button>)}</div>
        {openType !== null && <div id="design-chart-variations" className="design-chart-variations" style={{ left: menuLeft }} aria-label={`${examples[openType]!.type} variations`}>{examples[openType]!.titles.map((title, i) => <button type="button" key={title} aria-pressed={index === openType && variant === i} onClick={() => { setDirection(openType >= index ? 1 : -1); setIndex(openType); setVariant(i); setManualVariation(true); }}>{title}</button>)}</div>}
      </div>
    </div>
    <div ref={plot} className="design-chart-plot" data-dragging={dragging || undefined} tabIndex={0} aria-label={`${current.type} chart type ${index + 1} of ${examples.length}. Use left and right arrows for types, and up and down arrows for variations.`}
      onPointerDown={event => { if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return; start.current = { x: event.clientX, y: event.clientY, id: event.pointerId }; event.currentTarget.setPointerCapture(event.pointerId); setDragging(true); }}
      onPointerUp={endSwipe} onPointerCancel={() => { start.current = null; setDragging(false); }}
      onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); setManualVariation(true); setVariant(previous => (previous + (event.key === 'ArrowDown' ? 1 : -1) + current.titles.length) % current.titles.length); } }}>
      <AnimatePresence mode="wait" initial={false} custom={direction}><motion.div className="design-chart-slide" key={current.type} custom={direction} initial={reduced ? { opacity: 0 } : { opacity: 0, x: direction * 28 }} animate={{ opacity: 1, x: 0 }} exit={reduced ? { opacity: 0 } : { opacity: 0, x: direction * -28 }} transition={{ duration: reduced ? 0 : .2 }}><ChartPreview type={current.type} variant={variant}/></motion.div></AnimatePresence>
    </div>
    <p className="design-chart-hint">Swipe to explore chart types{manualVariation ? ' · Variation selected' : reduced ? ' · Use up and down arrows for variations' : ''}</p>
    <p className="design-chart-credit">Source: <a href={sourceFor(current.type).href} target="_blank" rel="noopener noreferrer">{sourceFor(current.type).name}<span className="design-sr"> (opens in a new tab)</span></a></p>
  </div>;
}
