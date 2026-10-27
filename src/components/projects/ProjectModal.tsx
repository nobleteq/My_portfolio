import { X, ExternalLink, Github, Layers, AlertCircle } from 'lucide-react';
import { Project } from '../../types';
import ProjectPreview from './ProjectPreview';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const hasGithubUrl = !project.githubUrl.includes('yourusername');
  const hasLiveDemoUrl = Boolean(project.liveDemoUrl && !project.liveDemoUrl.includes('yourusername'));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="bg-surfaceLight border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-surfaceLight border-b border-border p-6 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <span className="px-3 py-1 text-xs font-medium text-primary bg-surface border border-border rounded-full">
                {project.category}
              </span>
            </div>
            <h2 id="project-modal-title" className="text-2xl font-bold text-text">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-textSecondary hover:text-primary transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Overview */}
          <div>
            <h3 className="text-lg font-semibold text-text mb-3">Overview</h3>
            <p className="text-textSecondary leading-relaxed">{project.description}</p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-surface border border-border rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <AlertCircle className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-text">Problem</h4>
              </div>
              <p className="text-sm text-textSecondary">{project.problem}</p>
            </div>
            <div className="p-4 bg-surface border border-border rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Layers className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-text">Solution</h4>
              </div>
              <p className="text-sm text-textSecondary">{project.solution}</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-text mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-textSecondary">
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack */}
          <div>
            <h3 className="text-lg font-semibold text-text mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-textSecondary bg-surface border border-border rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div>
            <h3 className="text-lg font-semibold text-text mb-3">Architecture & Implementation</h3>
            <p className="text-sm text-textSecondary leading-relaxed">{project.architecture}</p>
          </div>

          {/* Challenges */}
          <div>
            <h3 className="text-lg font-semibold text-text mb-3">Challenges & Lessons Learned</h3>
            <p className="text-sm text-textSecondary leading-relaxed">{project.challenges}</p>
          </div>

          {/* Screenshots */}
          {project.screenshots.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-text mb-3">Project screens</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <div className="project-detail-image" key={screenshot}>
                    <ProjectPreview
                    key={index}
                    project={project}
                    imagePath={screenshot}
                    detailed
                    />
                  </div>
                ))}
              </div>
              <p className="project-preview-note">Illustrative interface previews are shown until you add real project screenshots.</p>
            </div>
          )}

          {/* Links */}
          {(hasGithubUrl || hasLiveDemoUrl) && (
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
              {hasGithubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 text-sm font-medium text-text bg-surface border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <Github size={18} />
                  <span>View on GitHub</span>
                </a>
              )}
              {hasLiveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 text-sm font-medium text-background bg-primary rounded-lg hover:bg-primaryHover transition-colors"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
