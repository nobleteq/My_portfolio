import { Code, Database, Cpu, BookOpen, Bug, FileText } from 'lucide-react';

interface AboutProps {
  id: string;
}

const About = ({ id }: AboutProps) => {
  const interests = [
    {
      icon: Code,
      title: 'Problem-Solving',
      description: 'Breaking down complex problems into manageable solutions'
    },
    {
      icon: Database,
      title: 'Clean Architecture',
      description: 'Building maintainable and scalable software systems'
    },
    {
      icon: Cpu,
      title: 'Responsive Interfaces',
      description: 'Creating intuitive user experiences across devices'
    },
    {
      icon: BookOpen,
      title: 'API Integration',
      description: 'Connecting applications with external services and data'
    },
    {
      icon: Bug,
      title: 'Software Testing',
      description: 'Ensuring reliability through thorough testing practices'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Writing clear and comprehensive technical documentation'
    }
  ];

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-text">
              Building Useful, Maintainable Software
            </h3>
            <p className="text-textSecondary leading-relaxed">
              I'm passionate about creating software that solves real problems. My focus is on building
              practical applications across desktop, web, and mobile platforms using modern development
              tools and frameworks.
            </p>
            <p className="text-textSecondary leading-relaxed">
              I believe in writing clean, maintainable code and designing systems that are easy to
              understand and extend. Whether it's a desktop application with Tkinter, a web app with
              React and Django, or a mobile solution with Flutter, I approach each project with the same
              commitment to quality and user experience.
            </p>
            <p className="text-textSecondary leading-relaxed">
              Continuous learning is at the core of my development philosophy. I stay current with
              emerging technologies and best practices to deliver solutions that are not only functional
              but also aligned with industry standards.
            </p>
          </div>

          {/* Right - Interests Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="p-6 bg-surfaceLight border border-border rounded-lg hover:border-primary transition-colors"
              >
                <interest.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-text font-semibold mb-2">{interest.title}</h4>
                <p className="text-textSecondary text-sm">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
