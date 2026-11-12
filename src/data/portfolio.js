import avatarTousif from "../assets/avatars/tousif.jpg";
import avatarRaza from "../assets/avatars/raza.jpg";
import avatarDeepware from "../assets/avatars/deepware.jpg";
import avatarBlackrobe from "../assets/avatars/blackrobe.jpg";
import avatarBetwizard from "../assets/avatars/betwizard.jpg";
import avatarDigitalClads from "../assets/avatars/digital-clads.jpg";
import avatarCrecent from "../assets/avatars/crecent.jpg";

export const RESUME_URL =
  "https://cdn.sanity.io/files/emwcwzek/production/3cb1a1d003174ab3add86815f033b2db8adec951.pdf";

export const heroChips = [
  {
    className: "c1",
    src: "https://cdn.sanity.io/images/emwcwzek/production/5e243953cc43f61c12eb20ec49ef43ed72fc255a-512x512.png?w=96",
  },
  {
    className: "c2",
    src: "https://hassan.bytescaffold.com/static/media/react.81ed438b18e24116794d.png",
  },
  {
    className: "c3",
    src: "https://cdn.sanity.io/images/emwcwzek/production/2bb8908964878d41f59a10b8015956c7547a748b-2588x2588.png?w=96",
  },
  {
    className: "c4",
    src: "https://cdn.sanity.io/images/emwcwzek/production/88cd77d2989c9fcff91d2c82cd434d16a9a70377-512x512.png?w=96",
  },
  {
    className: "c5",
    src: "https://cdn.sanity.io/images/emwcwzek/production/d8c8025b1695a3f14f849b99afc71d917ef40813-480x480.png?w=96",
  },
  {
    className: "c6",
    src: "https://cdn.sanity.io/images/emwcwzek/production/25ff803dbf12145645d3c7f9268acb17a06a1759-1600x1200.png?w=96",
  },
];

export const traits = [
  {
    title: "Tech Enthusiast",
    text: "Exploring new technology across Android, AI and image processing.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/4ebd7fc98f0c6158323c6490047eae4f26b2dc67-1000x1000.png?w=500",
    alt: "Robot illustration",
  },
  {
    title: "Visionary",
    text: "Leads with clear goals, recovers fast and learns from every setback.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/ba733a6ba601770990755990c72b052a62f57cbc-626x626.jpg?w=500",
    alt: "Team reaching a summit",
  },
  {
    title: "Full-Stack Developer",
    text: "MERN stack, React, Node.js, MongoDB and RESTful APIs.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/bd5cbf6bbdc10e8243467595a6ee6f6e44ceb5fd-1600x1200.jpg?w=500",
    alt: "Developer at work",
  },
  {
    title: "Problem Solver",
    text: "Analytical, creative and always up for a hard puzzle.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/3dfa9ab583dffbb72fdffb5c74b06b6649f2a99b-626x626.png?w=500",
    alt: "Problem solving illustration",
  },
];

export const filters = [
  { id: "all", label: "All" },
  { id: "shopware", label: "Shopware" },
  { id: "next", label: "Next.js" },
  { id: "react", label: "React" },
];

