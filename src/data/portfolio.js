import avatarTousif from "../assets/avatars/tousif.jpg";
import avatarRaza from "../assets/avatars/raza.jpg";
import avatarDeepware from "../assets/avatars/deepware.jpg";
import avatarBlackrobe from "../assets/avatars/blackrobe.jpg";
import avatarBetwizard from "../assets/avatars/betwizard.jpg";
import avatarDigitalClads from "../assets/avatars/digital-clads.jpg";
import avatarCrecent from "../assets/avatars/crecent.jpg";
import reactLogo from "../assets/react.png";
import traitShop from "../assets/traits/shop.jpg";
import traitRealtime from "../assets/traits/realtime.jpg";
import traitStack from "../assets/traits/stack.jpg";
import traitPuzzle from "../assets/traits/puzzle.jpg";

export const RESUME_URL =
  "https://cdn.sanity.io/files/emwcwzek/production/3cb1a1d003174ab3add86815f033b2db8adec951.pdf";

export const heroChips = [
  {
    className: "c1",
    src: "https://cdn.sanity.io/images/emwcwzek/production/5e243953cc43f61c12eb20ec49ef43ed72fc255a-512x512.png?w=96",
  },
  {
    className: "c2",
    src: reactLogo,
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
    title: "Shopware plugins",
    text: "Storefront features, payments, and the admin screens around them.",
    image: traitShop,
    alt: "A shop display with a glowing card",
  },
  {
    title: "Real-time systems",
    text: "Queues, sockets, and dashboards that stay in sync.",
    image: traitRealtime,
    alt: "An abstract live dashboard",
  },
  {
    title: "Full-stack",
    text: "React, Next.js, Node.js, and Symfony, from the page to the API.",
    image: traitStack,
    alt: "A laptop on a tidy desk",
  },
  {
    title: "Problem solver",
    text: "I stay with the awkward bug until the product actually works.",
    image: traitPuzzle,
    alt: "Puzzle pieces fitting together",
  },
];

export const filters = [
  { id: "all", label: "All" },
  { id: "shopware", label: "Shopware" },
  { id: "next", label: "Next.js" },
  { id: "react", label: "React" },
  { id: "other", label: "Tools and apps" },
];

