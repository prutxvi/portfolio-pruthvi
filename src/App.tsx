import { useEffect, useState } from 'react';
import { WebGLShader } from './components/ui/web-gl-shader';
import { GradientButton } from './components/ui/gradient-button';
import DisplayCards from './components/ui/display-cards';
import ScrollExpandMedia from './components/ui/scroll-expansion-hero';
import { Github, Linkedin, Instagram, Mail, Code2, Brain, Rocket, Star, GitFork } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';

interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  stats?: {
    stars?: number;
    forks?: number;
  };
  link?: string;
  quote?: string;
}

const projects: Project[] = [
  {
    title: 'BookScan AI',
    description: 'AI-powered book analysis in 3 seconds',
    problem: 'People waste 30+ minutes searching for book recommendations on Goodreads',
    solution: 'Instant ratings, pros & cons analysis, personalized recommendations',
    tech: ['AI/ML', 'NLP', 'Python'],
  },
  {
    title: 'Gesture Drop',
    description: 'Touchless file transfer using hand gestures',
    problem: 'Traditional file transfer requires cables, Bluetooth, or apps',
    solution: 'AI-powered touchless text & image transfer between PC and phone',
    tech: ['Python', 'Flask', 'MediaPipe', 'TensorFlow.js', 'Computer Vision'],
    stats: { stars: 25, forks: 4 },
    link: 'https://github.com/prutxvi/gesture-drop',
    quote: 'Innovation doesn\'t ask for permission — it gestures its own path.',
  },
  {
    title: 'PruthviGPT',
    description: 'Your personal AI digital twin',
    problem: 'Need a second brain that thinks like you',
    solution: 'AI trained on your projects, notes, scripts, and thinking patterns',
    tech: ['AI/ML', 'NLP', 'Deep Learning'],
  },
];

