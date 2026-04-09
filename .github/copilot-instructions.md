# Copilot Instructions for Portfolio Site

## Build, Test, and Lint

**Start development server:**
```bash
npm start
```
Runs on http://localhost:3000 with hot reload on file changes.

**Run tests:**
```bash
npm test
```
Launches Jest in interactive watch mode. Press `a` to run all tests, `q` to quit.

**Build for production:**
```bash
npm run build
```
Creates optimized bundle in `build/` directory.

**Deploy to GitHub Pages:**
```bash
npm run deploy
```
Automatically runs `npm run build` first, then deploys to gh-pages branch.

## High-Level Architecture

This is a Create React App–based portfolio website using React Router v6 for page navigation. The app uses Material-UI components for consistent styling and supports dark/light mode theming.

**Routing structure (defined in `src/App.js`):**
- `/` → Home page
- `/about` → About page
- `/contact` → Contact page
- `/faq` → FAQ page

**Component hierarchy:**
- `App` wraps everything in `BrowserRouter` and sets up routes
- `Navbar` renders globally; responsive (drawer menu on mobile, nav links on desktop)
- Pages live in `src/pages/` and are mounted via `<Routes>`
- Shared components like `Footer` and `Logo` are in `src/components/`
- `CustomDarkModeToggle` in `src/components/Navbar/` controls theme switching

**State management:**
- Dark/light mode state is managed via `use-dark-mode` hook (configured with default=false for light mode)
- No Redux or Context API; local component state or hooks sufficient for current scope

**Styling:**
- SCSS is the primary styling approach (`src/styles/`)
- `style.scss` is the main entry point; it imports utilities, light-mode, and dark-mode partials
- Flexbox layout: `#root` uses `flex-flow: column` to arrange header/content/footer
- Material-UI components receive CSS overrides via SCSS (e.g., `.MuiPaper-elevation4`)
- Dark mode handled via separate SCSS files; mode toggling applies class-based theming

## Key Conventions

**Component naming:**
- React components are PascalCase (e.g., `Navbar.js`, `Footer.js`)
- Pages are lowercase with `.js` extension (e.g., `home.js`, `about.js`)

**Folder structure:**
- `src/pages/` - Page-level components that map to routes
- `src/components/` - Reusable UI components
- `src/styles/` - SCSS files; utility/theme-related styles
- `src/scripts/` - Utility/helper functions (e.g., dark mode utilities)
- `public/` - Static assets served from root

**Class names:**
- Use kebab-case for CSS classes (e.g., `.nav-container`, `.toggle-container`)
- Utility prefix: `.util-` for layout/spacing utilities (e.g., `.util-nav-container-left`)
- Semantic row classes: `.row.header`, `.row.content`, `.row.footer`

**File structure for pages:**
- Each page file is a simple functional component exporting default
- Pages receive route parameters via `useParams()` (React Router v6)
- No layout props needed—Navbar and Footer render globally

**Responsive design:**
- Use Material-UI's `useTheme()` and `useMediaQuery()` for breakpoint detection
- Example: `useMediaQuery(theme.breakpoints.down("md"))` for mobile layout detection
- Mobile nav uses `DrawerComponent`; desktop uses horizontal nav links

**Fonts:**
- Custom font imported: `src/fonts/FloodStd/FloodStd.otf`
- Adobe Typekit font loaded via URL in `style.scss`

**Testing setup:**
- Jest is pre-configured (via CRA); tests run with `npm test`
- Test file pattern: `*.test.js` co-located with component or in same folder
- `setupTests.js` is already configured for React Testing Library

**Deployment:**
- Deployed to GitHub Pages via `gh-pages` package
- Homepage is set to `https://fothergill.dev` in `package.json`
- Build output goes to `build/` folder (gitignored)
