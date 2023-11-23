This is FlixFlex, a movie preview website which uses [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Technology Stack:

React, Next.js14, TypeScript, TailwindCSS, Clerk, MongoDB

## Development Process and Design Choices:

# React:

React is a JavaScript library for building user interfaces. It is a library that allows you to create reusable UI components and manage their state and behavior. I have used for this project to take advantage of the various libraries and react ecosystem. For example, I have used Nextjs as a react framework.

# Next.js:

Next.js is a React framework. It is designed to be fast, performant, and flexible, making it a great choice for building modern web applications. Nextjs also provides a wide range of features and tools to help you develop modern web applications.

In this application, we has used a mix of server rendering, static generation, and client-side rendering.

The server rendering is for the initial load of the page when the user land for the first time, which gives a better user experience and faster page load because of static generation and nextjs cache features that saves the data in the server and returns the data when the user requests the page again.

The client-side rendering is for the page to load for its first time, which gives a better user experience and interactive experience, which also works very well to display a quick search result at real time when and update each time the movies has changed the site.

This design pattern assures that the SEO is optimized for the application.

# Typescript:

Nextjs give the choice for using Typescript instead of JavaScript, which is a powerful language that has a lot of features and advantages. The advantage of using typescript is that it is very easy to write and maintain code and keep track of the code. Including the typescript features, like the type inference and the strict mode.

# TailwindCSS:

TailwindCSS is a utility-first CSS framework that provides a set of pre-designed classes that can be used to style your website. I have used tailwindcss for styling the application to speedrun the workflow and give it a modern design with minimal and less clutter because of the various css files.

# Clerk:

Clerk has been used for user authentication and authorization, which is very useful for user authentication and authorization. Clerk provide a lot of utility functions and features to help build a secure and user-friendly application in addition to flexibly and ability to change or remove different login methods.

# MongoDB:

For a mini-project such as this, mongodb has been used as the database.

MongoDB has been used for the database, which is very useful for storing and retrieving data. The various CRUD operations are provided by MongoDB and have been written for the user and the logic of adding favorite movies and series. Although the mongoDB is a NoSQL database, it is very easy to implement and use and sufficient for this project.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
