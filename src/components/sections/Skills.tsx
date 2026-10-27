import { skills } from '../../data/skills';

interface SkillsProps {
  id: string;
}

const Skills = ({ id }: SkillsProps) => {
  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="p-6 bg-surfaceLight border border-border rounded-lg hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-semibold text-text mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm text-textSecondary bg-surface border border-border rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