export const projects = [
  {
    "category": "next",
    "tag": "Next.js",
    "title": "BetWizard",
    "description": "Distributed Node.js and Next.js system using BullMQ and Redis that monitors Polymarket and Kalshi around the clock. Multi-stage workers and atomic fan-out detect whale movements and push real-time volatility alerts to thousands of concurrent users.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/027c1a809408a7763f4f4bb3c6e2c472a0bd665b-1200x800.png?w=900",
    "alt": "BetWizard thumbnail",
    "pills": [
      "Next.js",
      "BullMQ",
      "Redis"
    ],
    "details": {
      "summary": "A Next.js prediction-market analytics app for Polymarket and Kalshi, backed by a separate Node scheduler that runs BullMQ workers for whale scans, arbitrage and alerts.",
      "challenge": "Scanning every live trade on two venues for whales without overlapping runs, hammering rate-limited APIs, or losing trades when a venue fails mid-scan.",
      "solution": "The scheduler uses a Redis lock with a heartbeat, a per-venue circuit breaker with backoff, a stored high-water mark that only advances when nothing was lost, and row caps and retention.",
      "highlights": [
        "Live whale scan across Polymarket and Kalshi feeds with a minimum trade size, daily caps and Redis pause switch",
        "Cross-platform event matching with fuzzy scoring plus arbitrage detection between venues",
        "Separate BullMQ workers for alert evaluation, daily and weekly digests, movers and trader follows",
        "Scheduler routes protected by a constant-time shared-secret check, with a signed token for the whale stream"
      ],
      "stack": [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express",
        "BullMQ",
        "Redis"
      ]
    }
  },
  {
    "category": "next",
    "tag": "Next.js",
    "title": "Blackrobe Dashboard",
    "description": "Next.js control hub for the Blackrobe chatbot plugin. Merchants manage their account, connected stores, chatbot styling and subscriptions in one place.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/685e19c7d7e87fc6c7567c0b261d991573d76c8e-1200x800.png?w=900",
    "alt": "Blackrobe Dashboard thumbnail",
    "pills": [
      "Next.js",
      "Stripe",
      "BullMQ"
    ],
    "details": {
      "summary": "A Next.js SaaS dashboard in app.deepomate where merchants connect Shopware, Shopify or Magento stores, manage plans and tickets, and customize the chatbot.",
      "challenge": "Keeping Stripe subscription state correct under duplicate, out-of-order and failing webhook deliveries.",
      "solution": "The webhook verifies signatures against multiple secrets, skips events already recorded by id, retries with exponential backoff, and returns 200 for unrecoverable errors so Stripe stops retrying.",
      "highlights": [
        "Per-platform API routes for Shopware, Shopify and Magento (analyze, orders, returns, tickets, proactive)",
        "Intent classifier on an OpenAI-compatible LLM endpoint routes questions to sub-endpoints",
        "Dashboard with plans, store management, a large store customization page, tickets and admin user list",
        "Stripe checkout, customer portal, subscription sync with Redis cache invalidation, and BullMQ email queue"
      ],
      "stack": [
        "Next.js 15",
        "TypeScript",
        "MongoDB",
        "Mongoose",
        "NextAuth",
        "next-intl"
      ]
    }
  },
  {
    "category": "shopware",
    "tag": "Shopware",
    "title": "AI Shop Chatbot",
    "description": "Blackrobe AI chatbot plugin for Shopware and Shopify. It assists shoppers and creates support tickets for returns and order cancellations.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/8a24924d7151ac4fe32392ad686cad04cb30af3c-1200x800.png?w=900",
    "alt": "AI Shop Chatbot thumbnail",
    "pills": [
      "Shopware",
      "Shopify",
      "Symfony"
    ],
    "link": "https://store.shopware.com/en/deepw67892387757/blackrobe-chat-ai-support-agent-for-e-commerce.html",
    "details": {
      "summary": "Blackrobe AI shopping assistant delivered as a Shopware storefront plugin and a Shopify theme app extension, both calling a hosted analyze API.",
      "challenge": "Giving one chat widget real shop context on each platform, including page type, customer identity and store language, without exposing store credentials in the browser.",
      "solution": "Shopware page-loaded subscribers and a customer-id endpoint feed context to the widget, which posts to a hosted intent API. The Shopify app exchanges its access token with the backend server side.",
      "highlights": [
        "Shopware subscriber covers product, listing, cart, checkout, account and order page events",
        "Widget sends page context, sales channel, language and customer id with each question",
        "Product answers render in a carousel; interface has English and German translations",
        "Shopify theme app embed detects product and cart pages and the app stores the connection by email"
      ],
      "stack": [
        "PHP",
        "Shopware 6 plugin",
        "JavaScript",
        "Twig",
        "Shopify React Router app",
        "Liquid theme app extension"
      ]
    }
  },
  {
    "category": "shopware",
    "tag": "Shopware",
    "title": "Coinbase Payments Plugin",
    "description": "Shopware plugin for crypto payments through Coinbase Commerce, with webhook-driven order status updates.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/b94fbf0053f33f2d94e301d054b7eeb356dec1cf-1200x800.png?w=900",
    "alt": "Coinbase Payments Plugin thumbnail",
    "pills": [
      "Shopware",
      "Symfony",
      "Webhooks"
    ],
    "link": "https://store.shopware.com/en/deepw63847264259m/coinbase-commerce-integration.html",
    "details": {
      "summary": "A Shopware 6 plugin that adds Coinbase Commerce crypto checkout and a webhook endpoint that updates order transaction state.",
      "challenge": "Trusting asynchronous payment callbacks safely and mapping Coinbase charge events onto Shopware transaction states for a charge created at checkout.",
      "solution": "The webhook verifies an HMAC-SHA256 signature with a constant-time compare, finds the transaction by stored charge id, and maps charge events to paid, fail or process transitions.",
      "highlights": [
        "Payment handler creates a Coinbase charge and redirects the customer, with a cancel return path",
        "HMAC signature check on the X-CC-Webhook-Signature header",
        "Looks up the order transaction by coinbase_charge_id custom field",
        "Handles Coinbase test webhooks and an admin settings page for configuration"
      ],
      "stack": [
        "PHP",
        "Shopware 6.6",
        "Symfony",
        "Guzzle",
        "Coinbase Commerce API",
        "Vue admin module"
      ]
    }
  },
  {
    "category": "shopware",
    "tag": "Shopware",
    "title": "Cloudflare R2 Plugin",
    "description": "Shopware plugin that manages store media and assets on Cloudflare R2.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/1fb355b28630cc628424f5302e103fd25af65517-1200x800.png?w=900",
    "alt": "Cloudflare R2 Plugin thumbnail",
    "pills": [
      "Shopware",
      "Symfony",
      "Cloudflare R2"
    ],
    "link": "https://store.shopware.com/en/deepw74968633923m/cloudflare-r2-api-integration.html",
    "details": {
      "summary": "A Shopware 6 plugin that stores media on Cloudflare R2 through an S3-compatible Flysystem adapter, with a migration tool for existing files.",
      "challenge": "Replacing Shopware's filesystem with R2 while keeping the shop working if credentials are missing, and moving existing media and thumbnails over safely.",
      "solution": "A filesystem service builds an AsyncAws S3 adapter against the R2 endpoint and falls back to local storage on bad config. A migration service copies media in batches and skips existing files.",
      "highlights": [
        "Flysystem adapter on the account R2 endpoint with local fallback",
        "Bucket and account settings stored AES-256-CBC encrypted with a random IV",
        "Batch migration of media and thumbnail folders with progress logging",
        "Connection test service and a URL generator using the S3 client"
      ],
      "stack": [
        "PHP",
        "Shopware 6.6",
        "Flysystem",
        "AsyncAws S3",
        "Cloudflare R2",
        "Vue admin module"
      ]
    }
  },
  {
    "category": "react",
    "tag": "React",
    "title": "Blackrobe Landing",
    "description": "Animated, responsive landing page for the Blackrobe AI platform, designed and built to explain the product and convert visitors.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/e2fffa223bb4119bc27da48f558106453811b4e1-1200x800.png?w=900",
    "alt": "Blackrobe Landing thumbnail",
    "pills": [
      "React",
      "Animations",
      "Responsive"
    ],
    "details": {
      "stack": [
        "Next.js",
        "next-intl",
        "Tailwind CSS"
      ]
    }
  },
  {
    "category": "next",
    "tag": "Next.js",
    "title": "DeepoMate AI Agents",
    "description": "AI agents for e-commerce that qualify leads and automate customer support, built with Next.js.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/5a6f63b0fca92f7e47298eab556b1fccceaa6aa0-1200x800.png?w=900",
    "alt": "DeepoMate AI Agents thumbnail",
    "pills": [
      "Next.js",
      "OpenAI",
      "Stripe"
    ],
    "details": {
      "summary": "A Next.js SaaS where merchants connect Shopware, Shopify or Magento stores and embed AI assistants for support, returns, orders and personalization, billed through Stripe.",
      "challenge": "Processing Stripe subscription webhooks reliably with duplicate and concurrent deliveries, while distinguishing errors worth retrying from ones that never will succeed.",
      "solution": "Signatures are verified against multiple secrets, events are deduplicated through a unique stored event id with TTL, transient errors return 500 for retry, and permanent errors return 200 after logged exponential backoff.",
      "highlights": [
        "Idempotent Stripe webhook with retries and a TTL-expiring event collection",
        "Per-platform API routes for Shopware, Shopify and Magento covering orders, returns, tickets and products",
        "In-store assistant matches questions to a merchant knowledge base by keywords, then an LLM classifier, then live page text",
        "Customer-aware replies using order history, through the OpenAI SDK pointed at an xAI Grok model"
      ],
      "stack": [
        "Next.js 15",
        "React 18",
        "TypeScript",
        "MongoDB with Mongoose",
        "Redis",
        "BullMQ"
      ]
    }
  },
  {
    "category": "next",
    "tag": "Next.js",
    "title": "DeepoMate",
    "description": "Automation platform website that helps teams become automation builders, built with Next.js.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/8e3d88c6bf1e8f598b4db05cdce41343c52636fa-1200x800.png?w=900",
    "alt": "DeepoMate thumbnail",
    "pills": [
      "Next.js",
      "Tailwind",
      "Multilingual"
    ],
    "details": {
      "summary": "A statically exported German and English marketing site for Deepomate, an industrial process automation company.",
      "challenge": "Serving one static export in two languages across two domains (deepomate.de and deepomate.com) with correct hreflang alternates and structured data.",
      "solution": "Locale dictionaries are lazy-loaded per language, and the sitemap is generated at build time with per-locale domain mapping and alternates for every static path and content slug.",
      "highlights": [
        "Sitemap emits hreflang alternates mapped to separate domains per locale",
        "Typed German and English message dictionaries loaded on demand",
        "Organization and FAQPage JSON-LD generated from localized content",
        "Chat-style contact widget with typing animation that opens a prefilled WhatsApp message"
      ],
      "stack": [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS 4",
        "Radix UI",
        "lucide-react"
      ]
    }
  },
  {
    "category": "next",
    "tag": "Next.js",
    "title": "GameBoba",
    "description": "Multiplayer games site with 20 real-time games including Uno, Ludo, Chess and Carrom.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/98bef77be6448113efb5d77102b17210fdd4de83-1200x800.png?w=900",
    "alt": "GameBoba thumbnail",
    "pills": [
      "Next.js",
      "Node.js",
      "Socket.IO"
    ],
    "details": {
      "summary": "A multiplayer games site with 20 real-time games, public and private rooms, matchmaking, friends, direct messages and presence.",
      "challenge": "Each game needed live state shared fairly between players over sockets, including physics games where clients and server must agree frame by frame, and reconnects mid-match.",
      "solution": "Physics games run a deterministic fixed-step simulation on the server (Table Soccer at 1/240) that the client replays and snaps to. Relay games like Boba Karts validate every message on the server.",
      "highlights": [
        "Server-authoritative deterministic physics with a drift-corrected fixed-rate loop shared by the real-time game runtimes",
        "Socket relay hardening: server stamps the sender id, type allowlist, host-only message types, size cap and per-socket token bucket",
        "Socket.IO connection rate limiting by IP plus Clerk token verification, with guest fallback for unauthenticated sockets",
        "Large backend test suite covering game simulations, integration flows and encodings, plus a two-browser end-to-end script for Table Soccer"
      ],
      "stack": [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Express 5",
        "Socket.IO",
        "Prisma"
      ]
    }
  },
  {
    "category": "next",
    "tag": "Next.js",
    "title": "WhumbleZone",
    "description": "Virtual hangout space to chat, watch videos and play games together online, built with Next.js and Node.js.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/d1e5f48dc4129b85b59a8eb8759db8930e1b9525-1200x800.png?w=900",
    "alt": "WhumbleZone thumbnail",
    "pills": [
      "Next.js",
      "Node.js",
      "WebRTC"
    ],
    "details": {
      "summary": "A watch-together and hangout platform with synced video, voice and camera chat, screen share, whiteboard, study rooms and in-room games.",
      "challenge": "Keeping video playback, chat and WebRTC media consistent across many peers in a room, including late joiners and refreshes, without peers dropping each other's audio.",
      "solution": "The server holds per-room video state with timestamps and replays it to joiners on request. Peer connections use a polite or impolite role split, queued ICE candidates and explicit screen and file stream tracking.",
      "highlights": [
        "Socket events for play, pause, seek, speed and video change, rate limited and access checked, with a request_state call so joiners resync",
        "Mesh WebRTC hook with deterministic polite-peer roles, ICE candidates queued until the remote description is set, and Opus SDP tuning",
        "Study rooms with a shared Pomodoro timer, todos, PDF viewing and whiteboard strokes synced over sockets",
        "Production nginx with long-lived WebSocket proxying, per-route rate limiting and image caching, plus next-intl localization"
      ],
      "stack": [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Express 5",
        "Socket.IO",
        "WebRTC"
      ]
    }
  },
  {
    "category": "next",
    "tag": "Next.js",
    "title": "VimCut",
    "description": "Free browser video editor. Trim, compress, convert and merge with ffmpeg.wasm, no uploads.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/60d032deb504dc2f7c5eb2f06fa2dcaebd385f98-1200x800.png?w=900",
    "alt": "VimCut thumbnail",
    "pills": [
      "Next.js",
      "ffmpeg.wasm",
      "TypeScript"
    ],
    "details": {
      "summary": "A free browser video editor with separate tool pages for trim, compress, convert, GIF, merge, captions and more, processed entirely on the visitor's device.",
      "challenge": "Running heavy video processing in the browser reliably across devices, where multi-thread wasm needs special headers, cores are about 32 MB, and some files or codecs fail.",
      "solution": "A shared ffmpeg.wasm engine loads a multi-thread core with a self-test and a single-thread fallback, caches cores in the Cache API, and tries faster WebCodecs and stream-copy paths first.",
      "highlights": [
        "Stream-copy trim, split and merge via mediabunny when cuts land on keyframes and codecs match, with automatic re-encode otherwise",
        "WebCodecs hardware fast path for conversion that falls back to ffmpeg.wasm on any failure",
        "COOP and COEP headers for SharedArrayBuffer, a patched ffmpeg worker, and ffmpeg cores cached in the Cache API",
        "In-browser Whisper captions in a Web Worker, IndexedDB session resume, and four-language i18n with per-tool static routes"
      ],
      "stack": [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "ffmpeg.wasm (core and core-mt)",
        "mediabunny",
        "WebCodecs"
      ]
    }
  },
  {
    "category": "next",
    "tag": "Next.js",
    "title": "EasyPDFLoad",
    "description": "Free online PDF tools: merge, split, compress, rotate, reorder and convert.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/ff7650da174b34167926056eae0e199878b46808-1200x800.png?w=900",
    "alt": "EasyPDFLoad thumbnail",
    "pills": [
      "Next.js",
      "pdf.js",
      "Multilingual"
    ],
    "details": {
      "summary": "A suite of free PDF tools, such as merge, split, compress, OCR and PDF-to-Word, that process files in the browser without uploads.",
      "challenge": "Doing real document conversion client-side, such as PDF to Excel and Word to PDF, without a server, while keeping text selectable and files private between tools.",
      "solution": "Pure layout functions rebuild tables from pdf.js text positions, and a small JSZip-based xlsx reader and writer avoids a spreadsheet library. Files pass between tools through memory and IndexedDB.",
      "highlights": [
        "Compress recompresses only safe JPEG images inside the PDF, leaving fonts, text and vector content untouched",
        "PDF-to-Excel table detection from text positions, and a custom xlsx reader and writer built on JSZip",
        "One-time file handoff between tools through memory and IndexedDB, never in the URL or localStorage",
        "Four-language routing, a daily IndexNow cron, permanent redirects, and llms.txt and feed routes with unit tests"
      ],
      "stack": [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "pdf-lib",
        "pdfjs-dist",
        "tesseract.js"
      ]
    }
  },
  {
    "category": "next",
    "tag": "Next.js",
    "title": "Audiolar",
    "description": "Privacy-first audio tools in the browser using the Web Audio API, in four languages.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/342437195160b9ba296a6bd702b749fa757a849f-1200x800.png?w=900",
    "alt": "Audiolar thumbnail",
    "pills": [
      "Next.js",
      "Web Audio API",
      "next-intl"
    ],
    "details": {
      "summary": "Privacy-first free audio tools such as cutter, joiner, converters, bass booster and noise reduction that run in the browser with the Web Audio API.",
      "challenge": "Implementing audio effects and format encoders that browsers lack, such as noise reduction, convolution reverb, MP3 and iPhone M4R export, without freezing the page.",
      "solution": "A custom engine implements an FFT spectral gate and overlap-add convolution, MP3 encodes in a worker in acked chunks, and M4R uses native WebCodecs AAC or a lazy-loaded wasm encoder.",
      "highlights": [
        "Spectral-gate noise reduction using a percentile noise floor and FFT, with a Python noisereduce server as an optional alternative",
        "Slowed-plus-reverb via overlap-add FFT convolution with a seeded noise room so renders are repeatable",
        "M4R ringtone files written by a hand-built MP4 muxer, using WebCodecs AAC with a wasm fallback loaded only when needed",
        "MP3 encoding in a Web Worker with chunk acknowledgements, plus four-language next-intl and an extensive engine test file"
      ],
      "stack": [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Web Audio API",
        "WebCodecs",
        "lamejs"
      ]
    }
  },
  {
    "category": "next",
    "tag": "Next.js",
    "title": "SnapVid",
    "description": "SEO-optimised multi-platform video downloader built with Next.js.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/ccbc9494a0189befded6ee05ccd6a9737e0f7806-1200x800.png?w=900",
    "alt": "SnapVid thumbnail",
    "pills": [
      "Next.js",
      "yt-dlp",
      "Tailwind"
    ],
    "details": {
      "summary": "A YouTube, TikTok and Instagram video downloader that fetches metadata and delivers MP4 or MP3 files, with SEO landing pages per platform.",
      "challenge": "Running yt-dlp and ffmpeg on a server for many concurrent users without exhausting resources, leaking temp files, or getting the server IP blocked by the platforms.",
      "solution": "A job queue caps concurrent yt-dlp processes, tracks progress parsed from output, and expires jobs by TTL. Temp directories are deleted when the stream closes, and API routes are rate limited per IP.",
      "highlights": [
        "In-memory job queue with a configurable concurrency cap, queue positions and progress polling",
        "yt-dlp spawned with format selection for MP4 merge and MP3 extraction, parsing percentage output for the UI",
        "Per-IP sliding-window rate limiting on the download and info API routes, returning rate-limit headers",
        "Per-download temp directory removed after streaming or on error, and URL validation against platform host lists"
      ],
      "stack": [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "yt-dlp",
        "ffmpeg",
        "Node child_process"
      ]
    }
  },
  {
    "category": "next",
    "tag": "Next.js",
    "title": "ImgBrisk",
    "description": "Private in-browser image tools, including a HEIC to JPG converter, built with Next.js.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/75dae86f0c27cf2a14ea490d0f8a2d8f504979e0-1200x800.png?w=900",
    "alt": "ImgBrisk thumbnail",
    "pills": [
      "Next.js",
      "Web Workers",
      "Multilingual"
    ],
    "details": {
      "summary": "A multilingual Next.js site of browser-based image tools: HEIC to JPG, PNG and PDF conversion, resize, crop, compress and annotate.",
      "challenge": "Converting HEIC and optimizing PNG files fully client-side without freezing the page or loading heavy WebAssembly code for visitors who only use a simple tool.",
      "solution": "The libheif-based decoder is dynamically imported once and shared, and PNG re-compression runs on a Web Worker pool reading pixels through OffscreenCanvas, with size thresholds deciding when to optimize.",
      "highlights": [
        "HEIC decoder loads on demand, with preload and retry after a failed load",
        "PNG optimizer uses a worker pool, ImageBitmap transfer and automatic pixel-count limits",
        "Lossless EXIF, GPS and XMP stripping by rewriting JPEG and PNG segments, without re-encoding",
        "Content and metadata in four locales (en, de, fr, sv) with an i18n check script and an SEO check script"
      ],
      "stack": [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "next-intl",
        "Tailwind CSS 4",
        "heic-to (libheif WebAssembly)"
      ]
    }
  },
  {
    "category": "next",
    "tag": "Next.js",
    "title": "ByteScaffold",
    "description": "Next.js website for a Shopware 6 agency covering custom stores, migrations and support.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/8f3e79cefb9a1c9b7bde11d7a6dbfb1e89606190-1200x800.png?w=900",
    "alt": "ByteScaffold thumbnail",
    "pills": [
      "Next.js",
      "Shopware",
      "Multilingual"
    ],
    "details": {
      "summary": "A bilingual (English and German) Next.js agency site focused on Shopware development, migration and support services.",
      "challenge": "Serving German pages under translated slugs while keeping English URLs and hreflang correct, since the same path does not exist in both locales.",
      "solution": "A slug map in a dependency-free file is read by next.config to rewrite German URLs to internal routes and redirect old English-slug German URLs, and automatic hreflang headers are disabled in favor of per-page pairs.",
      "highlights": [
        "German slug map for hub and cluster pages, shared by rewrites and 301 redirects",
        "Shopware migration effort calculator with weighted answers, complexity tiers and phase shares",
        "Organization and ImageObject JSON-LD helpers for rich search results",
        "German-only landing pages that return 404 for English and emit no hreflang pair"
      ],
      "stack": [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "next-intl",
        "Tailwind CSS 4",
        "framer-motion"
      ]
    }
  },
  {
    "category": "other",
    "tag": "Desktop",
    "title": "Perchance T2I Desktop",
    "description": "Desktop text-to-image app built with Tauri and Rust.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/ddad3334d3a7411a92347b437f46a5b1fff5ab5b-1200x800.png?w=900",
    "alt": "Perchance T2I Desktop thumbnail",
    "pills": [
      "Tauri",
      "Rust",
      "Vue"
    ],
    "details": {
      "summary": "Tauri, Rust and Vue desktop text-to-image app with style picker, history and an upscaler. Based on the open-source Perchance-T2I-Desktop project, with a custom proxy and styles added.",
      "challenge": "Running the Real-ESRGAN upscaler binary from the webview and reporting live progress, and reaching image backends that block direct browser requests with anti-bot checks.",
      "solution": "A Rust Tauri command writes a temp PNG, spawns the executable on a blocking thread and streams parsed percent output as events to the UI. A local Vite proxy forwards prompts to Pollinations without browser origin headers, and sibling Node and Python prototypes drove Perchance through Playwright.",
      "highlights": [
        "Rust command parses stdout and stderr percentages and emits progress events",
        "GPU listing is parsed from the upscaler help output, with tile size, threads and TTA options",
        "Prompt cleanup clamps size to multiples of 16 and compacts negative prompts for the backend",
        "Pinia stores with a persistence plugin for history, favorites and custom styles"
      ],
      "stack": [
        "Tauri 2",
        "Rust",
        "Vue 3",
        "Pinia",
        "PrimeVue",
        "Vite"
      ]
    }
  },
  {
    "category": "other",
    "tag": "Python",
    "title": "GPT-SoVITS OpenVINO",
    "description": "Voice cloning and text-to-speech running on Intel OpenVINO.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/17134599304ca93cce006e5c5f247eed03274b7f-1200x800.png?w=900",
    "alt": "GPT-SoVITS OpenVINO thumbnail",
    "pills": [
      "Python",
      "OpenVINO",
      "TTS"
    ],
    "details": {
      "summary": "Fork of the open-source GPT-SoVITS voice cloning project that runs inference on Intel OpenVINO. The OpenVINO export work comes from an upstream Intel contribution.",
      "challenge": "Exporting the autoregressive text-to-semantic model, which has a looping key/value-cache decoder, to OpenVINO IR so inference runs without PyTorch.",
      "solution": "The model is split into encoder, first-stage decoder, stage decoder and VITS parts, each converted with ov.convert_model, and the token loop with KV cache and EOS early stop is reimplemented in numpy around compiled models.",
      "highlights": [
        "Export script converts the encoder, two decoder stages, VITS vocoder, SSL and BERT models to IR",
        "OVGptSoVits class compiles the IR models on a chosen device such as CPU",
        "Autoregressive decode loop feeds KV tensors back with EOS and max-length stopping",
        "Model download script and OpenVINO pipeline for text cutting and synthesis added in one upstream-based commit"
      ],
      "stack": [
        "Python",
        "OpenVINO",
        "PyTorch",
        "NumPy",
        "GPT-SoVITS",
        "Gradio WebUI"
      ]
    }
  },
  {
    "category": "other",
    "tag": "Shopify",
    "title": "PolyPay",
    "description": "Shopify payments app built with React Router and Prisma.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/84f987d5d4ac67477c4f83a44c3cbfd39c6789e8-1200x800.png?w=900",
    "alt": "PolyPay thumbnail",
    "pills": [
      "Shopify",
      "React Router",
      "Prisma"
    ],
    "details": {
      "summary": "Shopify embedded app with a React Router server, Prisma session storage and a checkout UI extension. Early stage, built on Shopify's app template.",
      "highlights": [
        "Embedded app auth through shopifyApp with expiring offline access tokens",
        "Prisma session storage with a migration",
        "Checkout UI extension targeting purchase.checkout.block.render that detects wallet payment options",
        "Webhook handlers for app uninstalled and scopes update"
      ],
      "stack": [
        "React Router 7",
        "TypeScript",
        "Prisma",
        "Shopify App Bridge",
        "Shopify checkout UI extensions",
        "Preact"
      ]
    }
  },
  {
    "category": "react",
    "tag": "React",
    "title": "RoofTop",
    "description": "Fully responsive real estate business website built with React, with property search by location, price and type.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/f81cdce1dcb3b6d409bbe8ceff5104752c5cc6e7-1200x800.png?w=900",
    "alt": "RoofTop thumbnail",
    "pills": [
      "React",
      "Context API",
      "Netlify"
    ],
    "link": "https://roof-top-realestate.netlify.app/",
    "details": {
      "summary": "A React real-estate site where visitors filter rental listings by location, rent date, price range and property type.",
      "challenge": "Four independent filters had to combine into one result list, with 'any' defaults, while each dropdown option list is derived from the listing data.",
      "solution": "A context provider holds all filter state and runs a single filter on Search click, with a short spinner delay and a no-match message. Dropdown options are built from the data with a Set.",
      "highlights": [
        "Shared filter state through React context for location, rent date, price and property type",
        "Dropdown options generated from listing data, with 'any' defaults",
        "Routes for home, a sell-property form and a property detail page by id",
        "Responsive card grid (1, 2 or 3 columns) and a mobile menu"
      ],
      "stack": [
        "React 18",
        "React Router 6",
        "Tailwind CSS",
        "Headless UI",
        "react-icons"
      ]
    }
  },
  {
    "category": "react",
    "tag": "React",
    "title": "Nexus AI",
    "description": "Responsive, animated landing page for an AI product, built with React.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/f0d8bd63415ad6ad0eeebf6dd0e36fb72b264d99-1200x800.png?w=900",
    "alt": "Nexus AI thumbnail",
    "pills": [
      "React",
      "Netlify",
      "Responsive"
    ],
    "link": "https://nexus-ai-landing.netlify.app/",
    "details": {
      "stack": [
        "React"
      ]
    }
  },
  {
    "category": "react",
    "tag": "React",
    "title": "Food Zone",
    "description": "Responsive, interactive food ordering site built with Vite and React.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/08a7522ede0571ced556d9a5efd59e5841408c14-1200x800.png?w=900",
    "alt": "Food Zone thumbnail",
    "pills": [
      "Vite",
      "React",
      "Netlify"
    ],
    "link": "https://food-cart-react-js.netlify.app/",
    "details": {
      "stack": [
        "React",
        "Vite"
      ]
    }
  },
  {
    "category": "react",
    "tag": "React",
    "title": "Wellness Medical",
    "description": "Fully responsive healthcare website built with Vite and React.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/9ef8d0ef1fb546b6982e87866e25c01b3660dd2d-1200x800.png?w=900",
    "alt": "Wellness Medical thumbnail",
    "pills": [
      "Vite",
      "React",
      "Netlify"
    ],
    "link": "https://medical-landing-pag-e.netlify.app/",
    "details": {
      "stack": [
        "React",
        "Vite"
      ]
    }
  },
  {
    "category": "next",
    "tag": "Next.js",
    "title": "Travel",
    "description": "Travel destination website built with Next.js, fully responsive with a polished design.",
    "image": "https://cdn.sanity.io/images/emwcwzek/production/86a8b9402b5c4db2dcc25229c86bcdef369317ec-1200x800.png?w=900",
    "alt": "Travel thumbnail",
    "pills": [
      "Next.js",
      "Vercel",
      "Responsive"
    ],
    "details": {
      "stack": [
        "Next.js",
        "React"
      ]
    }
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
    category: "next",
    tag: "Next.js",
    title: "WhatsApp Clone",
    description: "Responsive real-time chat app built with Next.js.",
    image:
      "https://cdn.sanity.io/images/emwcwzek/production/0db5d27cf2cd87a1397a34ff2bcb11b77e5024b1-1280x984.png?w=800",
    alt: "WhatsApp clone screenshot",
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
  }
];

