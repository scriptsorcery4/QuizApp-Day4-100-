# QuizApp

Welcome to **QuizApp** – a web application for creating, browsing, and participating in quizzes. This project is part of my 100-day challenge, and today is **Day 4/100**. I'm excited to share my progress with you!

## About QuizApp

QuizApp enables users to create, search for, and participate in various quizzes. The application is divided into two main directories: **client** and **server**.

## Tech Stack

This project is built using some of the latest and greatest tools in web development:

- **Client**:
  - **Vite**: For fast and efficient development builds.
  - **React**: For creating a dynamic and responsive user interface.
  - **Tailwind CSS**: For utility-first CSS styling.
  - **shadcn/ui**: For a seamless and polished UI/UX experience.

- **Server**:
  - **Node.js**: For server-side logic and API.
  - **Express**: Web framework for Node.js.
  - **MongoDB**: NoSQL database for storing data.

## Project Structure

- **client**: This directory contains the front-end application built with Vite, React, Tailwind CSS, and shadcn/ui.
- **server**: This directory contains the back-end application built with Node.js, Express, and MongoDB.

## Setup

Before running the application, you need to set up your MongoDB database URL. Create a `.env` file in the root directory of your server and replace `MONGO_URL` with your database URL.

```plaintext
MONGO_URL=your_mongodb_url
```

## Getting Started

Follow these steps to clone the repository and run the application locally:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/scriptsorcery4/QuizApp-Day4-100-.git
    cd QuizApp-Day4-100-
    ```

2. **Set up the client**:

    ```bash
    cd client
    npm install
    npm run dev
    ```

3. **Set up the server**:

    ```bash
    cd ../server
    npm install
    npm run dev
    ```
