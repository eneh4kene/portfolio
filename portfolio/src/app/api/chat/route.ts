import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { prisma } from '@/lib/prisma';
import { v4 as uuidv4 } from 'uuid';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message, visitorId } = await request.json();

    // Fetch resume and project data from the database
    const resumeData = await prisma.resume.findMany();
    const projectData = await prisma.project.findMany();

    // Create context for the AI
    const context = `
      You are an AI assistant representing a full-stack developer. You have access to the following information:

      RESUME DATA:
      ${resumeData.map((job: any) => `
        Job Title: ${job.jobTitle}
        Company: ${job.company}
        Duration: ${job.startDate.toDateString()} - ${job.endDate ? job.endDate.toDateString() : 'Present'}
        Responsibilities: ${job.bullets.join(', ')}
      `).join('\n')}

      PROJECT DATA:
      ${projectData.map((project: any) => `
        Project: ${project.title}
        Description: ${project.description}
        Technologies: ${project.technologies.join(', ')}
        GitHub: ${project.githubLink || 'N/A'}
        Live Demo: ${project.liveLink || 'N/A'}
      `).join('\n')}

      Please answer questions about this person's experience, skills, and projects in a conversational and engaging manner. Be helpful and provide specific details when asked.
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: context },
        { role: "user", content: message }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

    // Store the interaction in the database
    await prisma.visitorInteraction.create({
      data: {
        visitorId: visitorId || uuidv4(),
        query: message,
        response: response,
      },
    });

    return NextResponse.json({ response, visitorId });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
} 