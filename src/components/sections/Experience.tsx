import { Download, ExternalLink, FileText } from 'lucide-react';
import { profile } from '../../data/profile';

interface ExperienceProps {
  id: string;
}

const Experience = ({ id }: ExperienceProps) => {
  if (!profile.cvUrl) return null;

  return (
    <section id={id} className="cv-section px-4 sm:px-6 lg:px-8">
      <div className="cv-inner">
        <div className="cv-section-heading">
          <p className="section-kicker">A CLOSER LOOK</p>
          <h2>Experience & education</h2>
          <p>The full story, straight from my CV.</p>
        </div>
        <div className="cv-layout">
          <div className="cv-copy">
            <span className="cv-label"><FileText size={15} /> PERSONAL CV / PDF</span>
            <h3>Good work starts with understanding the details.</h3>
            <p>Explore my experience, education, and skills in the original two-page CV, or download a copy for later.</p>
            <div className="cv-actions">
              <a href={profile.cvUrl} download className="button button-primary"><Download size={16} /> Download CV</a>
              <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="cv-open-link">Open full document <ExternalLink size={14} /></a>
            </div>
            <span className="cv-file-note">Emmanuel_Nneji_CV.pdf <i> / </i> 2 pages</span>
          </div>
          <div className="cv-frame">
            <iframe
              src={`${profile.cvUrl}#view=FitH&toolbar=0&navpanes=0`}
              title={`${profile.name} CV`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
