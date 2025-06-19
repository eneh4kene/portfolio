# 🚀 AI-Powered Portfolio Website

An innovative portfolio website built for full-stack developers targeting roles at OpenAI and other cutting-edge tech companies. This project demonstrates advanced web development skills through AI integration, dynamic data visualization, and modern architecture.

## ✨ Key Features

### 🤖 AI-Powered Interactive Resume
- **Real-time AI Chat**: Visitors can chat with an AI version of "you" powered by OpenAI's API
- **Database Integration**: AI responses are generated using data stored in PostgreSQL via Prisma
- **Conversation History**: All interactions are stored and can be used for analytics
- **Personalized Experience**: Tailored responses based on visitor queries and interests

### 📊 Dynamic Skill Visualization
- **Interactive Charts**: Animated skill bars with filtering by technology category
- **Real-time Updates**: Skills data is dynamically fetched and displayed
- **Responsive Design**: Optimized for all device sizes with smooth animations
- **Category Filtering**: Filter skills by Frontend, Backend, Database, AI/ML, etc.

### 💼 Intelligent Project Showcase
- **AI Recommendations**: Projects are recommended based on visitor interests
- **Technology Filtering**: Filter projects by specific technologies
- **Live Demos**: Direct links to GitHub repositories and live deployments
- **Dynamic Content**: Project data is fetched from the database in real-time