export const skills = [
  {
    name: "MongoDB",
    src: "https://cdn.sanity.io/images/emwcwzek/production/c8915eb12dea2439f6a5c7b1ac032bf391c2b60f-1000x1000.png?w=96",
  },
  {
    name: "Express",
    src: "https://cdn.sanity.io/images/emwcwzek/production/e01a187c64172049fc61c373deb32d4613f1fe7d-96x96.png",
  },
  {
    name: "React",
    src: reactLogo,
  },
  {
    name: "Node.js",
    src: "https://cdn.sanity.io/images/emwcwzek/production/d8c8025b1695a3f14f849b99afc71d917ef40813-480x480.png?w=96",
  },
  {
    name: "Next.js",
    src: "https://cdn.sanity.io/images/emwcwzek/production/88cd77d2989c9fcff91d2c82cd434d16a9a70377-512x512.png?w=96",
  },
  {
    name: "JavaScript",
    src: "https://cdn.sanity.io/images/emwcwzek/production/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png?w=96",
  },
  {
    name: "Redux",
    src: "https://cdn.sanity.io/images/emwcwzek/production/91716227a0183f05eb4c2c846dda4ec6d3ea433c-480x480.png?w=96",
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
    name: "Redis",
    src: "https://cdn.sanity.io/images/emwcwzek/production/25ff803dbf12145645d3c7f9268acb17a06a1759-1600x1200.png?w=96",
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