const skills = [
  'Vibecoding',
  'Python',
  'AI & Machine Learning',
  'Computer Vision',
  'Full-Stack Development',
  'Flask',
  'TensorFlow.js',
  'OpenCV',
  'MediaPipe',
];

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!showMainContent) {
    return (
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1280&auto=format&fit=crop"
        bgImageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop"
        title="Pruthvi Raj"
        date="18 y/o Builder"
        scrollToExpand="Scroll to Expand"
        textBlend={true}
      >
        <div className="max-w-4xl mx-auto text-white px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Journey of an 18 y/o builder</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-white/80">
            Ideas worth learning & applying. Building startups that solve real-world problems using technology, innovation, and an entrepreneurial mindset.
          </p>
          <div className="flex justify-center">
            <GradientButton
              size="lg"
              className="text-white rounded-full px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg"
              onClick={() => setShowMainContent(true)}
            >
              Explore My Work
            </GradientButton>
          </div>
        </div>
      </ScrollExpandMedia>
    );
  }

  return (
    <div className="min-h-screen relative w-full overflow-x-hidden">
      <WebGLShader />

      <div className="relative z-10 w-full">
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
          <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-end items-center">
            <div className="flex gap-3 sm:gap-4">
              <a href="https://github.com/prutxvi" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition p-2" aria-label="GitHub">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.linkedin.com/in/pruthvi-raj-586263284/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition p-2" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://instagram.com/pruthvi.talks" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition p-2" aria-label="Instagram">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="mailto:pruthviraj73962@gmail.com" className="text-white/80 hover:text-white transition p-2" aria-label="Email">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </nav>
        </header>

        <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
          <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-4 sm:mb-6 flex items-center justify-center gap-2">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-xs sm:text-sm text-green-500">Available for New Projects</p>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Pruthvi Raj
                </span>
                <br />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white/90">
                  Tech Builder & AI Innovator
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Student @ NIAT | Building startups that solve real-world problems | 400K+ impressions on LinkedIn
              </p>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition text-xs sm:text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>

              <GradientButton
                size="lg"
                className="text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base gap-2"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Let's Collaborate
              </GradientButton>
            </div>
          </section>

          <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Featured Projects</h3>
                <p className="text-sm sm:text-base text-white/70">Building in public, solving real problems</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {projects.map((project, index) => (
                  <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                        {project.stats && (
                          <div className="flex gap-2 text-white/60 text-sm">
                            <span className="flex items-center gap-1">
                              <Star className="w-4 h-4" />
                              {project.stats.stars}
                            </span>
                            <span className="flex items-center gap-1">
                              <GitFork className="w-4 h-4" />
                              {project.stats.forks}
                            </span>
                          </div>
                        )}
                      </div>
                      <CardDescription className="text-white/60">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-white/80 mb-1">Problem</h4>
                          <p className="text-sm text-white/60">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white/80 mb-1">Solution</h4>
                          <p className="text-sm text-white/60">{project.solution}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs border-white/20 text-white/70">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        {project.quote && (
                          <p className="text-sm italic text-white/50 border-l-2 border-white/20 pl-3">
                            "{project.quote}"
                          </p>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition"
                          >
                            View on GitHub
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 overflow-x-hidden">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-4 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">What I Do</h3>
              </div>

              <DisplayCards
                cards={[
                  {
                    icon: <Code2 className="size-4 text-emerald-300" />,
                    title: 'Vibecoding',
                    description: 'My signature approach to building',
                    date: 'Core Philosophy',
                    titleClassName: 'text-emerald-400',
                    className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0",
                  },
                  {
                    icon: <Brain className="size-4 text-purple-300" />,
                    title: 'AI/ML Innovation',
                    description: 'Building intelligent solutions',
                    date: 'Core Expertise',
                    titleClassName: 'text-purple-400',
                    className: "[grid-area:stack] translate-x-12 sm:translate-x-16 translate-y-8 sm:translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 hover:before:opacity-0 before:transition-opacity before:duration-700 before:left-0 before:top-0",
                  },
                  {
                    icon: <Rocket className="size-4 text-orange-300" />,
                    title: 'Startup Builder',
                    description: 'Solving real-world problems',
                    date: 'Entrepreneurship',
                    titleClassName: 'text-orange-400',
                    className: '[grid-area:stack] translate-x-24 sm:translate-x-32 translate-y-16 sm:translate-y-20 hover:translate-y-10',
                  },
                ]}
              />
            </div>
          </section>

          <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/5 border-white/10 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-white text-xl sm:text-2xl md:text-3xl text-center">Achievements & Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <div className="text-center p-3 sm:p-4 md:p-6 bg-white/5 rounded-lg">
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">400K+</p>
                      <p className="text-xs sm:text-sm md:text-base text-white/70">LinkedIn Impressions</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 md:p-6 bg-white/5 rounded-lg">
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">3,353</p>
                      <p className="text-xs sm:text-sm md:text-base text-white/70">Profile Views</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 md:p-6 bg-white/5 rounded-lg">
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">500+</p>
                      <p className="text-xs sm:text-sm md:text-base text-white/70">LinkedIn Connections</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 md:p-6 bg-white/5 rounded-lg">
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">14</p>
                      <p className="text-xs sm:text-sm md:text-base text-white/70">Public Repositories</p>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                      HackOdisha 5.0 Participant
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Let's Build Something Amazing</h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 px-4">
                Open to collaborations, partnerships, and innovative projects
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                <GradientButton
                  size="lg"
                  className="text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base gap-2 w-full sm:w-auto"
                  onClick={() => window.location.href = 'mailto:pruthviraj73962@gmail.com'}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  Get in Touch
                </GradientButton>
                <GradientButton
                  size="lg"
                  className="text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base gap-2 w-full sm:w-auto"
                  onClick={() => window.open('https://github.com/prutxvi', '_blank')}
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  View GitHub
                </GradientButton>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 backdrop-blur-md bg-black/30 py-6 sm:py-8">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center text-white/60">
              <p className="mb-2 text-xs sm:text-sm md:text-base">Journey of an 18 y/o builder - Ideas worth learning & applying</p>
              <p className="text-xs sm:text-sm">Building in public | Tech-Driven Startup Builder | Hyderabad, India</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
