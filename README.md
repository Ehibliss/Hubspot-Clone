# HubSpot Clone

This is a responsive **frontend recreation of the HubSpot landing page** that I built with React and modern frontend development practices.

This project was created as a frontend development practice project to improve my skills in **React, component-based architecture, responsive design, CSS, reusable UI components, and working with third-party icon libraries**.

> **Note:** This is an educational frontend recreation and is not affiliated with or endorsed by HubSpot.

## Project Overview

The HubSpot Clone recreates the look and feel of selected sections of the HubSpot website, with a focus on building a clean, responsive, and reusable React interface.

This project focuses entirely on the **frontend**.

There is currently no backend, database, authentication system, payment integration, or real HubSpot API integration.

My goal is to practice taking an existing website design and translating it into a functional React application while maintaining responsive behavior across different screen sizes.

## Features......

### Navigation

The project includes a two-level navigation system inspired by the HubSpot website.

#### Top Navigation

The utility navigation includes:

- Language selector
- High Contrast option
- Customer Support
- Contact Sales
- Search icon
- Log in
- About menu

#### The Main Navigation

The main navigation includes:

- HubSpot branding
- Products
- Solutions
- Pricing
- Resources
- "Start free or get a demo" CTA button
- Responsive mobile navigation
- Dropdown indicators

### Sticky Navigation Behavior

The navigation has dynamic scrolling behavior.

When the user is at the top of the page:

- The top utility navigation is visible.
- The main navigation appears underneath it.

When the user scrolls down:

- The top utility navigation disappears.
- The main navigation remains visible.
- The main navigation moves to the top of the screen.

When the user returns to the top:

- The top navigation becomes visible again.

This behavior was implemented using React state and the browser's scroll event.

## Responsive Design

The interface is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

The navigation, content sections, cards, buttons, and footer adapt to different screen sizes using CSS media queries.

The mobile navigation replaces the desktop navigation links with a hamburger menu.

## The Footer

The footer recreates the large multi-column footer layout used by HubSpot.

It includes:

### Popular Features

- All Products and Features
- HubSpot AEO
- Free Meeting Scheduler App
- Agent Hub
- Email Tracking Software
- AI Content Writer
- AI Website Generator
- Email Marketing Software
- Lead Management Software
- AI Prospecting Agent
- Free Website Builder
- Landing Pages
- Free Online Form Builder
- Free Chatbot Builder
- Free Live Chat Software
- Marketing Analytics
- Free Landing Page Builder
- Free Web Hosting

### Free Tools

- See All Free Business Tools
- AI Search Grader
- AI Search Sensor
- Make My Persona
- Email Signature Generator
- Free Business Templates
- Software Comparisons Library
- Website Templates

### Company

- About Us
- Careers
- Management Team
- Board of Directors
- Investor Relations
- Blog
- Sustainability
- Contact Us

### Customers & Partners

- Customer Support
- Join a Local User Group
- All Partner Programs
- Solutions Partner Program
- Technology Partner Program
- HubSpot for Startups
- Affiliate Program

### Social Media

The footer also includes social media icons for:

- Facebook
- Instagram
- YouTube
- X
- LinkedIn
- Reddit
- TikTok

### Additional Footer Elements

- HubSpot branding
- Copyright information
- Floating chat button

## The Technologies I Used

### React

This project is built using **React** to create reusable and maintainable UI components.

### Vite

Vite is used as the development and build tool.

### JavaScript

JavaScript is used for:

- Component logic
- Navigation state
- Mobile menu behavior
- Scroll detection
- Interactive UI elements

### CSS

Custom CSS is used for:

- Layout
- Responsive design
- Typography
- Spacing
- Navigation
- Footer
- Buttons
- Hover effects
- Transitions
- Mobile breakpoints

### React Icons

The project uses `react-icons` for interface and social media icons.

Examples include:

```jsx
FiSearch;
FiUser;
FiGlobe;
FiChevronDown;
FiChevronLeft;
FiChevronRight;
FaFacebookF;
FaInstagram;
FaYoutube;
FaLinkedinIn;
FaTiktok;
```

## The Project Goals

The main goals of this project are to:

1. Improve my React development skills.
2. Practice breaking a website into reusable components.
3. Improve CSS and responsive design skills.
4. Learn how to recreate an existing UI from a visual reference.
5. Practice implementing interactive navigation.
6. Work with third-party React libraries.
7. Improve understanding of responsive layouts.

8. Practice writing cleaner and more maintainable frontend code.

## Responsive Breakpoints

In this project, I used CSS media queries to adapt the interface to smaller screens.

The design was recreated for learning purposes rather than copied as a production implementation.

## Backend

This project **does not currently have a backend**.

The project is intentionally focused on frontend development.

Future backend functionality could be added separately if required.

## Testing and feedbacks

The interface can be manually tested by checking:

- Navigation
- Responsiveness

* Test the application at:

- Desktop width
- Tablet width
- Mobile width
- Small mobile width

## What I Learned

Building this project helped me practice more than simply writing HTML and CSS.

I gained more experience with:

- React components
- React state
- `useEffect`
- Event listeners
- Responsive CSS
- CSS media queries
- Component organization
- Reusable UI
- React Icons
- Debugging React warnings
- Browser developer tools
- Translating visual designs into code
- Building interfaces from screenshots
- Git and GitHub workflow

## Deployment

This project deployed using : \* Netlify

## Disclaimer

This project is a **frontend educational recreation** inspired by the HubSpot website.

It is not affiliated with, sponsored by, or officially connected to HubSpot.

HubSpot and its associated trademarks, logos, and branding belong to their respective owners.

## 👩🏽 Author

**Blessing Ehi Ocheme**

Frontend Developer | Full-Stack Developer in Training

This project is part of my ongoing journey of building real-world frontend projects, improving my React skills, and transitioning further into full-stack development.

## Acknowledgements

- Inspired by the HubSpot website and its user interface.
- Built using React and Vite.
- Icons provided through React Icons.
- Developed for educational and portfolio purposes.

## License

This project is intended for educational and portfolio purposes.

Please do not present or use it as an official HubSpot product or service.
