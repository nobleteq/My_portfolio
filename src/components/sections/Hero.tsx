import { ArrowDownRight, ArrowRight, Download, Github, Layers3, Sparkles } from 'lucide-react';
import { profile } from '../../data/profile';

interface HeroProps {
  id: string;
}

const Hero = ({ id }: HeroProps) => {
  const techBadges = ['Python', 'React', 'Flutter', 'TypeScript'];

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={id} className="hero-section px-4 sm:px-6 lg:px-8">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow"><span /> Software developer <i>/</i> Nigeria</p>
          <h1>Hi, I'm {profile.name.split(' ')[0]}.<br /><span>I build useful software.</span></h1>
          <p className="hero-intro">{profile.bio}</p>
          <div className="hero-stack" aria-label="Core technologies">
            {techBadges.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
          <div className="hero-actions">
            <button onClick={scrollToProjects} className="button button-primary">
              Explore my work <ArrowRight size={17} />
            </button>
            {profile.cvUrl && (
              <a href={profile.cvUrl} download className="button button-quiet">
                <Download size={16} /> Download CV
              </a>
            )}
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hero-github" aria-label="Visit GitHub profile">
              <Github size={19} />
            </a>
          </div>
          <a className="hero-scroll" href="#projects" onClick={(event) => { event.preventDefault(); scrollToProjects(); }}>
            <ArrowDownRight size={15} /> Scroll to selected work
          </a>
        </div>

        <div className="hero-art" aria-label="Preview of selected software projects">
          <div className="hero-art-topline">
            <span>SELECTED WORK</span>
            <span>01 — 04</span>
          </div>
          <div className="hero-project-window">
            <div className="hero-window-bar">
              <span className="hero-window-icon"><Layers3 size={16} /></span>
              <span>Personal finance manager</span>
              <span className="hero-window-status"><i /> DESKTOP APP</span>
            </div>
            <div className="hero-window-body">
              <div className="hero-window-caption">
                <span>OVERVIEW / THIS MONTH</span>
                <Sparkles size={16} />
              </div>
              <div className="hero-window-total">Your money, <em>in focus.</em></div>
              <div className="hero-window-chart" aria-hidden="true">
                {[24, 42, 34, 62, 47, 76, 52, 94, 68, 83, 58, 72].map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="hero-window-legend"><span><i /> Income</span><span><i /> Expenses</span><span>+ VIEW REPORT <ArrowRight size={12} /></span></div>
            </div>
            <div className="hero-window-foot">
              <span>PYTHON <b>·</b> TKINTER <b>·</b> SQLITE</span>
              <span>01 / 04</span>
            </div>
          </div>
          <div className="hero-art-note"><span>BUILT FOR EVERYDAY LIFE</span><span>FIG. 01</span></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
