This is FlixFlex, a movie preview website which uses [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Technology Stack:

React, Next.js14, TypeScript, TailwindCSS, Clerk, MongoDB

# Development Process and Design Choices:

## React:

React is a JavaScript library for building user interfaces. It is a library that allows you to create reusable UI components and manage their state and behavior. I have used for this project to take advantage of the various libraries and react ecosystem. For example, I have used Nextjs as a react framework.

## Next.js:

Next.js is a React framework. It is designed to be fast, performant, and flexible, making it a great choice for building modern web applications. Nextjs also provides a wide range of features and tools to help you develop modern web applications.

In this application, we has used a mix of server rendering, static generation, and client-side rendering.

The server rendering is for the initial load of the page when the user land for the first time, which gives a better user experience and faster page load because of static generation and nextjs cache features that saves the data in the server and returns the data when the user requests the page again.

The client-side rendering is for the page to load for its first time, which gives a better user experience and interactive experience, which also works very well to display a quick search result at real time when and update each time the movies has changed the site.

This design pattern assures that the SEO is optimized for the application.

## Typescript:

Nextjs give the choice for using Typescript instead of JavaScript, which is a powerful language that has a lot of features and advantages. The advantage of using typescript is that it is very easy to write and maintain code and keep track of the code. Including the typescript features, like the type inference and the strict mode.

## TailwindCSS:

TailwindCSS is a utility-first CSS framework that provides a set of pre-designed classes that can be used to style your website. I have used tailwindcss for styling the application to speedrun the workflow and give it a modern design with minimal and less clutter because of the various css files.

# Clerk:

Clerk has been used for user authentication and authorization, which is very useful for user authentication and authorization. Clerk provide a lot of utility functions and features to help build a secure and user-friendly application in addition to flexibly and ability to change or remove different login methods.

# MongoDB:

For a mini-project such as this, mongodb has been used as the database.

MongoDB has been used for the database, which is very useful for storing and retrieving data. The various CRUD operations are provided by MongoDB and have been written for the user and the logic of adding favorite movies and series. Although the mongoDB is a NoSQL database, it is very easy to implement and use and sufficient for this project.

## Files Structure:

app/: The folder hold all the main pages that get rendeder by the application.
components/: The folder hold all the components that get rendered by the application.
public/assets/: The folder hold all the assets such as images.
lib/: Hold the functions that are used in the application for connecting to mongodb and an util file that hold some useful side functions.
lib/models/: Hold the models for the database.
lib/actions/: Hold the actions for the database that use the server actions of nextjs and revalidate the pages at change.

## Endpoints:

'/': The main page of the application.
'/movie': The page that displays all the movies.
'/movie/[id]': The page that displays the details of a single movie.
'/tv': The page that displays all the tv-series.
'/tv/[id]': The page that displays the details of a single tv-series.
'/search': The page that displays the search results.
'/favorite': The page that displays the favorites list.

## View the Deployed application:

[Deployed Application](https://soul-ram-c-flix-flex.vercel.app)

# Getting Started Locally:

## Requirements:

### enviroment variables:

TMDB_API_KEY: Get from TMDB.
MONGODB_URI: get from mongodb locally hosted or Atlas.
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: get from clerk.
CLERK_SECRET_KEY: get from clerk.
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

## Install dependencies:

```bash
npm install
```

## Start the development server:

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
