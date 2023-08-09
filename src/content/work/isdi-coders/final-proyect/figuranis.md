---
title: Work | FIGURAniS
headerTitle: FIGURAniS
publishDate: 2023-06-17
dataAos: "flip-down"
description: FIGURAniS is an anime figurine collectibles management application. With FIGURAniS, you can read, add, edit, and delete anime figures from your collection.
links:
  [
    {
      label: "FRONTEND",
      href: "https://github.com/RubenRaMar/Figuranis",
      icon: "github-logo",
    },
    {
      label: "BACKEND",
      href: "https://github.com/RubenRaMar/Figuranis-API",
      icon: "github-logo",
    },
    {
      label: "FIGMA",
      href: "https://www.figma.com/file/162SkmxBeZ8VRPLiFPcY5C/Ruben-Ramirez-Final-Project-202304-bcn?type=design&node-id=54%3A361&mode=design&t=OwbVpZkXhJ74mG7x-1",
      icon: "figma-logo",
    },
    { icon: "globe", label: "DEMO", href: "https://figuranis.netlify.app" },
  ]
headerImage:
  {
    src: /images/works/figuranis/miniature.webp,
    alt: Portada con el logo de Figuranis y la pagina de inicio de fondo.,
  }
images:
  [
    {
      src: /images/works/figuranis/miniature-carrusel.webp,
      alt: Portada con el logo de Figuranis y la pagina de inicio de fondo.,
    },

    {
      src: /images/works/figuranis/details.webp,
      alt: Pagina de detalle le una figura con imagen y varios datos.,
      title: "Details",
    },

    {
      src: /images/works/figuranis/home.webp,
      alt: Página de inicio de figuranis con varias figuras con images y unos pocos datos.,
      title: "Home",
    },
    {
      src: /images/works/figuranis/sonarcloud.webp,
      alt: Datos de SonarCloud.,
      title: "SonarCloud",
    },

    {
      src: /images/works/figuranis/figma.webp,
      alt: Diseño creado con figma para crear la aplicación Figuranis.,
      title: "Diseño en figma",
    },

    {
      src: /images/works/figuranis/modify&add.webp,
      alt: Muesta de los formularios para crear y modificar figuras.,
      title: "Modify & Add",
    },

    {
      src: /images/works/figuranis/login.webp,
      alt: Página para loguearse a la aplicación Figuranis.,
      title: "Login",
    },
  ]

tags:
  [
    { competency: Backend },
    { competency: Frontend },
    { competency: TypeScript },
    { competency: MERN },
    { competency: SPA },
    { competency: CRUD },
    { competency: CI/CD },
    { competency: Git },
    { competency: GitHub },
    { competency: Vitest },
    { competency: Jest },
    { competency: Supertest },
    { competency: React Testing Library },
  ]
---

