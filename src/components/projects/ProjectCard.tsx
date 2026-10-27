import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';
import ProjectPreview from './ProjectPreview';

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  const hasGithubUrl = !project.githubUrl.includes('yourusername');
  const hasLiveDemoUrl = Boolean(project.liveDemoUrl && !project.liveDemoUrl.includes('yourusername'));

  return (
    <article className="project-card group">
      {/* Thumbnail */}
      <div className={`project-preview project-preview-${project.category.toLowerCase()} relative aspect-video overflow-hidden`}>
        <ProjectPreview project={project} imagePath={project.thumbnail} />
      </div>

      {/* Content */}
      <div className="project-card-content">
        {/* Category Badge */}
        <span className="project-category">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="project-title">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="project-summary">{project.summary}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="project-tech">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="project-tech project-tech-more">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="project-card-actions">
          <button
            onClick={onViewDetails}
            className="project-details"
          >
            Explore project <ArrowUpRight size={15} />
          </button>
          {(hasGithubUrl || hasLiveDemoUrl) && (
            <div className="flex items-center space-x-2">
              {hasGithubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon-link"
                  aria-label="View on GitHub"
                >
                  <Github size={18} />
                </a>
              )}
              {hasLiveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-icon-link"
                aria-label="View Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
