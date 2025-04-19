# Project Cursor - AI Context File

This file helps maintain context about the project for AI assistants. It tracks the project's tech stack, structure, and important components to provide consistent help over time.

## Tech Stack

### Frontend
- **Framework**: React.js 
- **Tooling**: Vite (Fast dev server & bundler)
- **Styling**: Tailwind CSS
- **Components/UI**: ShadCN UI, Headless UI
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **State Management**: useState/useEffect, Zustand
- **Forms & Validation**: React Hook Form, Zod
- **Icons**: React Icons

### Backend
- **Server**: Python FastAPI
- **API**: REST API, Axios (on frontend)
- **Hosting**: Render, Railway

### Deployment & Tooling
- **Hosting**: Netlify, Vercel
- **Version Control**: Git + GitHub
- **Code Quality**: ESLint + Prettier
- **Build Optimization**: PostCSS / Autoprefixer

## Project Structure

```
project-cursor/
├── src/                # Frontend source files
│   ├── assets/         # Static assets like images
│   │   └── logo.png    # Site logo
│   ├── components/     # Reusable components
│   │   ├── PageTransition.jsx  # Page transition wrapper
│   │   ├── AnimatedCard.jsx    # Animated card component
│   │   └── ui/         # UI component library (ShadCN inspired)
│   ├── hooks/          # Custom React hooks
│   ├── layouts/        # Layout components
│   ├── lib/            # Utilities and helpers
│   ├── pages/          # Page components
│   │   ├── Home.jsx    # Homepage with animated elements
│   │   ├── About.jsx   # About page with animations and skill bars
│   │   └── Contact.jsx # Contact form page
│   ├── store/          # Zustand state management
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── api/                # Python backend
│   ├── main.py         # FastAPI main application
│   ├── server.py       # Test server with expanded functionality
│   ├── test_client.py  # Python script for testing API endpoints
│   └── requirements.txt # Python dependencies
├── public/             # Static assets
└── config files        # Various configuration files
```

## Key Components

### UI Components (ShadCN and Headless UI)
- `Button.jsx`: Customizable button component with variants using class-variance-authority
- `Dialog.jsx`: Modal dialog component using Radix UI primitives
- `Dropdown.jsx`: Dropdown menu component using Headless UI

### Pages
- `Home.jsx`: Landing page with animated typing effect, mouse-follow gradient, and social links
- `About.jsx`: About page with animated sections, skill bars, and journey information
- `Contact.jsx`: Contact form page with animations

### Custom Hooks
- `useFetch.js`: Custom hook for making API requests with axios

### State Management
- `useAppStore.js`: Zustand store for global state management

### Utilities
- `helpers.js`: Utility functions for formatting dates, strings, etc.
- `utils.js`: Class name utility function (cn) for Tailwind class merging

### Animation Components
- `TypedRoles`: Component that implements a typing animation for different developer roles
- `MouseFollowEffect`: Component that creates a radial gradient that follows the mouse cursor
- `NavIcon`: Component with underline animation for active navigation items
- `SocialIcons`: Component with hover animations for social media links
- `PageTransition`: Component that provides page transition animations

## Theme
The project has a dark, futuristic theme with these characteristics:
- Dark background (#0a0a0a) with subtle radial gradient that follows the mouse cursor
- Cyan accent color (#22e6d2) for highlights and interactive elements
- Glass-like panels with backdrop blur for content areas
- Subtle border effects and hover states
- Animated transitions between states and pages
- Modern typography with Rajdhani, Montserrat, and JetBrains Mono fonts

## API Endpoints

Main API (`main.py`):
- `POST /api/contact`: Submit contact form

Test API (`server.py`):
- `GET /`: Root endpoint
- `POST /api/contact`: Submit contact form
- `GET /api/contacts`: Get all contacts
- `GET /api/items`: Get all test items
- `GET /api/items/{id}`: Get specific test item
- `POST /api/items`: Create new test item
- `GET /api/test/error`: Test error handling
- `GET /api/test/slow`: Test slow responses

## NPM Scripts

- `npm run dev`: Run frontend only
- `npm run dev:api`: Run main API server
- `npm run dev:test-api`: Run test API server
- `npm run dev:all`: Run frontend and main API
- `npm run dev:test`: Run frontend and test API
- `npm run test:api`: Run API test client
- `npm run build`: Build for production
- `npm run lint`: Run ESLint

## Version History

### v0.1.0 - Initial Setup
- Created server.py for testing API endpoints
- Created test_client.py for sending test requests to the API
- Added new npm scripts for testing
- Created CONTEXT.md file for maintaining AI context

### v0.2.0 - Homepage Implementation
- Created Home.jsx with animated typing effect and mouse-follow gradient
- Updated App.jsx with new navigation and layout
- Added custom animations in App.css
- Extended Tailwind configuration for animations and gradients

### v0.3.0 - UI Refinements
- Created all pages with a consistent futuristic dark theme
- Implemented typing animation for developer roles on homepage
- Added mouse-follow gradient effect for interactive background
- Updated navigation with animated active indicators
- Created About page with animated skill bars and journey sections
- Redesigned Contact form with the new theme
- Updated all UI components to match the futuristic dark theme
- Added animations throughout the site using Framer Motion

### v0.4.0 - Design System Update
- Changed background to match concept image (darker theme)
- Improved cursor gradient effect for better interaction
- Added Rajdhani, Montserrat, and JetBrains Mono fonts for typography
- Fixed social icon hover states to revert to white when not hovered
- Added the logo to the navbar
- Enhanced glass panel effect for more depth

### v0.5.0 - Component System
- Created PageTransition component for smooth page transitions
- Updated AnimatedCard to work with React icons
- Enhanced Contact page with improved layout and gradient text
- Added React Icons library for better icon support
- Improved form styling with consistent glass panel effect
- Added consistent accent color throughout the application 