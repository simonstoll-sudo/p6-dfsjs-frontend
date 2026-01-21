# Olympic Participation Tracker

A modern React application for visualizing Olympic participation data, built with React 19, Vite, and Tailwind CSS.

## Overview

This single-page application (SPA) displays Olympic participation statistics for multiple countries, showcasing their performance across different Olympic Games. It demonstrates modern React patterns including custom hooks, service layers, and responsive design.

**Key Features:**
- Display Olympic participation data for multiple countries
- View medals count and athlete count by year
- Responsive design (mobile-first approach)
- Fast development with Vite HMR
- Modern React 19 with functional components
- Utility-first styling with Tailwind CSS
- Client-side routing with React Router v6

## Tech Stack

- **Framework:** React 19.x
- **Build Tool:** Vite 6.x
- **Styling:** Tailwind CSS 3.4+
- **Routing:** React Router v6
- **Testing:** Jest + React Testing Library

## Prerequisites

Before you begin, ensure you have installed:

- **Node.js** 22.x or higher ([Download](https://nodejs.org/))
- **npm** 10.x or higher (included with Node.js)

## Getting Started

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd p6-dfsjs-frontend
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

#### Option 1: Development Mode (Recommended for development)

Start the Vite development server with Hot Module Replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

**Features:**
- Hot Module Replacement (instant updates)
- Fast refresh for React components
- Source maps for debugging
- Development error overlay

#### Option 2: Production Preview

Build and preview the production version locally:

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

The preview will be available at `http://localhost:4173`

### Verify Installation

Open your browser and navigate to the application URL. You should see:
- A title "Olympic Games App"
- A counter showing "5 countries data loaded"
- Cards displaying countries and their Olympic participations

## Project Structure

```
p6-dfsjs-frontend/
├── src/
│   ├── main.jsx                    # React 19 application entry point
│   ├── App.jsx                     # React Router configuration
│   ├── index.css                   # Tailwind CSS imports
│   ├── pages/
│   │   ├── Home.jsx                # Home page (Olympic data list)
│   │   └── NotFound.jsx            # 404 error page
│   ├── components/                 # Reusable UI components (to be created)
│   ├── hooks/
│   │   └── useOlympic.js           # Custom hook for Olympic data fetching
│   ├── services/
│   │   └── olympicService.js       # Service layer for data access
│   └── assets/
│       └── mock/
│           └── olympic.json        # Mock Olympic data (5 countries)
├── tests/
│   ├── hooks/
│   │   └── useOlympic.test.js      # Tests for custom hook
│   └── pages/
│       └── Home.test.js            # Tests for Home component
├── public/                         # Static assets (favicon, etc.)
├── index.html                      # HTML template for SPA
├── package.json                    # Project dependencies and scripts
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── jest.config.js                  # Jest testing configuration
└── README.md                       # This file
```

## Architecture

This application follows a **layered architecture** for clean separation of concerns:

```
Pages (UI Components)
    ↓
Custom Hooks (State Management)
    ↓
Services (Data Fetching)
    ↓
Data Layer (Mock/API)
```

**Key patterns:**
- **Custom Hooks**: Encapsulate state management and side effects (`useOlympic`)
- **Service Layer**: Isolate data fetching logic from UI components
- **Component Composition**: Build complex UIs from smaller, reusable components
- **Early Return Pattern**: Handle loading/error states before rendering data

### Custom Hook: `useOlympic`

The `useOlympic` hook manages Olympic data fetching and state:

```javascript
const { olympics, loading, error } = useOlympic();

// olympics: Array of Olympic data
// loading: Boolean (true while fetching)
// error: Error object or null
```

**Responsibilities:**
- Fetch Olympic data on component mount
- Manage loading, error, and success states
- Provide clean API for components

## Available Scripts

- `npm run dev` - Start development server (port 5173)
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm test` - Run test suite
- `npm test -- --watch` - Run tests in watch mode
- `npm test -- --coverage` - Run tests with coverage report

## Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

The test suite includes:
- **Hook tests**: Custom hook behavior with mocked services
- **Component tests**: UI rendering with mocked hooks
- **Integration tests**: Full component behavior

**Coverage target:** >80% for statements, branches, and functions

## Styling with Tailwind CSS

This project uses **Tailwind CSS** utility-first approach:

**Benefits:**
- Rapid prototyping with utility classes
- Consistent design system
- No CSS files to manage (except `index.css` for imports)
- Responsive design with breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`)
- Production builds automatically purge unused classes

**Common utility classes used:**
- **Layout:** `container`, `mx-auto`, `px-4`, `py-8`, `flex`, `grid`
- **Typography:** `text-4xl`, `font-bold`, `text-center`, `text-gray-700`
- **Colors:** `text-blue-600`, `bg-white`, `bg-gray-100`
- **Spacing:** `mb-4`, `space-y-8`, `gap-4`
- **Effects:** `shadow-lg`, `rounded-lg`, `hover:bg-blue-700`

**Example component with Tailwind:**
```jsx
<div className="container mx-auto px-4 py-8">
  <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
    Olympic Games App
  </h1>
</div>
```

## Routing

The application uses **React Router v6** for client-side routing:

**Routes:**
- `/` - Home page (Olympic data list)
- `*` - Catch-all for 404 (NotFound page)

## Data Structure

### Olympic Model

```typescript
{
  id: number,
  country: string,
  participations: Array<Participation>
}
```

### Participation Model

```typescript
{
  id: number,
  year: number,
  city: string,
  medalsCount: number,
  athleteCount: number
}
```

### Mock Data

The application includes mock data for **5 countries** with **3 participations each**:
- France
- United States
- Germany
- China
- Great Britain

Olympic years included: 2012 (London), 2016 (Rio), 2020 (Tokyo)

## Development

### Adding New Components

To create a new reusable component:

1. Create file in `src/components/ComponentName.jsx`
2. Use functional component with hooks
3. Apply Tailwind CSS classes for styling
4. Export as default or named export
5. Import and use in pages

**Example:**
```jsx
// src/components/CountryCard.jsx
export const CountryCard = ({ country, participations }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        {country}
      </h2>
      {/* Display participations */}
    </div>
  );
};
```

### Adding New Pages

To add a new page (e.g., "About"):

1. Create `src/pages/About.jsx`
2. Add route in `src/App.jsx`:
```jsx
<Route path="/about" element={<About />} />
```
3. Add navigation link (if needed)

### State Management

For local state, use React hooks:
- `useState` - Component state
- `useEffect` - Side effects (data fetching, subscriptions)
- Custom hooks - Reusable stateful logic

For global state (if needed in future):
- Context API (built-in)
- Zustand (lightweight alternative to Redux)
- Redux Toolkit (for complex apps)

## Performance

### Optimizations Applied

1. **Vite Build:**
   - JavaScript minification
   - Tree-shaking (removes unused code)
   - Code splitting (lazy loading)
   - Asset optimization

2. **React:**
   - Functional components (lighter than class components)
   - Efficient re-renders
   - Production build optimizations

### Performance Targets

- **First Contentful Paint (FCP):** < 1.5s
- **Time to Interactive (TTI):** < 3s
- **Lighthouse Score:** > 90

**Measure performance:**
```bash
npm run build
npm run preview
# Open Chrome DevTools > Lighthouse > Run audit
```

## Troubleshooting

### Vite Dev Server Issues

**Problem:** Port 5173 already in use

**Solution:** Kill the process or change the port in `vite.config.js`:
```javascript
export default defineConfig({
  server: { port: 5174 }
});
```

### 404 on Refresh

**Problem:** Refreshing browser on routes like `/about` returns 404

**Solution:** This is expected in development with Vite. For production deployment, you'll need to configure your server to serve `index.html` for all routes (SPA routing).

### Tailwind Classes Not Working

**Problem:** Tailwind utility classes not applying styles

**Solution:**
1. Verify `index.css` imports Tailwind directives
2. Check `tailwind.config.js` content paths include all component files
3. Restart dev server: `npm run dev`

### Tests Failing

**Problem:** Jest tests fail with module import errors

**Solution:** Ensure `jest.config.js` is configured for ES modules and React:
```javascript
transform: {
  '^.+\\.jsx?$': 'babel-jest'
}
```

## Browser Support

This application supports modern browsers with ES6+ support:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

For older browser support, additional polyfills may be required.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'feat: add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a Pull Request

## License

MIT

---

**Need help?** Explore the code in `src/` or check the Vite and React documentation for more details.
