import '@fontsource-variable/manrope';
import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useReducedMotion } from 'motion/react';
import { StreamingText } from '@aicss/react';
import { ThinkingOrb } from 'thinking-orbs';
import { SceneComponents } from './openly-scene-components';
import { SocialIcons } from './SocialIcons';
import { DesignMenu } from './DesignMenu';
import { sitePaths } from './site-paths';
import RibbonGlow from './vendor/originkit/ui/ribbon-glow';
import CursorImageTrail from './vendor/originkit/ui/cursor-image-trail';
import { BotAvatar } from 'bot-avatars';
import { VoiceRing } from 'voice-ring';
import { Sparkline } from './vendor/arc/sparkline/sparkline';
import { DonutChart } from './vendor/arc/donut-chart/donut-chart';
import { DesignChartCarousel } from './design-chart-carousel';
import { GlowCloud } from './vendor/affectui/illustrations/glow-cloud';
import { DropdownMenu } from './vendor/arc/dropdown-menu/dropdown-menu';
import { RiGithubFill } from '@remixicon/react';
import './styles/arc-foundation.css';
import './styles/design-landing.css';

const trailExamples = [
  <ThinkingOrb state="weaving" theme="dark" color="#d4e8da" size={64}/>,
  <BotAvatar type="droid" theme="dark" color="#d4e8da" state="working" size={60}/>,
  <VoiceRing state="speaking" theme="dark" color="#d4e8da" size={74} level={.4}/>,
  <Sparkline data={[12, 18, 15, 25, 21, 29, 33]} label="Activity" value="33" width={120} height={38} interactive={false}/>,
  <div className="scene-donut"><DonutChart label="Example chart" legend={false} size={140} thickness={20} data={[{key:'a',label:'One',value:48,color:'#56544f'},{key:'b',label:'Two',value:32,color:'#99968f'},{key:'c',label:'Three',value:20,color:'#d1cec6'}]}/></div>,
  <GlowCloud background={false} followPointer={false} className="trail-cloud"/>,
];

function mixColor(from: string, to: string, progress: number) {
  const channels = [1, 3, 5].map(index => {
    const start = parseInt(from.slice(index, index + 2), 16);
    const end = parseInt(to.slice(index, index + 2), 16);
    return Math.round(start + (end - start) * progress).toString(16).padStart(2, '0');
  });
  return `#${channels.join('')}`;
}

function DesignIntro() {
  const [visible, setVisible] = useState(() => !matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [leaving, setLeaving] = useState(false);
  useEffect(() => {
    if (!visible) return;
    const exit = window.setTimeout(() => setLeaving(true), 2300);
    const finish = window.setTimeout(() => setVisible(false), 2520);
    return () => { clearTimeout(exit); clearTimeout(finish); };
  }, [visible]);
  if (!visible) return null;
  const text = 'Making space for better ideas.';
  return <div className={`design-intro${leaving ? ' is-leaving' : ''}`}>
    <span aria-hidden="true"><ThinkingOrb state="weaving" theme="dark" color="#e8e6df" size={64}/></span>
    <span aria-hidden="true"><StreamingText text={text}/></span>
    <span className="design-sr" role="status">{text}</span>
  </div>;
}

function DesignLanding() {
  const hero = useRef<HTMLElement>(null);
  const showcase = useRef<HTMLElement>(null);
  const thirdSection = useRef<HTMLElement>(null);
  const reduced = !!useReducedMotion();
  const [colorProgress, setColorProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const secondTop = showcase.current?.offsetTop ?? hero.current?.offsetHeight ?? window.innerHeight;
      const thirdTop = thirdSection.current?.offsetTop ?? secondTop + window.innerHeight;
      const progress = window.scrollY <= secondTop
        ? Math.min(1, Math.max(0, window.scrollY / Math.max(1, secondTop)))
        : 1 + Math.min(1, Math.max(0, (window.scrollY - secondTop) / Math.max(1, thirdTop - secondTop)));
      setColorProgress(reduced ? Math.round(progress) : progress);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
    return () => { window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); cancelAnimationFrame(frame); };
  }, [reduced]);
  return <>
    <DesignIntro/>
    <div className="design-ribbon" aria-hidden="true"><RibbonGlow background="#111111" color1={colorProgress <= 1 ? mixColor('#2fd3f2', '#43dc8b', colorProgress) : mixColor('#43dc8b', '#f45151', colorProgress - 1)} color2={colorProgress <= 1 ? mixColor('#7b61ff', '#13834f', colorProgress) : mixColor('#13834f', '#9b1d32', colorProgress - 1)} speed={reduced ? 0 : 50} hover={reduced ? 0 : 100} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', minWidth: 0, minHeight: 0 }}/><div className="design-dark-scrim"/></div>
    <header className="design-header">
      <nav aria-label="Main navigation">
        <a className="design-logo" href={sitePaths.home} aria-label="Openly home">Openly</a>
        <div className="design-links">
        <DropdownMenu openOnHover label="Agents" align="center" triggerClassName="design-agents-trigger" menuClassName="design-agents-menu" items={[
          { label: 'Computer-use', onSelect: () => { window.location.href = sitePaths.computerUse; } },
        ]}/>
        <DesignMenu current section="overview" triggerClassName="design-main-trigger" menuClassName="design-main-menu"/>
        </div>
        <SocialIcons className="design-socials"/>
      </nav>
    </header>
    <main>
      <section ref={hero} className="design-hero" aria-labelledby="design-title">
        <div className="design-hero-copy"><h1 id="design-title">Design for everyone.</h1><p>Skills to define your design language and build a website that brings it to life.<br/>Completely free, no gimmicks.</p><a className="design-github-link" href="https://github.com/openlybuilt/design" target="_blank" rel="noopener noreferrer"><RiGithubFill size={20} aria-hidden="true"/>View on GitHub <span className="design-sr">(opens in a new tab)</span></a></div>
      </section>
      <section ref={showcase} className="design-showcase" aria-label="Design components">
        <SceneComponents dark trail={!reduced && <div className="design-trail-layer" aria-hidden="true"><CursorImageTrail elements={trailExamples} showLabel={false} imageWidth={160} imageHeight={130} frequency={25} visibleFor={2} avoidOverlap style={{ width: '100%', height: '100%' }}/></div>}/>
      </section>
      <section ref={thirdSection} className="design-third" aria-labelledby="design-charts-title">
        <div className="design-charts-content">
          <div className="design-charts-copy"><h2 id="design-charts-title">Good data deserves great design.</h2><p>Bring your data to life with charts that make every insight clear and beautiful.</p></div>
          <DesignChartCarousel/>
        </div>
      </section>
      <section className="design-start" aria-labelledby="design-start-title">
        <div className="design-start-content">
          <h2 id="design-start-title">Start building today.</h2>
          <p>Explore the skills and bring your website to life.</p>
          <div className="design-start-actions">
            <a href="https://github.com/openlybuilt/design" target="_blank" rel="noopener noreferrer"><RiGithubFill size={19} aria-hidden="true"/>View the skills <span className="design-sr">(opens in a new tab)</span></a>
            <button type="button" disabled>Video tutorial <span>Coming soon</span></button>
          </div>
        </div>
      </section>
    </main>
  </>;
}

createRoot(document.getElementById('design-root')!).render(<DesignLanding/>);
