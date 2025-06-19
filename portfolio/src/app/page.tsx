import AIChat from '@/components/AIChat';
import SkillVisualization from '@/components/SkillVisualization';
import ProjectShowcase from '@/components/ProjectShowcase';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">
              Full-Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Building innovative web applications with cutting-edge technologies. 
              Specializing in AI integration, scalable architectures, and exceptional user experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                🚀 Next.js Expert
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                🤖 AI Integration
              </span>
              <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                🎯 OpenAI Focused
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Your AI Assistant
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chat with an AI version of me! Ask about my experience, projects, skills, or anything else you'd like to know.
              This AI is powered by OpenAI's API and has access to my complete professional background.
            </p>
          </div>
          <AIChat />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Interactive visualization of my technical skills across different categories.
              Filter by technology type to explore specific areas of expertise.
            </p>
          </div>
          <SkillVisualization />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Project Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore my featured projects with dynamic filtering and AI-powered recommendations.
              Each project showcases different aspects of full-stack development.
            </p>
          </div>
          <ProjectShowcase />
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why This Portfolio Stands Out
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-12">
              This isn't just a portfolio—it's a demonstration of cutting-edge web development capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Interactions</h3>
              <p className="opacity-90">
                Real-time AI conversations using OpenAI's API, with context from a PostgreSQL database via Prisma ORM.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Dynamic Data Visualization</h3>
              <p className="opacity-90">
                Interactive skill charts and project filtering with smooth animations and real-time updates.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Architecture</h3>
              <p className="opacity-90">
                Full-stack application with Next.js, TypeScript, Prisma, and PostgreSQL—production-ready and scalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can leverage cutting-edge technologies to solve complex problems.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                📧 Email
              </a>
              <a href="https://linkedin.com/in/yourprofile" className="text-blue-400 hover:text-blue-300 transition-colors">
                💼 LinkedIn
              </a>
              <a href="https://github.com/yourusername" className="text-blue-400 hover:text-blue-300 transition-colors">
                🐙 GitHub
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Your Name. Built with Next.js, TypeScript, Prisma, PostgreSQL, and OpenAI API.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
