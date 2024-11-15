# Full Stack Project

A full-stack web application built with **Next.js 14**, **Drizzle ORM**, and **PostgreSQL**. This project aims to demonstrate a modern tech stack for creating scalable and efficient web applications.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project leverages **Next.js** as the frontend and backend framework, **Drizzle ORM** for seamless database interaction, and **PostgreSQL** as the database. With this setup, the application is optimized for both server-rendered and static sites, ensuring fast performance and scalability.

## Features

- **Full-Stack**: Both frontend and backend are handled with Next.js.
- **Database Integration**: Uses Drizzle ORM to interact with PostgreSQL.
- **Modular and Scalable**: Clean architecture and easy-to-understand structure.
- **TypeScript**: Ensures type safety across the application.
- **REST API**: Easily extensible for additional endpoints and features.

## Tech Stack

- **Next.js** 14
- **Drizzle ORM**
- **PostgreSQL**
- **TypeScript**
- **Tailwind CSS** (Optional, for styling)

## Setup & Installation

To set up and run the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-project-name.git
   cd your-project-name
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   Create a `.env.local` file in the root directory and add the following:

   ```plaintext
   DATABASE_URL=postgresql://username:password@localhost:5432/database_name
   ```

4. **Run database migrations** (if any):

   ```bash
   npx drizzle-kit migrate
   ```

5. **Start the development server**:

   ```bash
   npm run dev
   ```

   The app should now be running on `http://localhost:3000`.

## Usage

- **Development**: Run `npm run dev` to start the Next.js development server.
- **Build**: Run `npm run build` to build the project for production.
- **Start**: Run `npm start` to start the production server.

## Environment Variables

| Variable       | Description                  |
| -------------- | ---------------------------- |
| `DATABASE_URL` | PostgreSQL connection string |

## Project Structure

```plaintext
├── components         # Reusable components
├── pages              # Next.js pages
├── public             # Static assets
├── lib                # Utility functions and helper files
├── prisma             # Database schema and ORM configurations
├── styles             # Global and component-specific styles
└── .env.local         # Environment variables
```

## Screenshots

![Project Screenshot](./public/img1.png)

![Project Screenshot](./public/img2.png)

![Project Screenshot](./public/img3.png)

![Project Screenshot](./public/img4.png)

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1.Fork the repository.
2.Create a new branch (git checkout -b feature/YourFeature).
3.Make your changes.
4.Commit your changes (git commit -m 'Add new feature').
5.Push to the branch (git push origin feature/YourFeature). 6. Open a pull request.
