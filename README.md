# Portfolio Website

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

### Backend (Lightweight)
- **Server**: Python
- **API**: REST API, Axios (on frontend)
- **Hosting**: Render, Railway

### Deployment & Tooling
- **Hosting**: Netlify, Vercel (Static + serverless)
- **Version Control**: Git + GitHub
- **Code Quality**: ESLint + Prettier
- **Build Optimization**: PostCSS / Autoprefixer

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Install Python backend dependencies
cd api
pip install -r requirements.txt
cd ..
```

### Development

```bash
# Run frontend only
npm run dev

# Run backend only
npm run dev:api

# Run both frontend and backend
npm run dev:all
```

## Project Structure

```
project-cursor/
├── src/                # Frontend source files
│   ├── components/     # Reusable components
│   │   └── ui/         # UI component library
│   ├── hooks/          # Custom React hooks
│   ├── layouts/        # Layout components
│   ├── lib/            # Utilities and helpers
│   ├── pages/          # Page components
│   ├── store/          # State management (Zustand)
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── api/                # Python backend
│   ├── main.py         # FastAPI entry point
│   └── requirements.txt # Python dependencies
├── public/             # Static assets
└── ...                 # Configuration files
```

## Component Library

The project includes custom UI components built with ShadCN UI and Headless UI:

- `Button`: Customizable button with variants
- `Dialog`: Modal dialog component
- `Dropdown`: Dropdown menu component

### Example Usage

```jsx
import { Button } from './components/ui/Button';
import { Dialog, DialogContent, DialogTitle } from './components/ui/Dialog';
import { Dropdown } from './components/ui/Dropdown';

// Button example
<Button variant="outline" size="sm">Click me</Button>

// Dialog example
<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogTitle>Hello World</DialogTitle>
    <p>This is a dialog</p>
  </DialogContent>
</Dialog>

// Dropdown example
<Dropdown 
  trigger={<Button>Menu</Button>}
  items={[
    { label: 'Edit', onClick: () => {} },
    { label: 'Delete', onClick: () => {} }
  ]}
/>
```