### 🏗️ Enterprise Architecture
- **Next.js 14**: Latest features including App Router and Server Components
- **TypeScript**: Full type safety throughout the application
- **Prisma ORM**: Type-safe database queries and migrations
- **PostgreSQL**: Robust relational database for data persistence
- **Tailwind CSS**: Modern, responsive styling with custom animations

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL (via Prisma Dev Server)
- **AI Integration**: OpenAI API (GPT-3.5-turbo)
- **Deployment**: Vercel (recommended)
- **Development**: ESLint, Prettier, TypeScript

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- OpenAI API key (get from https://platform.openai.com/api-keys)
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio/portfolio  # Note: Navigate to the inner portfolio directory
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the project root with the following **exact format** (no line breaks):
   ```env
   DATABASE_URL="postgres://postgres:postgres@localhost:51214/template1?sslmode=disable&connection_limit=1&connect_timeout=0&max_idle_connection_lifetime=0&pool_timeout=0&single_use_connections=true&socket_timeout=0"
   OPENAI_API_KEY="your_openai_api_key_here"
   ```
   
   ⚠️ **Important**: Make sure both values are on single lines with no breaks and wrapped in quotes.

4. **Start the Prisma database server**
   ```bash
   npx prisma dev
   ```
   Keep this running in a separate terminal. You should see:
   ```
   ✔ Great Success! 😉👍
   Your prisma dev server default is ready and listening on ports 51213-51215.
   ```

5. **Set up the database schema**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

6. **Seed the database with sample data**
   ```bash
   npx prisma db seed
   ```

7. **Start the development server**
   ```bash
   npm run dev
   ```

8. **Open your browser**
   Navigate to `http://localhost:3000` (or `http://localhost:3001` if port 3000 is busy)

## 📁 Project Structure

```
portfolio/
├── portfolio/                         # Main project directory
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/
│   │   │   │   ├── chat/route.ts      # AI chat endpoint
│   │   │   │   ├── projects/route.ts  # Projects API
│   │   │   │   └── test/route.ts      # API test endpoint
│   │   │   ├── globals.css            # Global styles
│   │   │   ├── layout.tsx             # Root layout
│   │   │   └── page.tsx               # Main portfolio page
│   │   ├── components/
│   │   │   ├── AIChat.tsx             # AI chat interface
│   │   │   ├── SkillVisualization.tsx # Interactive skills chart
│   │   │   └── ProjectShowcase.tsx    # Dynamic project display
│   │   ├── lib/
│   │   │   └── prisma.ts              # Prisma client setup
│   │   └── generated/
│   │       └── prisma/                # Generated Prisma client
│   ├── prisma/
│   │   ├── schema.prisma              # Database schema
│   │   ├── seed.js                    # Database seeding script
│   │   └── seed.ts                    # TypeScript seed script
│   ├── .env                           # Environment variables
│   ├── package.json                   # Dependencies and scripts
│   └── README.md                      # This file
└── README.md                          # Outer README
```

## 🎯 Why This Portfolio Stands Out

### For OpenAI Roles
- **Direct API Integration**: Demonstrates practical experience with OpenAI's API
- **AI-First Approach**: Shows understanding of how AI can enhance user experiences
- **Conversational Interfaces**: Expertise in building chat-based applications
- **Data-Driven AI**: Integration of AI with structured data sources

### Technical Excellence
- **Modern Architecture**: Uses the latest Next.js 14 features and best practices
- **Type Safety**: Full TypeScript implementation with proper type definitions
- **Database Design**: Well-structured relational database with proper indexing
- **Performance**: Optimized for speed with lazy loading and efficient queries
- **Scalability**: Architecture designed to handle growth and feature additions

### Innovation Factors
- **Unique Concept**: AI-powered portfolio is rare and memorable
- **Interactive Elements**: Engaging user experience with dynamic content
- **Real-time Features**: Live chat and dynamic data updates
- **Professional Quality**: Production-ready code with proper error handling

## 🔧 Customization

### Updating Your Information
1. **Resume Data**: Edit the seed script in `prisma/seed.js`
2. **Skills**: Update the skills array in `src/components/SkillVisualization.tsx`
3. **Projects**: Add your projects to the database via the seed script
4. **Personal Info**: Update contact information in `src/app/page.tsx`

### AI Personality
Customize the AI's personality and knowledge by modifying the system prompt in `src/app/api/chat/route.ts`.

### Styling
The project uses Tailwind CSS. Customize colors, fonts, and layouts by editing the component files or `tailwind.config.js`.

## 🐛 Troubleshooting

### Common Issues

#### 1. "npm run dev" shows ENOENT error
**Problem**: Running from wrong directory
**Solution**: Make sure you're in the `portfolio/portfolio` directory, not just `portfolio`
```bash
cd portfolio/portfolio
npm run dev
```

#### 2. AI Chat shows "Please make sure you have set up your OpenAI API key"
**Problem**: Environment variables not loaded correctly
**Solutions**:
- Check `.env` file format (no line breaks in URLs)
- Ensure both values are wrapped in quotes
- Restart the development server after changing `.env`
- Verify your OpenAI API key is valid

#### 3. "Error: Unexpected token '<', "<!DOCTYPE "... is not valid JSON"
**Problem**: API routes returning HTML instead of JSON
**Solutions**:
- Check if Prisma dev server is running (`npx prisma dev`)
- Verify `.env` file format is correct
- Check browser console for specific error details
- Test API endpoints directly: `http://localhost:3000/api/test`

#### 4. HTTP 500 errors in console
**Problem**: Server-side errors in API routes
**Solutions**:
- Check terminal output for error details
- Verify database connection is working
- Ensure Prisma client is generated: `npx prisma generate`
- Check if all dependencies are installed: `npm install`

#### 5. Prisma Client initialization errors
**Problem**: Prisma client not properly generated
**Solutions**:
```bash
npx prisma generate
npx prisma db push
```

### Environment Variables Template
```env
# Copy this exact format to your .env file
DATABASE_URL="postgres://postgres:postgres@localhost:51214/template1?sslmode=disable&connection_limit=1&connect_timeout=0&max_idle_connection_lifetime=0&pool_timeout=0&single_use_connections=true&socket_timeout=0"
OPENAI_API_KEY="sk-proj-your-actual-api-key-here"
```

### Testing API Endpoints
- **Test endpoint**: `http://localhost:3000/api/test` → Should return `{"message":"API is working!"}`
- **Projects endpoint**: `http://localhost:3000/api/projects` → Should return project data
- **Chat endpoint**: POST to `http://localhost:3000/api/chat` with JSON body

## 📈 Analytics & Insights

The portfolio automatically tracks:
- Visitor interactions with the AI
- Popular questions and topics
- Project interest patterns
- Skill category preferences

This data can be used to:
- Improve AI responses
- Understand visitor interests
- Optimize content strategy
- Demonstrate engagement metrics to potential employers

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `DATABASE_URL`: Your production PostgreSQL URL
   - `OPENAI_API_KEY`: Your OpenAI API key
4. Deploy automatically on each push

### Environment Variables for Production
```env
DATABASE_URL="your_production_postgresql_url"
OPENAI_API_KEY="your_openai_api_key"
```

## 🎨 Features Showcase

### Live Demo Features
- **Hero Section**: Gradient animations and modern typography
- **AI Chat**: Real-time conversations with your AI assistant
- **Skills Visualization**: Interactive progress bars with smooth animations
- **Project Gallery**: Filterable project showcase with hover effects
- **Responsive Design**: Perfect on desktop, tablet, and mobile

### Technical Highlights
- **Server-Side Rendering**: Fast initial page loads
- **API Routes**: RESTful endpoints for data fetching
- **Database Integration**: Real-time data from PostgreSQL
- **Type Safety**: Full TypeScript coverage
- **Modern UI**: Tailwind CSS with custom animations

## 🤝 Contributing

This portfolio template is designed to be customized for individual use. Feel free to:
- Fork the repository
- Customize for your own portfolio
- Submit improvements via pull requests
- Share feedback and suggestions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Acknowledgments

- OpenAI for providing the API that powers the AI interactions
- Vercel for the excellent Next.js framework and hosting platform
- Prisma for the outstanding ORM and database tools
- The open-source community for the amazing tools and libraries

---

## 🎯 Quick Start Checklist

- [ ] Clone repository and navigate to `portfolio/portfolio` directory
- [ ] Run `npm install` to install dependencies
- [ ] Get OpenAI API key from https://platform.openai.com/api-keys
- [ ] Create `.env` file with correct format (no line breaks!)
- [ ] Start Prisma dev server: `npx prisma dev`
- [ ] Generate Prisma client: `npx prisma generate`
- [ ] Push database schema: `npx prisma db push`
- [ ] Seed database: `npx prisma db seed`
- [ ] Start development server: `npm run dev`
- [ ] Test AI chat functionality
- [ ] Customize with your personal information

**Ready to impress potential employers with cutting-edge technology?** This portfolio demonstrates not just your coding skills, but your ability to integrate AI, design user experiences, and build scalable applications. Perfect for roles at OpenAI, tech startups, and innovative companies looking for forward-thinking developers.

For questions or support, feel free to reach out or open an issue in the repository.
