export type NavLink = {
  label: string
  href: string
}

export type Stat = {
  value: string
  label: string
}

export type Fact = {
  label: string
  value: string
}

export type StackGroup = {
  group: string
  items: string[]
}

export type Project = {
  title: string
  kind: string
  year: string
  summary: string
  detail: string
  tags: string[]
  links: { label: string; href: string }[]
}

export type Role = {
  title: string
  company: string
  period: string
  summary: string
  highlights: string[]
}

export type Site = {
  name: string
  monogram: string
  role: string
  availability: string
  tagline: string
  email: string
  location: string
  nav: NavLink[]
  socials: NavLink[]
  stats: Stat[]
  about: {
    lead: string
    paragraphs: string[]
    facts: Fact[]
  }
  stack: StackGroup[]
  projects: Project[]
  experience: Role[]
}

export const site: Site = {
  name: 'James Carter',
  monogram: 'JC',
  role: 'Fullstack Developer',
  availability: 'Available for new work',
  tagline:
    'I build fast, reliable web products end to end — from the database schema to the last pixel of the interface.',
  email: 'hello@jamescarter.dev',
  location: 'Remote · CET',
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Work', href: '#projects' },
    { label: 'Experience', href: '#experience' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Email', href: 'mailto:hello@jamescarter.dev' },
  ],
  stats: [
    { value: '3+', label: 'Years shipping web products' },
    { value: '20+', label: 'Features & projects delivered' },
    { value: '99', label: 'Median Lighthouse score' },
  ],
  about: {
    lead: 'Product-minded engineer who owns features from design to deploy.',
    paragraphs: [
      'I started out building interfaces and kept going until the database, because the best products are shaped by the people who understand the whole stack. Today I spend my time between TypeScript on the client, Node on the server, and the unglamorous work in between: schemas, caching, observability, and CI.',
      'I care about the details users never consciously notice — a page that loads instantly, a form that never loses input, an animation that confirms rather than delays. That care is what makes software feel trustworthy.',
      'Outside of client work I write small tools, contribute to open source, and experiment with WebGL because rendering something in real time is still the most fun a browser can have.',
    ],
    facts: [
      { label: 'Based in', value: 'Remote · CET' },
      { label: 'Focus', value: 'Product engineering' },
      { label: 'Currently', value: 'Senior fullstack at Northwind Labs' },
      { label: 'Open to', value: 'Full-time & select freelance' },
    ],
  },
  stack: [
    {
      group: 'Frontend',
      items: ['React', 'TypeScript', 'Next.js', 'Vite', 'Motion', 'Three.js', 'CSS Architecture'],
    },
    {
      group: 'Backend',
      items: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'GraphQL', 'REST'],
    },
    {
      group: 'Infra & Quality',
      items: ['Docker', 'AWS', 'GitHub Actions', 'Vercel', 'Playwright', 'Vitest', 'Sentry'],
    },
  ],
  projects: [
    {
      title: 'Atlas Analytics',
      kind: 'SaaS platform',
      year: '2025',
      summary: 'Multi-tenant analytics dashboard streaming millions of events per day.',
      detail:
        'Designed the event ingestion pipeline and the charting layer. Row-level security keeps tenant data isolated, and the UI stays at 60fps while streaming live updates over WebSockets.',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets'],
      links: [
        { label: 'Live', href: 'https://example.com' },
        { label: 'Code', href: 'https://github.com/' },
      ],
    },
    {
      title: 'Syncspace',
      kind: 'Collaboration tool',
      year: '2024',
      summary: 'Realtime collaborative editor with presence, cursors and offline merge.',
      detail:
        'Built on a CRDT document model so edits merge without a central lock. Presence and cursors are broadcast over a shared Redis channel, and the client reconciles after reconnecting.',
      tags: ['Next.js', 'Yjs', 'Redis', 'WebRTC', 'Prisma'],
      links: [
        { label: 'Live', href: 'https://example.com' },
        { label: 'Code', href: 'https://github.com/' },
      ],
    },
    {
      title: 'Northwind Commerce',
      kind: 'Headless storefront',
      year: '2024',
      summary: 'Storefront serving 40k monthly orders with sub-second page loads.',
      detail:
        'Rebuilt a legacy shop as a headless storefront with edge caching and Stripe checkout. Largest Contentful Paint dropped from 3.4s to 0.9s and conversion rose 18%.',
      tags: ['React', 'Node.js', 'Stripe', 'Tailwind', 'Vercel'],
      links: [
        { label: 'Live', href: 'https://example.com' },
        { label: 'Code', href: 'https://github.com/' },
      ],
    },
  ],
  experience: [
    {
      title: 'Senior Fullstack Developer',
      company: 'Northwind Labs',
      period: '2024 — Present',
      summary: 'Own the core product surface: analytics, billing and the design system.',
      highlights: [
        'Led the migration to a typed API layer, cutting integration bugs by half.',
        'Introduced visual regression and end-to-end tests into CI.',
        'Mentor two developers on frontend architecture and performance.',
      ],
    },
    {
      title: 'Fullstack Developer',
      company: 'Brightpath Studio',
      period: '2023 — 2024',
      summary: 'Shipped client platforms from discovery through launch.',
      highlights: [
        'Delivered six production apps across fintech and logistics.',
        'Built a reusable component library adopted by the whole team.',
        'Cut average API response time from 800ms to 180ms.',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Freelance',
      period: '2022 — 2023',
      summary: 'Interfaces and marketing sites for early-stage startups.',
      highlights: [
        'Partnered directly with founders on scope, design and delivery.',
        'Consistently shipped Lighthouse scores above 95.',
      ],
    },
  ],
}
