'use client';

import { useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const skills: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend', color: 'bg-blue-500' },
  { name: 'Next.js', level: 90, category: 'Frontend', color: 'bg-gray-800' },
  { name: 'TypeScript', level: 88, category: 'Language', color: 'bg-blue-600' },
  { name: 'Node.js', level: 85, category: 'Backend', color: 'bg-green-500' },
  { name: 'PostgreSQL', level: 80, category: 'Database', color: 'bg-blue-700' },
  { name: 'Prisma', level: 85, category: 'ORM', color: 'bg-purple-500' },
  { name: 'OpenAI API', level: 75, category: 'AI/ML', color: 'bg-emerald-500' },
  { name: 'Tailwind CSS', level: 92, category: 'Styling', color: 'bg-cyan-500' },
  { name: 'Python', level: 78, category: 'Language', color: 'bg-yellow-500' },
  { name: 'Docker', level: 70, category: 'DevOps', color: 'bg-blue-400' },
];

export default function SkillVisualization() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [animatedSkills, setAnimatedSkills] = useState<Skill[]>([]);

  const categories = ['All', ...Array.from(new Set(skills.map(skill => skill.category)))];

  useEffect(() => {
    // Animate skills on component mount
    const timer = setTimeout(() => {
      setAnimatedSkills(skills);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredSkills = selectedCategory === 'All' 
    ? animatedSkills 
    : animatedSkills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          🚀 Technical Skills
        </h3>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="group relative overflow-hidden rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-300"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: 'fadeInUp 0.6s ease-out forwards'
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-800">{skill.name}</h4>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            
            <div className="mb-2">
              <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                {skill.category}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
                style={{
                  width: `${skill.level}%`,
                  transform: 'translateX(-100%)',
                  animation: `slideIn 1s ease-out ${index * 100 + 500}ms forwards`
                }}
              />
              
              {/* Shimmer Effect */}
              <div
                className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                style={{
                  animation: `shimmer 2s infinite ${index * 200}ms`
                }}
              />
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Interactive Stats */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{skills.length}</div>
          <div className="text-sm text-blue-800">Total Skills</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
          <div className="text-2xl font-bold text-green-600">
            {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
          </div>
          <div className="text-sm text-green-800">Avg Proficiency</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">
            {categories.length - 1}
          </div>
          <div className="text-sm text-purple-800">Categories</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
          <div className="text-2xl font-bold text-orange-600">
            {skills.filter(skill => skill.level >= 85).length}
          </div>
          <div className="text-sm text-orange-800">Expert Level</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
} 