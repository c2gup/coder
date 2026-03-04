# Coder

Coder is a modern frontend generator built specifically for Next.js applications. It helps developers quickly scaffold, design, and manage UI components with a focus on speed, scalability, and developer experience.

## Screenshots

<img src="/docs/screenshots/Screenshot 2026-03-04 at 11.45.26 PM.png" alt="Application interface - Main dashboard" width="600"/>

_Application interface - Main dashboard_

<img src="/docs/screenshots/Screenshot 2026-03-04 at 11.46.32 PM.png" alt="Code generation and project management" width="600"/>

_Code generation and project management_

<img src="/docs/screenshots/Screenshot 2026-03-04 at 11.47.05 PM.png" alt="AI-powered development workflow" width="600"/>

_AI-powered development workflow_

<img src="/docs/screenshots/Screenshot 2026-03-04 at 11.47.33 PM.png" alt="User interface and features overview" width="600"/>

_User interface and features overview_

## Features

- AI-powered code interpretation using E2B sandboxes
- User authentication with Clerk
- Project management
- Real-time messaging
- Database persistence with PostgreSQL and Prisma

## Local Development Setup

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd coder
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory with the following variables:

   ```env
   # Database Configuration
   DATABASE_URL=postgresql://username:password@localhost:5432/database_name

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key
   CLERK_SECRET_KEY=sk_test_your_secret_key

   # Google Gemini API
   GEMINI_API_KEY=your_gemini_api_key

   # E2B Sandbox API
   E2B_API_KEY=your_e2b_api_key
   ```

4. **Database Setup**

   Generate Prisma client and run migrations:

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000)

## Environment Variables

### Required Environment Variables

| Variable                            | Description                                     | Where to get                                    |
| ----------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `DATABASE_URL`                      | PostgreSQL connection string                    | Your PostgreSQL database                        |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key for authentication        | [Clerk Dashboard](https://clerk.com)            |
| `CLERK_SECRET_KEY`                  | Clerk secret key for server-side authentication | [Clerk Dashboard](https://clerk.com)            |
| `GEMINI_API_KEY`                    | Google Gemini API key for AI features           | [Google AI Studio](https://aistudio.google.com) |
| `E2B_API_KEY`                       | E2B API key for code sandboxes                  | [E2B Platform](https://e2b.dev)                 |

### Database Configuration Options

For local development, you can use either:

1. **Local PostgreSQL** (recommended for development):

   ```env
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/coder_dev
   ```

2. **Cloud Database** (Neon, Supabase, etc.):
   ```env
   DATABASE_URL=postgresql://user:password@host:port/database?sslmode=require
   ```

### Setting up External Services

#### 1. Clerk Authentication

- Sign up at [clerk.com](https://clerk.com)
- Create a new application
- Copy the publishable and secret keys from the dashboard

#### 2. Google Gemini API

- Go to [Google AI Studio](https://aistudio.google.com)
- Create an API key for Gemini
- Add billing information if required

#### 3. E2B Sandbox API

- Sign up at [e2b.dev](https://e2b.dev)
- Generate an API key from your dashboard

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio for database management
- `npx prisma db push` - Push schema changes to database
- `npx prisma generate` - Generate Prisma client
- `npx inngest-cli@latest dev -u http://localhost:3000/api/inngest` - Run Inngest development server

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── modules/            # Feature modules
└── middleware.js       # Next.js middleware

prisma/
└── schema.prisma       # Database schema

public/                 # Static assets
```

## Database Schema

The application uses PostgreSQL with Prisma ORM. Key models include:

- **User**: User accounts linked to Clerk
- **Project**: User projects
- **Message**: Chat messages with AI

## Troubleshooting

### Common Issues

1. **Database connection errors**
   - Ensure PostgreSQL is running
   - Check DATABASE_URL format
   - Verify database exists

2. **Clerk authentication issues**
   - Verify API keys are correct
   - Check if domain is configured in Clerk dashboard

3. **E2B sandbox errors**
   - Ensure API key is valid
   - Check E2B service status

### Getting Help

- Check the logs in the terminal for detailed error messages
- Ensure all environment variables are properly set
- Verify all external services are configured correctly

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

[Add your license information here]
