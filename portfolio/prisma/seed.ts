import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Resume Data
  await prisma.resume.createMany({
    data: [
      {
        jobTitle: 'Full-Stack Developer',
        company: 'Tech Innovators Inc.',
        startDate: new Date('2020-01-01'),
        endDate: new Date('2022-12-31'),
        bullets: [
          'Developed scalable web applications using React and Node.js',
          'Implemented RESTful APIs with Express and MongoDB',
          'Led a team of 5 developers in agile sprints'
        ]
      },
      {
        jobTitle: 'Software Engineer Intern',
        company: 'AI Solutions Ltd.',
        startDate: new Date('2019-06-01'),
        endDate: new Date('2019-12-31'),
        bullets: [
          'Assisted in building AI models for natural language processing',
          'Contributed to open-source projects using Python and TensorFlow'
        ]
      }
    ]
  });

  // Seed Project Data
  await prisma.project.createMany({
    data: [
      {
        title: 'AI Chatbot Platform',
        description: 'A scalable chatbot platform using OpenAI API for natural language understanding.',
        technologies: ['Next.js', 'OpenAI API', 'Prisma', 'Postgres'],
        githubLink: 'https://github.com/yourusername/chatbot-platform',
        liveLink: 'https://chatbot-platform.vercel.app'
      },
      {
        title: 'E-Commerce Dashboard',
        description: 'A full-stack e-commerce admin dashboard with real-time analytics.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
        githubLink: 'https://github.com/yourusername/ecommerce-dashboard',
        liveLink: 'https://ecommerce-dashboard.vercel.app'
      }
    ]
  });

  console.log('Database has been seeded.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 