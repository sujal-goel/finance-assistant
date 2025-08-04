# Zenith Tax Optimizer

A modern AI-powered tax optimization platform built with Next.js for Indian taxpayers. Maximize your savings, minimize your stress with intelligent financial guidance.

## 🚀 Features

- **🤖 AI-Powered Conversational Coach**: Get personalized financial advice through natural language chat
- **📊 Tax Optimization Simulator**: Calculate potential tax savings with detailed recommendations
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🎯 Strategic Business Blueprint**: Three-phase development roadmap visualization
- **⚡ Real-time AI Integration**: Live responses powered by Google Gemini API
- **🎨 Modern UI/UX**: Clean, professional design with smooth animations

## 🛠️ Technology Stack

- **Framework**: Next.js 14.0.4 (React 18)
- **Styling**: Tailwind CSS 3.3.0
- **AI Integration**: Google Gemini 2.5 Flash API
- **Language**: JavaScript (ES6+)
- **Architecture**: Component-based with app directory structure

## 📁 Project Structure

```
zenith-finance-app/
├── app/
│   ├── components/          # React components
│   │   ├── Header.js
│   │   ├── HeroSection.js
│   │   ├── OpportunitySection.js
│   │   ├── SolutionSection.js
│   │   ├── DemoSection.js
│   │   ├── ConversationalCoach.js
│   │   ├── TaxSimulator.js
│   │   ├── BlueprintSection.js
│   │   ├── CallToActionSection.js
│   │   ├── FeatureCard.js
│   │   └── Footer.js
│   ├── globals.css           # Global styles
│   ├── layout.js            # Root layout component
│   └── page.js              # Main page component
├── .env.local               # Environment variables (create from .env.example)
├── .env.example             # Environment variables template
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Dependencies and scripts
├── index.html               # Static fallback/redirect page
├── serve.bat                # Development server launcher (Windows)
└── README.md                
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd "finance assistant"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example file
   cp .env.example .env.local
   
   # Edit .env.local and add your Gemini API key
   NEXT_PUBLIC_API_KEY=your_gemini_api_key_here
   NEXT_PUBLIC_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or use the provided batch file
   serve.bat
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌟 Core Components

### 1. **Conversational Coach**
- Natural language financial Q&A
- Markdown-formatted AI responses
- Example prompts for user guidance
- Real-time chat interface

### 2. **Tax Optimization Simulator**
- Income and investment input forms
- AI-powered tax analysis
- Detailed saving recommendations
- Interactive results display

### 3. **Strategic Blueprint**
- Three-phase business development timeline
- Trust Foundation → Coach Pro → Goal Accelerator
- Responsive alternating layout
- Progress indicators

### 4. **Modern UI Features**
- Gradient backgrounds and glass morphism effects
- Smooth transitions and animations
- Mobile-first responsive design
- Professional typography (Inter font)

## 🔐 Environment Variables

The application uses environment variables for secure API configuration:

```env
# Required: Gemini API credentials
NEXT_PUBLIC_API_KEY=your_gemini_api_key_here
NEXT_PUBLIC_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key

# Note: NEXT_PUBLIC_ prefix exposes variables to the browser
# Server-side only variables don't need this prefix
```

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- **Netlify**: Compatible with static export
- **Railway**: Full-stack deployment
- **Heroku**: Container or buildpack deployment

## 🛡️ Security Notes

- API keys are stored in environment variables
- Client-side variables use `NEXT_PUBLIC_` prefix
- Sensitive data should use server-side only variables
- `.env.local` is excluded from version control

## 🎯 Performance Features

- **Server-side rendering** with Next.js
- **Optimized components** for fast loading
- **Responsive images** and lazy loading
- **CSS optimization** with Tailwind
- **Progressive enhancement** for better UX

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2025 Zenith Tax Optimizer. AI-powered tax optimization for Indian taxpayers.

## 📞 Support

For questions, issues, or feature requests:
- Check the demo section for live examples
- Review component documentation in the code
- Open an issue for bug reports
- Contact support through the application

---

**Built with ❤️ using Next.js and AI**
