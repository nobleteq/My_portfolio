import { useState } from 'react';
import { ArrowUpRight, BarChart3, BookOpen, Boxes, Code2, Layers3 } from 'lucide-react';
import { Project } from '../../types';

type PreviewLayout = 'analytics' | 'board' | 'courses' | 'mobile' | 'reader' | 'api' | 'calendar' | 'school' | 'inventory';

interface PreviewScene {
  section: string;
  headline: string;
  metric: string;
  detail: string;
  rows: string[];
  bars: number[];
  layout: PreviewLayout;
}

const scenes: Record<string, PreviewScene> = {
  'tkinter-1': { section: 'MONEY / OVERVIEW', headline: 'A clearer view of your money', metric: 'Monthly overview', detail: 'Income & spending', rows: ['Income', 'Everyday spending', 'Savings goal'], bars: [35, 62, 48, 76, 53, 89, 66, 94], layout: 'analytics' },
  'tkinter-2': { section: 'STOCKROOM / OVERVIEW', headline: 'Inventory at a glance', metric: 'Stock overview', detail: 'Products & availability', rows: ['Available products', 'Low stock', 'Recent sales'], bars: [63, 48, 82, 56, 71, 45, 93, 67], layout: 'inventory' },
  'react-1': { section: 'CAREER / PIPELINE', headline: 'Your next move, organized', metric: 'Application board', detail: 'A simple view of your search', rows: ['Frontend developer', 'Product engineer', 'Software developer'], bars: [38, 58, 76, 50, 86, 66, 93, 72], layout: 'board' },
  'react-2': { section: 'LEARNING / OVERVIEW', headline: 'Progress that keeps you moving', metric: 'Continue learning', detail: 'Your courses in one place', rows: ['React fundamentals', 'Working with TypeScript', 'Design systems'], bars: [72, 44, 88, 59, 66, 37, 91, 61], layout: 'courses' },
  'flet-1': { section: 'TODAY / FOCUS', headline: 'Make room for focused work', metric: 'Today’s priorities', detail: 'Tasks & weekly rhythm', rows: ['Plan the week', 'Review project notes', 'Take a short break'], bars: [42, 71, 54, 84, 63, 93, 67, 78], layout: 'analytics' },
  'flet-2': { section: 'LEARNING / MY SUBJECTS', headline: 'Small steps, steady progress', metric: 'Learning dashboard', detail: 'Lessons & assessments', rows: ['Mathematics', 'General science', 'English language'], bars: [58, 78, 46, 85, 67, 93, 52, 74], layout: 'school' },
  'flutter-1': { section: 'WALLET / ACTIVITY', headline: 'Everyday spending, in focus', metric: 'This month', detail: 'A snapshot of activity', rows: ['Market groceries', 'Transport', 'Monthly subscription'], bars: [41, 66, 52, 84, 63, 93, 72, 57], layout: 'mobile' },
  'flutter-2': { section: 'LIBRARY / OFFLINE', headline: 'Learning that travels with you', metric: 'Continue reading', detail: 'Saved for offline access', rows: ['Getting started', 'Lesson notes', 'Quick knowledge check'], bars: [62, 82, 45, 75, 58, 91, 69, 84], layout: 'reader' },
  'flask-1': { section: 'DEVELOPER TOOLS / API', headline: 'A clean view of every request', metric: 'Task API', detail: 'Routes & responses', rows: ['GET  /api/tasks', 'POST /api/tasks', 'PATCH /api/tasks/:id'], bars: [45, 65, 81, 52, 73, 91, 62, 84], layout: 'api' },
  'flask-2': { section: 'SCHEDULE / APPOINTMENTS', headline: 'A calmer way to book time', metric: 'Weekly schedule', detail: 'Bookings & availability', rows: ['09:00  Consultation', '11:30  Follow-up', '14:00  Available'], bars: [52, 74, 42, 87, 63, 94, 70, 81], layout: 'calendar' },
  'django-1': { section: 'CAMPUS / DASHBOARD', headline: 'School operations, connected', metric: 'School overview', detail: 'Students, classes & attendance', rows: ['Class 10A', 'Class 11B', 'Class 12C'], bars: [72, 55, 87, 64, 92, 48, 77, 60], layout: 'school' },
  'django-2': { section: 'DRIVE / LESSONS', headline: 'From first lesson to road-ready', metric: 'Lesson planner', detail: 'Courses & instructor bookings', rows: ['Driving fundamentals', 'Road awareness', 'Book a lesson'], bars: [48, 73, 62, 91, 55, 82, 68, 96], layout: 'calendar' },
};

interface ProjectPreviewProps {
  project: Project;
  imagePath?: string;
  detailed?: boolean;
}

