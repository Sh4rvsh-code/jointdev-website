# JointDev - AI-Powered Development Studio

A modern, interactive portfolio website for JointDev, a two-person AI-powered development studio that builds software 10x faster. Built with Next.js 14, TypeScript, Tailwind CSS, and featuring advanced animations and theming.

## 🚀 Features

### Core Functionality
- **Multi-Theme System**: 3 elegant themes (Midnight Purple, Slate Modern, Dark Indigo) with persistent storage
- **Interactive Navigation**: Smooth page transitions with layered architecture
- **Advanced Animations**: GSAP-powered intro animation, wavy backgrounds, text effects
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Performance Optimized**: Next.js 14 with optimized builds

### Technical Highlights
- **Theme Switcher**: Floating theme selector with live preview and color swatches
- **Dynamic Content**: Typewriter effects, encrypted text reveals, text roll animations
- **Project Showcase**: Interactive project cards with hover effects and detailed views
- **Contact Integration**: Modal-based contact form with smooth transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Motion (Framer Motion)
- **State Management**: Zustand
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
jointdev-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page with routing logic
│   └── globals.css        # Global styles and CSS variables
├── components/            # React components
│   ├── ThemeSwitcher.tsx  # Multi-theme system component
│   ├── ScreenLayout.tsx   # Main layout wrapper
│   ├── Navigation.tsx     # Navigation system
│   ├── pages/             # Page-specific components
│   │   ├── LandingPage.tsx     # Hero section with animations
│   │   ├── ProjectsView.tsx    # Project showcase
│   │   ├── AboutView.tsx       # About section
│   │   ├── ProjectDetailView.tsx # Detailed project view
│   │   └── ContactModal.tsx    # Contact form modal
│   └── ui/                # Reusable UI components
│       ├── hero-highlight.tsx   # Animated text highlighting
│       ├── text-roll.tsx        # Rolling text animation
│       ├── encrypted-text.tsx   # Text decryption effect
│       ├── typewriter.tsx       # Typewriter animation
│       └── wavy-background.tsx  # Animated wave background
├── lib/                   # Utility functions
│   ├── themes.ts          # Theme definitions and types
│   ├── gsap.ts            # GSAP configuration
│   └── utils.ts           # Utility functions
├── stores/                # Zustand state management
│   ├── useThemeStore.ts   # Theme state and persistence
│   └── useUIStore.ts      # UI navigation state
└── public/                # Static assets
```

## 🎨 Theme System

### Theme Switcher Component
The `ThemeSwitcher` component provides a sophisticated theme selection experience:

- **Floating Button**: Fixed position button with palette icon that opens the theme panel
- **Live Preview**: Click themes to instantly preview color schemes
- **Color Swatches**: Visual representation of each theme's color palette
- **Persistent Storage**: Theme preference saved to localStorage
- **Smooth Transitions**: CSS transitions for seamless theme changes

### Available Themes
1. **Midnight Purple Elegance**: Deep purple tones with violet accents
2. **Slate Modern Minimal**: Clean slate colors with blue accents  
3. **Dark Indigo Premium**: Rich indigo palette with purple highlights

### Implementation Details
- CSS custom properties for dynamic theming
- Zustand store with persistence middleware
- Real-time DOM updates without page refresh
- Responsive design for all screen sizes

## 🎯 Key Components

### ThemeSwitcher.tsx
```typescript
// Features:
- Floating action button with smooth animations
- Expandable theme panel with backdrop
- Live theme preview functionality
- Color palette visualization
- Persistent theme storage
- Responsive mobile design
```

### LandingPage.tsx
```typescript
// Features:
- Animated hero section with text effects
- Project showcase cards with hover animations
- Gradient backgrounds and wave effects
- Call-to-action buttons with micro-interactions
- Responsive grid layouts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
1. Clone the repository:
```bash
git clone https://github.com/Sh4rvsh-code/jointdev-website.git
cd jointdev-website
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production
```bash
npm run build
npm start
```

## 🎨 Customization

### Adding New Themes
1. Define theme colors in `lib/themes.ts`:
```typescript
export const themes = {
  // Add your theme
  custom: {
    name: 'Custom Theme Name',
    colors: {
      'bg-primary': '#your-color',
      // ... other colors
    }
  }
}
```

2. The theme will automatically appear in the ThemeSwitcher

### Modifying Animations
- GSAP animations: Edit `lib/gsap.ts`
- Motion animations: Modify individual components
- CSS animations: Update `globals.css`

## 📱 Responsive Design

- **Mobile**: Single column layouts, touch-friendly interactions
- **Tablet**: Adaptive grid systems, optimized typography
- **Desktop**: Multi-column layouts, enhanced animations
- **Ultra-wide**: Max-width constraints, optimal reading experience

## 🔧 Performance Optimization

- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component ready
- **CSS Optimization**: Tailwind CSS purging enabled
- **Bundle Analysis**: Available via `npm run analyze`

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Automatic deployments on push to main branch
3. Environment variables configuration available

### Other Platforms
- Build output is in `.next/` directory
- Static export available via `next export`
- Docker support can be added

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email jointdev@example.com or open an issue in the GitHub repository.

## 🎉 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for utility-first styling
- GSAP for powerful animations
- Lucide React for beautiful icons
- Framer Motion for smooth transitions