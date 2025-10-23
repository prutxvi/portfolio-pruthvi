# Portfolio Website Generator - Universal Prompt Template

Use this prompt to create a stunning, responsive portfolio website. Simply fill in your details in the sections marked with `[YOUR_INFO]` and paste the entire prompt to an AI assistant.

---

## 🎨 Portfolio Website Creation Prompt

Create a modern, fully responsive portfolio website with the following specifications:

### **Personal Information**
- **Name**: [YOUR_NAME]
- **Title/Role**: [YOUR_TITLE] (e.g., "Tech Builder & AI Innovator", "Full-Stack Developer", "Designer & Creative")
- **Age/Description**: [YOUR_AGE] (e.g., "18 y/o Builder", "23 y/o Developer")
- **Location**: [YOUR_LOCATION] (e.g., "Hyderabad, India", "San Francisco, USA")
- **Institution**: [YOUR_SCHOOL/COMPANY] (e.g., "Student @ MIT", "Engineer @ Google")
- **Tagline**: [YOUR_TAGLINE] (e.g., "Building startups that solve real-world problems")

### **Contact & Social Links**
- **Email**: [YOUR_EMAIL]
- **GitHub**: [YOUR_GITHUB_URL]
- **LinkedIn**: [YOUR_LINKEDIN_URL]
- **Instagram/Twitter**: [YOUR_SOCIAL_URL] (optional)

### **Key Achievements**
Provide 4 key metrics/achievements:
1. [METRIC_1] (e.g., "400K+ LinkedIn Impressions")
2. [METRIC_2] (e.g., "3,353 Profile Views")
3. [METRIC_3] (e.g., "500+ Connections")
4. [METRIC_4] (e.g., "14 Public Repositories")

### **Skills/Technologies**
List 6-10 skills or technologies you work with:
- [SKILL_1] (e.g., "Python")
- [SKILL_2] (e.g., "React")
- [SKILL_3] (e.g., "AI & Machine Learning")
- [SKILL_4]
- [SKILL_5]
- [SKILL_6]
- [Add more as needed]

### **Featured Projects**
Provide 3 projects with the following details:

**Project 1:**
- **Title**: [PROJECT_NAME]
- **Description**: [ONE_LINE_DESCRIPTION]
- **Problem**: [PROBLEM_IT_SOLVES]
- **Solution**: [HOW_IT_SOLVES_IT]
- **Technologies**: [TECH_STACK] (comma-separated)
- **GitHub Stats**: [STARS/FORKS] (optional)
- **Link**: [PROJECT_URL] (optional)
- **Quote**: [INSPIRATIONAL_QUOTE] (optional)

**Project 2:**
- [Same format as above]

**Project 3:**
- [Same format as above]

### **What I Do / Core Values**
Provide 3 cards representing your work philosophy or areas of focus:

**Card 1:**
- **Title**: [TITLE] (e.g., "Vibecoding", "Design Systems")
- **Description**: [SHORT_DESCRIPTION]
- **Category**: [CATEGORY] (e.g., "Core Philosophy", "Expertise")

**Card 2:**
- [Same format]

**Card 3:**
- [Same format]

### **Additional Details**
- **Availability Status**: [STATUS] (e.g., "Available for New Projects", "Open to Opportunities")
- **Footer Tagline**: [FOOTER_TEXT] (e.g., "Journey of an 18 y/o builder - Ideas worth learning & applying")
- **Special Badges**: [ANY_BADGES] (e.g., "HackOdisha 5.0 Participant", "Google Summer of Code 2024")

---

## 🛠️ Technical Requirements

Build this portfolio with the following tech stack and features:

### **Technology Stack**
- React + TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui components
- Framer Motion for animations
- Three.js for WebGL effects

### **Design Requirements**
1. **Responsive Design**: Must work flawlessly on mobile, tablet, and desktop
2. **Modern Aesthetic**: Clean, professional design with gradient accents
3. **Color Scheme**:
   - Primary gradient: Cyan → Blue → Purple
   - Dark theme with glassmorphism effects
   - High contrast for readability
4. **Typography**:
   - Scalable font sizes across breakpoints
   - Clear hierarchy (large name, smaller tagline, body text)