export const projects = [
  {
    category: "next",
    tag: "Next.js",
    title: "BetWizard — Prediction Market Analytics",
    description:
      "A distributed Node.js / Next.js system using BullMQ and Redis that monitors Polymarket and Kalshi 24/7. Multi-stage workers and atomic fan-out detect whale movements and broadcast real-time volatility alerts to thousands of concurrent users.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/5f51386899ba1826e48053da2581d034f8df2f93-512x512.png?w=600",
    alt: "BetWizard logo",
    logo: true,
    pills: ["Next.js", "BullMQ", "Redis", "WebSockets"],
  },
  {
    category: "next",
    tag: "Next.js",
    title: "Blackrobe Dashboard",
    description:
      "Control hub for the chatbot plugin: merchants manage accounts, connected stores, chatbot styling and subscriptions.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/006da6b3bc7e31612db4adeaaed5592365a41f5c-640x640.webp?w=600",
    alt: "Blackrobe dashboard",
    logo: true,
  },
  {
    category: "shopware",
    tag: "Shopware",
    title: "AI Shop Chatbot",
    description:
      "Blackrobe AI plugin for Shopware and Shopify that assists shoppers and files tickets for returns and cancellations.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/0bf843eb1af2f0448cd2c3d6ad0ef3697b980513-256x256.webp",
    alt: "AI chatbot",
    logo: true,
  },
  {
    category: "shopware",
    tag: "Shopware",
    title: "Cloudflare R2 Plugin",
    description:
      "Shopware plugin that moves media and asset management onto Cloudflare R2.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/b797c302029f99e9c8bf8cd40ef8ff73a473068c-256x256.webp",
    alt: "Cloudflare R2",
    logo: true,
  },
  {
    category: "shopware",
    tag: "Shopware",
    title: "Coinbase Payments Plugin",
    description: "Crypto checkout for Shopware with webhook-driven order updates.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/66161fa8e61d6bc656be72e89d1ded2e0f9f3726-256x256.webp",
    alt: "Coinbase",
    logo: true,
  },
  {
    category: "react",
    tag: "React",
    title: "Blackrobe Landing",
    description: "Animated product landing page for the Blackrobe AI platform.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/972a6e2793310db0c11df45d5e2c8c79bda94334-562x85.png?w=600",
    alt: "Blackrobe wordmark",
    logo: true,
    wide: true,
  },
  {
    category: "react",
    tag: "React",
    title: "Nexus AI",
    description: "Responsive AI product landing page.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/777d42f59eb0a52e78174b2025185bb418dfc607-1280x984.png?w=800",
    alt: "Nexus AI screenshot",
  },
  {
    category: "react",
    tag: "React",
    title: "E-Commerce",
    description:
      "React and Node store with admin controls, Stripe payments and SMTP.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/72232c3265bd127d140ae1dd93cb6b0799ca6115-1280x984.png?w=800",
    alt: "E-commerce screenshot",
  },
  {
    category: "react",
    tag: "React",
    title: "RoofTop",
    description: "Real estate business website with property search.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/8f11cdf7127100a8cced327cb91a379ce6f973b1-1280x984.png?w=800",
    alt: "RoofTop screenshot",
  },
  {
    category: "next",
    tag: "Next.js",
    title: "WhatsApp Clone",
    description: "Responsive real-time chat app built with Next.js.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/0db5d27cf2cd87a1397a34ff2bcb11b77e5024b1-1280x984.png?w=800",
    alt: "WhatsApp clone screenshot",
  },
  {
    category: "next",
    tag: "Next.js",
    title: "Travel",
    description: "Travel destination website with a polished responsive design.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/b962262a1b6797ba9f4e4d079ca4a2ad54a7789f-1280x984.png?w=800",
    alt: "Travel screenshot",
  },
  {
    category: "react",
    tag: "React",
    title: "Wellness Medical",
    description: "Vite + React healthcare website.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/9ede0a53d9f8b42caafb354b44d3e8103b717b1c-1280x984.png?w=800",
    alt: "Wellness Medical screenshot",
  },
  {
    category: "react",
    tag: "React",
    title: "Food Zone",
    description: "Interactive food ordering site built with Vite + React.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/dc447145b4a9258ff3360632d810a2ed6a7d8fae-1280x984.png?w=800",
    alt: "Food Zone screenshot",
  },
  {
    category: "react",
    tag: "React",
    title: "NexGen Tech",
    description: "Animated company portfolio with Web3Forms contact.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/792ced0abe1faf09a7b59316cfd3da141783be20-1280x984.png?w=800",
    alt: "NexGen Tech screenshot",
  },
  {
    category: "html",
    tag: "HTML · CSS",
    title: "Gamics",
    description: "Game store template in HTML, CSS and JavaScript.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/7a40538d3bbc163a326462df2cf9b887845b66d6-1296x736.png?w=800",
    alt: "Gamics screenshot",
  },
];

export const skills = [
  {
    name: "Shopware",
    src: "https://cdn.sanity.io/images/emwcwzek/production/5e243953cc43f61c12eb20ec49ef43ed72fc255a-512x512.png?w=96",
  },
  {
    name: "Symfony",
    src: "https://cdn.sanity.io/images/emwcwzek/production/2bb8908964878d41f59a10b8015956c7547a748b-2588x2588.png?w=96",
  },
  {
    name: "Twig",
    src: "https://cdn.sanity.io/images/emwcwzek/production/54c685ace864af3be217a7298296199afe8dccc6-300x453.png?w=96",
  },
  {
    name: "React",
    src: "https://hassan.bytescaffold.com/static/media/react.81ed438b18e24116794d.png",
  },
  {
    name: "Next.js",
    src: "https://cdn.sanity.io/images/emwcwzek/production/88cd77d2989c9fcff91d2c82cd434d16a9a70377-512x512.png?w=96",
  },
  {
    name: "Node.js",
    src: "https://cdn.sanity.io/images/emwcwzek/production/d8c8025b1695a3f14f849b99afc71d917ef40813-480x480.png?w=96",
  },
  {
    name: "Express",
    src: "https://cdn.sanity.io/images/emwcwzek/production/e01a187c64172049fc61c373deb32d4613f1fe7d-96x96.png",
  },
  {
    name: "MongoDB",
    src: "https://cdn.sanity.io/images/emwcwzek/production/c8915eb12dea2439f6a5c7b1ac032bf391c2b60f-1000x1000.png?w=96",
  },
  {
    name: "Redis",
    src: "https://cdn.sanity.io/images/emwcwzek/production/25ff803dbf12145645d3c7f9268acb17a06a1759-1600x1200.png?w=96",
  },
  {
    name: "Socket.io",
    src: "https://cdn.sanity.io/images/emwcwzek/production/c0941751c096119d67259c2b549f5a90e8c086dd-512x512.png?w=96",
  },
  {
    name: "WebRTC",
    src: "https://cdn.sanity.io/images/emwcwzek/production/4afb481862ec446471d662e360003435bad54409-526x512.png?w=96",
  },
  {
    name: "Redux",
    src: "https://cdn.sanity.io/images/emwcwzek/production/91716227a0183f05eb4c2c846dda4ec6d3ea433c-480x480.png?w=96",
  },
  {
    name: "Tailwind",
    src: "https://cdn.sanity.io/images/emwcwzek/production/b945eb4f577059132d07f35ac087ce31cb092ae1-431x290.png?w=96",
  },
  {
    name: "shadcn/ui",
    src: "https://cdn.sanity.io/images/emwcwzek/production/bc3c0d8107e2c90a71d6277060ea391fae793054-2000x2000.png?w=96",
  },
  {
    name: "JavaScript",
    src: "https://cdn.sanity.io/images/emwcwzek/production/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png?w=96",
  },
  {
    name: "Git",
    src: "https://cdn.sanity.io/images/emwcwzek/production/a804a741fb26f6c236c73086a87cfc9f64106401-480x480.png?w=96",
  },
];

