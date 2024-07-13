# AzizBecha.com 🌟

Welcome to the GitHub repository for AzizBecha.com! 🚀

## Description 📝

AzizBecha.com is a dynamic platform where enthusiasts of 🌐 technology, 🚀 entrepreneurship, 📚 books, and lifestyle converge to explore trends, share insights, collaborate on projects, and discuss a wide range of topics spanning life, business strategies, nature, well-being, and diverse aspects of lifestyle.
Contribution is open to anyone who wants to share his experience and thoughts with the world ✨.

## Technologies Used 💻✨

In this project, I used the famous `Next.js x TailwindCSS` combo for the frontend and the `/api` folder for the backend combined with some libraries and other tools to get an elegant design.

## Goal 🌍📚

Our goal is to empower individuals through knowledge sharing and community engagement. We aim to inspire, educate, and connect like-minded individuals passionate about technology, entrepreneurship, and personal growth.

> "Empower through knowledge. Innovate through collaboration."

## Features 🔍💡

- **Informative Blog**: Access a wide range of articles covering topics from software development to business strategies.
- **Search and Filters**: Utilize advanced filters to find posts by title, author, tags, or date range.
- **Community Engagement**: Engage with a vibrant community through comments and discussions.
- **Responsive Design**: Enjoy a seamless browsing experience across devices.

## Contribution Guide 🛠️

Thank you for your interest in contributing to AzizBecha.com! Your contributions help us grow and improve. Here are some guidelines to get started:

1. **Fork** the repository and clone it locally.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -am 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request. 🚀

Please refer to [sample.md](sample.md) for the Markdown formatting guide.

## API Documentation 🌐

### Usage

- **No API Key Required**: Our API is open for public use without requiring an API key.
- **Goal**: The goal of the posts API is to expand the reach of knowledge by providing easy access to valuable information across various topics.

### Endpoints

- **GET /api/posts**: Retrieve all posts.
- **GET /api/posts/[title]**: Retrieve a specific post by title.
- **GET /api/posts/writer/[writer]**: Retrieve all posts by a specific writer.
- **GET /api/posts/tags/tag1,tag2,tag3**: Retrieve posts containing specified tags.
- **GET /api/posts/daterange/start/end**: Retrieve posts within a specific date range.
- **GET /api/posts/filter**: Apply multiple filters simultaneously.
    ```plaintext
    GET https://www.azizbecha.com/api/posts/filter?title=sxs&tags=asds&startDate=2024-07-24T23%3A00%3A00.000Z&endDate=2024-07-23T23%3A00%3A00.000Z
    ```

### Responses

- **200 OK**: Returns posts data if successful.
- **404 Not Found**: Returns this object if the requested post or endpoint has no data.

    ```json
    {
        "status": 404,
        "error": "Post not found"
    }
    ```

Feel free to explore and contribute to our project. Together, we can make a difference in the world of technology and entrepreneurship! Let's innovate and inspire! 🌟💡

For more information, visit [azizbecha.com](https://www.azizbecha.com). 🌐