5. **Animations**:
   - Smooth scroll-to-expand hero section
   - Gradient button hover effects
   - Card hover states with subtle transforms
   - WebGL shader background effect

### **Layout Structure**
1. **Hero Section**:
   - Scroll-to-expand introduction
   - Name prominently displayed with gradient
   - Call-to-action button

2. **Main Header** (sticky):
   - Social media icons aligned right
   - Transparent with blur effect

3. **About Section**:
   - Large gradient name display
   - Title/role underneath
   - Bio text
   - Skills badges
   - Primary CTA button

4. **Projects Section**:
   - Grid layout (1 col mobile, 2 col tablet, 3 col desktop)
   - Cards with problem/solution format
   - Technology badges
   - Optional GitHub stats and links

5. **What I Do Section**:
   - Stack-style display cards
   - Icon + title + description

6. **Achievements Section**:
   - 2x2 grid of metrics
   - Large numbers with descriptions
   - Special badges

7. **Contact Section**:
   - Heading + description
   - Multiple CTA buttons (Email, GitHub)

8. **Footer**:
   - Centered text
   - Tagline and location

### **Component Features**

#### Gradient Buttons:
- Animated gradient background (200% size)
- Smooth hover transition
- Rounded full edges
- Responsive sizing
- Icon + text layout

#### Project Cards:
- Glassmorphism style (bg-white/5)
- Hover state brightening
- Clear problem/solution sections
- Tech badges
- Optional quote section
- GitHub stats display

#### Mobile Optimizations:
- Touch-friendly tap targets (min 44px)
- Full-width buttons on mobile
- Reduced padding/spacing
- Scalable typography
- Accessible navigation
- Proper viewport meta tags

### **Animation Details**
1. **Hero Animation**: Scroll to expand from small to full screen
2. **Button Animations**: Gradient shift on hover (99% center)
3. **Card Animations**: Slight elevation on hover
4. **Badge Animations**: Smooth opacity transitions
5. **Background**: Animated WebGL shader (optional, subtle)

### **Accessibility Requirements**
- Semantic HTML5 elements
- ARIA labels on icon-only links
- Proper heading hierarchy (h1, h2, h3)
- Keyboard navigation support
- Color contrast ratios WCAG AA compliant
- Responsive images with proper alt text

### **Performance Optimizations**
- Lazy loading for images
- Code splitting for large components
- Optimized bundle size
- Fast initial load time
- Smooth 60fps animations

---

## 📋 Implementation Instructions

1. **Setup**: Create a Vite + React + TypeScript project with Tailwind CSS
2. **Install Dependencies**:
   - @radix-ui components for UI primitives
   - lucide-react for icons
   - framer-motion for animations
   - three.js for WebGL (optional)
3. **Component Structure**: Separate components for cards, buttons, badges
4. **Responsive Design**: Use Tailwind's responsive classes (sm:, md:, lg:)
5. **Color Theme**: Update CSS variables for primary colors
6. **Build & Deploy**: Build as static site, deployable to Vercel/Netlify

---

## 🎯 Expected Output

A production-ready, static portfolio website that:
- ✅ Loads in under 3 seconds
- ✅ Works on all devices and screen sizes
- ✅ Has smooth, professional animations
- ✅ Showcases projects effectively
- ✅ Provides clear contact options
- ✅ Looks modern and impressive
- ✅ Is fully accessible
- ✅ Can be deployed immediately

---

## 💡 Customization Tips

After generation, you can easily customize:
- **Colors**: Update gradient colors in the GradientButton component and hero section
- **Images**: Replace Unsplash URLs with your own images
- **Content**: All text is in the main App.tsx file
- **Animations**: Adjust Framer Motion properties
- **Layout**: Modify grid columns and spacing
- **Icons**: Swap Lucide icons for different ones

---

## 📝 Example Usage

Replace all `[YOUR_INFO]` placeholders with your actual information and paste the entire prompt. The AI will generate a complete, working portfolio website tailored to your details.

**Pro Tip**: Be specific with your projects and achievements. The more detail you provide, the better the output!

---

*This template creates a portfolio similar to modern developer portfolios with professional animations, responsive design, and clean code structure.*