export const experience = [
  {
    year: "2025 — NOW",
    role: "Shopware + Stack Developer",
    detail:
      "Deepware UG · Shopware 6 plugins, AI commerce tools and real-time platforms",
    current: true,
  },
  {
    year: "2024",
    role: "Full-Stack Developer",
    detail: "Digital Clads & Crecent Webs · MERN applications and client platforms",
  },
  {
    year: "2023",
    role: "Full-Stack Developer",
    detail: "NexGen Tech Hub · React and Node.js products for clients",
  },
  {
    year: "2022",
    role: "Web Developer",
    detail: "Freelance · Responsive websites and landing pages",
  },
];

export const testimonials = [
  {
    quote:
      "I've had the pleasure of working with Hassan Raza on several projects, and his dedication to excellence is inspiring. He's a true expert in full-stack web development. And has awesome abilities in react js development as our company portfolio is also built by Hassan Raza.",
    name: "M. Tousif",
    company: "NexGen Tech Hub",
    tag: "Company portfolio",
    initial: "T",
    avatar: avatarTousif,
  },
  {
    quote:
      "Hassan Raza is a genius when it comes to building scalable and efficient web applications. His knowledge of game logics, seat management, and coins management as well admin record of each bet, minute and seat is impressive.",
    name: "Raza",
    company: "IT Hub",
    tag: "Live betting admin",
    initial: "R",
    avatar: avatarRaza,
  },
  {
    quote:
      "We had three Shopware jobs running together: the AI shop chatbot, media on Cloudflare R2, and Coinbase payments. Hassan shipped the plugins so the storefront, the admin, and the webhooks still talked to each other. Merchants were not left with a half-installed extension.",
    name: "Deepware UG",
    company: "Shopware 6 plugins",
    tag: "Shopware",
    initial: "D",
    avatar: avatarDeepware,
  },
  {
    quote:
      "The Blackrobe dashboard is the screen merchants actually open. Accounts, connected stores, chatbot styling, and subscriptions sit in one place, and the landing page matches what the product does.",
    name: "Deepware UG",
    company: "Blackrobe",
    tag: "Dashboard",
    initial: "B",
    avatar: avatarBlackrobe,
  },
  {
    quote:
      "BetWizard has to watch Polymarket and Kalshi all day and push a volatility alert while it is still useful. The worker pipeline on BullMQ and Redis holds up when a lot of people are connected at once.",
    name: "BetWizard",
    company: "Prediction market analytics",
    tag: "Real-time",
    initial: "BW",
    avatar: avatarBetwizard,
  },
  {
    quote:
      "We handed over MERN builds for clients who wanted to see something working, not a slide. The React screens and the Node API came back in a shape we could put in front of the client the same week.",
    name: "Digital Clads",
    company: "Client platforms",
    tag: "MERN",
    initial: "DC",
    avatar: avatarDigitalClads,
  },
  {
    quote:
      "Crecent Webs lives on client sites and landing pages. Hassan built them responsive, wired the forms so the messages actually arrived, and stayed on it when a page needed another pass.",
    name: "Crecent Webs",
    company: "Websites and landing pages",
    tag: "Client work",
    initial: "C",
    avatar: avatarCrecent,
  },
];

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hassan-raza-a05500285",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923095899751",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mianhassan6964",
  },
];
