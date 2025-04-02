# Next-Role

A modern web application built with Next.js 15, featuring user-based authentication and a beautiful UI.

## 🚀 Features

- **Modern Tech Stack**
  - Next.js 15
  - React 19
  - TypeScript
  - Tailwind CSS
  - Prisma ORM
  - Clerk Authentication

- **UI Components**
  - Shadcn UI components
  - Responsive design
  - Dark mode support

- **Development Tools**
  - ESLint for code linting
  - TypeScript for type safety
  - React Query for data fetching
  - Zod for schema validation

## 📋 Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn
- A Clerk account for authentication
- A database (configured through Prisma)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/next-role.git
   cd next-role
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:
   ```
   # Add your environment variables here
   ```

4. Initialize the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
next-role/
├── app/              # Next.js app directory
├── components/       # Reusable UI components
├── lib/             # Utility functions and configurations
├── prisma/          # Database schema and migrations
├── public/          # Static assets
├── utils/           # Helper functions
└── assets/          # Project assets
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- João Carvalho - Initial work

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Clerk](https://clerk.com/)
- [Prisma](https://www.prisma.io/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