<article class="work-informations with-background-image">
  <span class="work-informations__title">Key Features</span> 
  <span class="section-divider"></span>
  <p data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom" class="work-informations__description"><span class="keyword">FIGURAniS</span> is built using the SPA (Single Page Application) architecture pattern to provide a seamless and uninterrupted user experience. Additionally, users can enjoy various features that facilitate the management of their <span class="keyword">anime figure</span> collection. Some of the highlighted features include:</p>
  <ul class="work-informations__list">
    <li class="list__information">
      <span class="information__title">Secure Authentication</span>
      <p data-aos="zoom-in" data-aos-anchor-placement="top-bottom" class="information__description">A robust authentication system has been implemented to ensure secure access to the platform. To achieve this, <span class="keyword">JSON Web Tokens (JWT)</span> are used to handle user authentication and passwords are protected using the <span class="keyword">bcrypt.js</span> library, which utilizes the <span class="keyword">bcrypt</span> hashing algorithm to securely store passwords and prevent security vulnerabilities.</p>
    </li>
    <li class="list__information">
      <span class="information__title">Informative Details</span>
      <p data-aos="zoom-in" data-aos-anchor-placement="top-bottom" class="information__description">The page offers an extensive list of <span class="keyword">anime figures</span> with informative details. To achieve this, <span class="keyword">Axios</span> is used to make <span class="keyword">HTTP</span> requests to the backend <span class="keyword">API</span> and fetch the necessary data to display in the interface.</p>
    </li>
    <li class="list__information">
      <span class="information__title">Intuitive Operations</span>
      <p data-aos="zoom-in" data-aos-anchor-placement="top-bottom" class="information__description"><span class="keyword">FIGURAniS</span> allows users to easily add, delete, and modify <span class="keyword">figures</span> in their collection through intuitive forms, significantly improving the management of the <span class="keyword">anime figure</span> collection.</p>
    </li>
    <li class="list__information">
      <span class="information__title">User-Friendly Notifications</span>
      <p data-aos="zoom-in" data-aos-anchor-placement="top-bottom" class="information__description">Error and success notifications have been implemented to provide clear and user-friendly information when using the platform. This ensures a smooth and confusion-free user experience.</p>
    </li>
    <li class="list__information">
      <span class="information__title">Our Commitment</span>
      <p data-aos="zoom-in" data-aos-anchor-placement="top-bottom" class="information__description">A continuous effort has been made to provide the best possible experience to users. We strive to maintain a high level of <span class="keyword">Performance</span>, <span class="keyword">Accessibility</span>, <span class="keyword">Best practices</span>, and <span class="keyword">SEO</span>, supported by tools such as <span class="keyword">Lighthouse</span> and <span class="keyword">SonarCloud</span>.</p>
    </li>
  </ul>
</article>

<article class="work-informations">
  <span class="work-informations__title">Technologies Used</span>
  <span class="section-divider"></span>
  <p data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom" class="work-informations__description"><span class="keyword">FIGURAniS</span> was built using the <span class="keyword">MERN</span> stack (<span class="keyword">MongoDB</span>, <span class="keyword">Express.js</span>, <span class="keyword">React</span>, and <span class="keyword">Node.js</span>), ensuring an efficient and scalable application. Additionally, for the frontend, <span class="keyword">Redux Toolkit</span> was used to manage the global state of the application, making it easier to handle shared data between components. <span class="keyword">React Router Dom</span> was also used to manage routes and navigation between different pages of the <span class="keyword">SPA</span>.</p>
</article>

<article class="work-informations with-background-image  with-background-image--variant">
  <span class="work-informations__title">Testing and Deployment</span>
  <span class="section-divider"></span>
  <p data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom" class="work-informations__description">Testing plays a crucial role in <span class="keyword">FIGURAniS</span> to ensure software quality. In the frontend, <span class="keyword">Vitest</span> and <span class="keyword">React Testing Library</span> were used to write and execute unit tests for UI, global state, and hooks, ensuring the solid functioning of components and user interface logic. In the backend, <span class="keyword">Jest</span> was used for unit tests, validating server functions and logic. Additionally, <span class="keyword">Supertest</span> was used for integration testing, ensuring that <span class="keyword">API</span> requests and responses behaved as expected.</p>
  <p data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom" class="work-informations__description">To deploy <span class="keyword">FIGURAniS</span>, <span class="keyword">Netlify</span> was used for the frontend and <span class="keyword">Render</span> for the backend, ensuring a smooth and efficient deployment in production.</p>
</article>

<article class="work-informations with-background-image">
  <span class="work-informations__title">Conclusion</span>
   <span class="section-divider"></span>
  <p data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom" class="work-informations__description"><span class="keyword">FIGURAniS</span> is a comprehensive and well-designed platform that provides a unique and immersive experience for managing <span class="keyword">anime figure</span> collections. With the use of the mentioned frameworks and tools, an efficient, scalable application with a user-friendly interface has been created for all anime enthusiasts. I am excited to share <span class="keyword">FIGURAniS</span> with other anime lovers so they can manage their <span class="keyword">collectible figures</span> and enjoy an unparalleled experience on this platform.</p>
</article>
