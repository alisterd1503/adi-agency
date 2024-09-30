# My Project Title
#### Video Demo: [Watch here](https://youtu.be/BlN6-cuSdwY)
#### Description:

For my final project, I developed a website to promote my Instagram-based video and graphic design business, "Adi Visuals". During my time at university, I founded Adi Visuals to create bespoke videos and posters for student societies and their events. As my work gained traction, I saw the need for an online portfolio to effectively showcase my creative output and promote the services I offer.

This project is a dynamic and responsive website designed to present my portfolio of work, including videos and graphic designs. It serves as a professional space to not only display my creations but also highlight the variety and quality of services provided through Adi Visuals. The website's primary goal is to attract potential clients by offering a seamless user experience and a visually compelling showcase of my content.


### index.html
The `index.html` file serves as the homepage of my website. It is the primary landing page where visitors are introduced to my design agency, ADI Visuals. This page includes a variety of features designed to showcase my services, highlight recent projects, and provide users with easy navigation to other parts of the website. 

#### Functionality:
- **Navigation Bar:**
  - A fixed navbar provides links to key sections: Home, Services (with a dropdown menu), Clients, and Contact Us.
  - Enables easy exploration of services like Video Design, Graphic Design, and Web Design.

- **Interactive Elements:**
  - A scroll animation (powered by `scrollReveal.js`) reveals content smoothly as users scroll, creating a dynamic user experience.
  - A video autoplay in the header delivers an immediate visual impression of my design work.

- **Services and Portfolio Showcase:**
  - A card layout highlights four core services with descriptions and links to more details.
  - Embedded Vimeo videos and image galleries in the "Recent Projects" section showcase my latest work directly on the homepage.

- **Footer Section:**
  - Provides essential links, social media, and contact information, making it easy for users to connect and learn more about my company.

### graphic-designs.html
The `graphic-designs.html` file is dedicated to showcasing the graphic design portfolio of ADI Visuals. This page is focused on presenting a variety of poster designs and demonstrating the agency’s expertise in crafting visually impactful and strategic event promotions.

#### Unique Functionality:
- **Portfolio Display:**
  - The main section features a grid layout where various poster designs are showcased. Each poster has a high-quality image and a title that highlights recent works, such as "Melam 2023" and "Jimikki Poster".
  - The design is visually engaging, with posters arranged side-by-side in a grid, making it easy for users to browse through multiple designs at once.

### video-designs.html
The `video-designs.html` file is focused on showcasing ADI Visuals' video design portfolio. This page presents various video projects, highlighting the agency’s expertise in creating engaging and dynamic visual content.

#### Unique Functionality:
- **Video Portfolio Display:**
  - The main section features a grid layout where video projects are embedded via Vimeo. This platform was chosen for its optimised streaming capabilities, allowing for smooth playback and better management of video quality across different devices.
  - Each video showcases a different project, such as "Kalki 3", "Houseinn", and "Melam Afters". The layout allows users to view multiple video examples with ease, arranged side-by-side in pairs (duo units) for straightforward browsing and consumption.

### web-designs.html
The `web-designs.html` file is intended to showcase the web design services of ADI Visuals. Currently, it is under construction as the agency is in the process of completing its first web design project for a client.

#### Unique Functionality:
- **Coming Soon Section:**
  - The page features a prominent "Coming Soon..." section, indicating to visitors that a portfolio of web design work will be available in the future. This serves to manage expectations while maintaining interest in the agency's services.
  - The header introduces the agency's web design philosophy, emphasising user-centric design and the importance of a seamless online experience, setting the stage for future content.

### our-clients.html
The `our-clients.html` file highlights the partnerships that ADI Visuals has established with various university societies, showcasing the agency's collaborative spirit and commitment to creativity.

#### Unique Functionality:
- **Client Showcase:**
  - This section presents a visually engaging display of logos and images representing the agency's clients. Each logo is linked to its respective Instagram profile, allowing visitors to explore these brands further.
  - The layout features a grid format with images presented side-by-side, making it easy for users to browse through the diverse range of collaborations.

### contact-us.html
The `contact-us.html` page serves as a direct communication channel for potential clients looking to engage with ADI Visuals. It encourages collaboration and project inquiries through a user-friendly contact form.

#### Unique Features:
- **Contact Form:**
  - A structured form allows users to submit their details, including name, email, and type of enquiry (e.g., video design, graphic design, web development).
  - There’s a textarea for users to provide additional information or messages, ensuring clear communication of their needs.
  - The form is designed to be straightforward, requiring essential information while promoting user engagement.

- **Email Integration:**
  - The page includes scripts to facilitate email submissions via EmailJS, making it easy for inquiries to be sent directly to the agency.

## JavaScript Functionality

This project employs two main JavaScript files to enhance user interaction and engagement: **contactForm.js** and **scrollReveal.js**.

### contactForm.js

The `contactForm.js` file manages the functionality of the contact form on the website. It includes the following features:

- **Notification System**: A function `showNotification(message, duration)` displays notifications to users based on the form submission status. Notifications appear with a message, fade out after a specified duration, and hide from view.

- **Form Submission Handling**: An event listener is attached to the contact form, intercepting the submit action. This prevents the default page reload and instead collects user input (name, email, enquiry type, and message).

- **Email Sending**: Utilising EmailJS, the form data is sent to the specified email service. Upon successful sending, users receive a success notification, and after a brief delay, they are redirected to the homepage. If there’s an error in sending, an error notification is displayed.

### scrollReveal.js

The `scrollReveal.js` file adds a dynamic scroll effect to the website:

- **Scroll Event Listener**: This script listens for scroll events on the window and triggers the `reveal` function, which checks the visibility of elements with the class `reveal`.

- **Reveal Logic**: For each element with the `reveal` class, it determines if it is within the viewport (considering a specified reveal point). If the element is visible, it adds an `active` class, which can be styled via CSS to create a visually appealing animation effect.

Together, these scripts enhance user experience by providing immediate feedback and creating engaging visual effects as users interact with the site.

## CSS Styling

The `style.css` file provides the visual foundation for the website, ensuring a cohesive and appealing aesthetic across all pages. Key features include:

- **Theme**: The website adopts a sophisticated black and gold colour scheme, creating a modern and professional look that reflects the branding of Adi Visuals.

- **Uniformity**: Care has been taken to maintain a consistent design language throughout the site. Each page features a harmonious layout, font styles, and colour usage, ensuring a seamless user experience.

- **Responsive Design**: The CSS is structured to be fully responsive, adapting gracefully to various screen sizes and devices. This ensures that the website maintains its intended layout and functionality, whether viewed on a desktop, tablet, or mobile device.
