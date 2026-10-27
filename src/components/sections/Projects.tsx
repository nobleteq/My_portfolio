import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { projects } from '../../data/projects';
import { Project, ProjectCategory } from '../../types';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';

interface ProjectsProps {
  id: string;
}

const Projects = ({ id }: ProjectsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: (ProjectCategory | 'All')[] = [
    'All',
    'Tkinter',
    'React',
    'Flet',
    'Flutter',
    'Flask',
    'Django'
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <p className="section-kicker">SELECTED WORK</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">Projects in practice</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Practical software across desktop, web, and mobile, built with thoughtful tools and clear purpose.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects by title, technology, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-surfaceLight border border-border rounded-lg text-text placeholder-textSecondary focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-background'
                    : 'bg-surfaceLight text-textSecondary hover:border-primary border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-textSecondary">No projects found matching your criteria.</p>
          </div>
        )}

        {/* Project Count */}
        {filteredProjects.length > 0 && (
          <div className="mt-8 text-center text-textSecondary text-sm">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
