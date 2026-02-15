# Thesinova Website

Modern, conversion-focused “service showcasing + booking” website built with Next.js App Router, TypeScript, Tailwind CSS, Prisma, React Hook Form, and Zod.

## 1) Information Architecture (text diagram)

```text
Home
├── Services
│   ├── Service Details (/services/[slug])
│   └── Booking CTA
├── Booking (multi-step wizard)
│   ├── Service selection
│   ├── Package selection
│   ├── Date/time
│   ├── Client details
│   ├── Payment option (Paystack / Invoice)
│   └── Confirmation email
├── Portfolio
├── About
├── Contact
└── Legal
```

## 2) UI Component Plan + Brand Color Usage

- **Layout shell**: sticky header + footer, clean spacing, strong hierarchy.
- **Buttons**:
  - Primary: Indigo `#4F46E5` + white text.
  - Outline secondary: Indigo border/text.
  - Premium accent: Soft Gold `#C8A74E` outline/fill.
- **Cards**: rounded 2xl, subtle shadow, premium badges in Soft Gold.
- **Typography**: Inter, bold headlines, readable body text.
- **Theme**:
  - Dark (default): Midnight Blue `#0B1F3B` background, card navy surfaces, Cool White + Slate text.
  - Light: white background, Midnight typography, Indigo interactions.
- **Booking UX**: 4-step wizard with clear progress chips and validation.

## 3) Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + reusable UI components (shadcn-style approach)
- React Hook Form + Zod validation
- Prisma + SQLite (local dev)
- Email: Resend or Nodemailer (environment-driven)
- Paystack: environment-driven initialization route and redirect simulation

## 4) Environment variables

Create `.env.local` (optional for SQLite local dev; schema already defaults to `file:./dev.db`):

```env
PAYSTACK_PUBLIC_KEY="pk_test_xxx"
PAYSTACK_SECRET_KEY="sk_test_xxx"
PAYSTACK_BASE_URL="https://checkout.paystack.com"
RESEND_API_KEY=""
SMTP_HOST=""
SMTP_PORT="587"
SMTP_USER=""
SMTP_PASS=""
FROM_EMAIL="hello@thesinova.com"
```

## 5) Setup

```bash
npm install
npm run db:generate
npm run db:push
npm run dev
```

Visit `http://localhost:3000`.

## 6) Booking flow (local)

1. User selects service + package.
2. User picks date/time and submits details.
3. `POST /api/bookings` validates with Zod and saves with Prisma.
4. Email is sent via Resend or SMTP if configured.
5. Paystack option returns redirect URL simulation; invoice option returns booking confirmation.

## 7) Security + SEO notes

- Security headers configured in `next.config.mjs`.
- Metadata configured in root layout for SEO baseline.
- Accessible contrast and semantic structure used across pages.