const ProjectPreview = ({ project, imagePath, detailed = false }: ProjectPreviewProps) => {
  const [imageFailed, setImageFailed] = useState(false);
  const scene = scenes[project.id];
  const Mark = scene.layout === 'api' ? Code2 : scene.layout === 'courses' || scene.layout === 'reader' ? BookOpen : scene.layout === 'inventory' ? Boxes : scene.layout === 'mobile' ? BarChart3 : Layers3;

  if (imagePath && !imageFailed) {
    return (
      <img
        src={imagePath}
        alt={`${project.title} screenshot`}
        className={detailed ? 'project-real-screenshot' : 'project-thumbnail'}
        onError={() => setImageFailed(true)}
      />
    );
  }

  return (
    <div className={`project-artwork project-artwork-${scene.layout}${detailed ? ' project-artwork-detailed' : ''}`} role="img" aria-label={`${project.title} illustrative interface preview`}>
      <div className="artwork-toolbar">
        <span className="artwork-mark"><Mark size={14} /></span>
        <span className="artwork-app-name">{project.title}</span>
        <span className="artwork-window-dots" aria-hidden="true">•••</span>
      </div>
      <div className="artwork-body">
        <div className="artwork-sidebar" aria-hidden="true">
          <span className="artwork-side-active"><Mark size={13} /></span>
          <span /><span /><span />
        </div>
        <div className="artwork-main">
          <div className="artwork-heading">
            <div>
              <span className="artwork-section">{scene.section}</span>
              <h4>{scene.headline}</h4>
            </div>
            <span className="artwork-arrow"><ArrowUpRight size={14} /></span>
          </div>
          <span className="artwork-concept">ILLUSTRATIVE PREVIEW</span>
          <ArtworkContent scene={scene} />
        </div>
      </div>
    </div>
  );
};

const ArtworkContent = ({ scene }: { scene: PreviewScene }) => {
  if (scene.layout === 'board') {
    return (
      <div className="artwork-board">
        {['Applied', 'In review', 'Next step'].map((column, index) => (
          <div className="artwork-board-column" key={column}>
            <span>{column}<i>{index + 2}</i></span>
            {scene.rows.slice(index, index + 2).map((row, rowIndex) => (
              <div className="artwork-board-card" key={row}>
                <b>{row}</b>
                <small>{rowIndex === 0 ? 'Full-time' : 'Recently updated'}</small>
                <span className={`artwork-board-accent artwork-accent-${index}`} />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (scene.layout === 'api') {
    return (
      <div className="artwork-api">
        <div className="artwork-api-tabs"><span>routes.py</span><span>200 OK</span></div>
        {scene.rows.map((row, index) => (
          <div className="artwork-code-row" key={row}>
            <i>{String(index + 1).padStart(2, '0')}</i><b>{row.split('  ')[0]}</b><span>{row.split('  ')[1]}</span>
          </div>
        ))}
        <div className="artwork-response"><span>response</span><b>{'{'} "status": "success" {'}'}</b></div>
      </div>
    );
  }

  if (scene.layout === 'calendar') {
    return (
      <div className="artwork-calendar">
        <div className="artwork-calendar-days">{['MON', 'TUE', 'WED', 'THU', 'FRI'].map((day) => <span key={day}>{day}</span>)}</div>
        {scene.rows.map((row, index) => (
          <div className="artwork-calendar-row" key={row}>
            <span>{['09:00', '11:30', '14:00'][index]}</span>
            <i className={`artwork-calendar-event artwork-calendar-event-${index}`} />
            <b>{row.slice(6)}</b>
          </div>
        ))}
      </div>
    );
  }

  if (scene.layout === 'mobile' || scene.layout === 'reader') {
    return (
      <div className="artwork-mobile-layout">
        <div className="artwork-mobile-card">
          <span>{scene.detail}</span>
          <b>{scene.metric}</b>
          <div className="artwork-mobile-bars" aria-hidden="true">
            {scene.bars.slice(0, 7).map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
          </div>
        </div>
        <div className="artwork-mobile-list">
          {scene.rows.map((row, index) => (
            <div key={row}><i className={`artwork-list-icon artwork-list-icon-${index}`} /><span>{row}</span><b>{scene.layout === 'reader' ? `${(index + 1) * 25}%` : '›'}</b></div>
          ))}
        </div>
      </div>
    );
  }

  if (scene.layout === 'courses') {
    return (
      <div className="artwork-course-list">
        {scene.rows.map((row, index) => (
          <div className="artwork-course-row" key={row}>
            <span className={`artwork-course-icon artwork-course-icon-${index}`}><BookOpen size={12} /></span>
            <div><b>{row}</b><span className="artwork-progress"><i style={{ width: `${scene.bars[index] + 8}%` }} /></span></div>
            <small>{scene.bars[index]}%</small>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`artwork-dashboard artwork-dashboard-${scene.layout}`}>
      <div className="artwork-chart" aria-hidden="true">
        {scene.bars.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
      </div>
      <div className="artwork-data-card">
        <span>{scene.detail}</span>
        <b>{scene.metric}</b>
        {scene.rows.map((row, index) => (
          <div className="artwork-data-row" key={row}>
            <i className={`artwork-row-dot artwork-row-dot-${index}`} />
            <span>{row}</span>
            <b>{scene.layout === 'inventory' ? ['Ready', 'Low', 'New'][index] : ['On track', 'Updated', 'View'][index]}</b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPreview;
