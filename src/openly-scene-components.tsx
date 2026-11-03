import { Orb } from '@aicss/react';
import { useEffect, useState, type ReactNode } from 'react';
import { useReducedMotion } from 'motion/react';
import { ThinkingOrb } from 'thinking-orbs';
import { VoiceRing } from 'voice-ring';
import { BotAvatar } from 'bot-avatars';
import { Sparkline } from './vendor/arc/sparkline/sparkline';
import { DonutChart } from './vendor/arc/donut-chart/donut-chart';
import { Gauge } from './vendor/arc/gauge/gauge';
import { AnimatedCounter } from './vendor/arc/animated-counter/animated-counter';
import { TextShimmer } from './vendor/arc/text-shimmer/text-shimmer';
import { sitePaths } from './site-paths';

const data = [12, 18, 15, 25, 21, 29, 33];
const donut = [
  { key: 'one', label: 'One', value: 48, color: '#56544f' },
  { key: 'two', label: 'Two', value: 32, color: '#99968f' },
  { key: 'three', label: 'Three', value: 20, color: '#d1cec6' },
];

export function SceneComponents({ trail, dark = false }: { trail?: ReactNode; dark?: boolean }) {
  const reduced = !!useReducedMotion();
  const [cursorMoving, setCursorMoving] = useState(false);
  useEffect(() => {
    if (!cursorMoving) return;
    let timer = 0;
    const resetTimer = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setCursorMoving(false), 1500);
    };
    resetTimer();
    window.addEventListener('pointermove', resetTimer);
    return () => { window.removeEventListener('pointermove', resetTimer); window.clearTimeout(timer); };
  }, [cursorMoving]);
  const theme = dark ? 'dark' : 'light';
  const color = dark ? '#d4e8da' : '#68645c';
  const avatarColor = dark ? '#d4e8da' : '#bab6ae';
  const examples = [
    <ThinkingOrb state="weaving" theme={theme} color={color} size={64} paused={reduced}/>,
    <ThinkingOrb state="shaping" theme={theme} color={color} size={64} paused={reduced}/>,
    <VoiceRing state="speaking" theme={theme} size={74} level={0.4} color={color} paused={reduced}/>,
    <BotAvatar type="droid" size={60} color={avatarColor} theme={theme} state="working" paused={reduced}/>,
    <BotAvatar type="star" size={60} color={avatarColor} theme={theme} state="working" paused={reduced}/>,
    <Sparkline data={data} label="Activity" value="33" width={120} height={38} interactive={false}/>,
    <div className="scene-donut"><DonutChart data={donut} label="Example chart" size={140} thickness={20} legend={false}/></div>,
    <div className="scene-gauge"><Gauge value={72} label="Progress"/></div>,
    <AnimatedCounter value={128} label="Ideas" animateOnView/>,
    <TextShimmer>Thinking</TextShimmer>,
    <Orb variant="C3" size={48}/>,
    <Orb variant="M3" size={48}/>,
  ];
  const [order] = useState(() => {
    const shuffled = examples.map((_, index) => index);
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  });
  return <div className="component-scene">
    <div className="scene-copy"><h2>Make something meaningful.</h2><p>Explore the building blocks for ideas worth sharing.</p><a className="scene-gallery-link" href={sitePaths.components}>Explore components <span aria-hidden="true">↗</span></a>{dark && <p className="scene-credit">These components come from independent creators and open-source projects. Openly takes no credit for their work. Find their creators and sources in the <a href={sitePaths.components}>components gallery</a>.</p>}</div>
    <div className="scene-art" data-cursor-moving={cursorMoving || undefined} onPointerMove={() => { if (trail) setCursorMoving(true); }}>
      {trail}
      <div className="scene-examples" aria-hidden="true" inert>{order.map((itemIndex,index)=><div className={`scene-example scene-example-${index}`} data-scene-example key={itemIndex}>{examples[itemIndex]}</div>)}</div>
    </div>
  </div>;
}
