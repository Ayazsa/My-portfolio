export const projectList = [
  {
    title: "FinTech POS & Payment Gateway Application",
    type: "Company Project",
    tech: "React, Tailwind CSS, Redux, React Hook Forms",
    description:
      "A role-based payment gateway app with POS features. Focused on dynamic merchant onboarding workflows and admin/merchant dashboards.",
    challenges:
      "Handled complex user roles and workflow management with dynamic forms and Redux state logic.",
    modal: {
      overview:
        "This project is a robust financial technology application that serves as a payment gateway platform with a built-in POS (Point of Sale) system. It includes four roles: Admin, UW (Underwriter), ISO, and Merchant. A dynamic form is used for merchant onboarding, which the UW verifies, followed by Admin approval.",
      roles: [
        "Admin: Approves merchant accounts after UW validation.",
        "UW (Underwriter): Verifies and validates form data submitted by merchants.",
        "Merchant: Applies for the payment gateway, manages transactions, can create sub-merchant users and assign tasks.",
        "ISO (Independent Sales Org): Promotes the platform and onboards merchants.",
      ],
      features: [
        "Dynamic multi-step form submission for merchant onboarding.",
        "Role-based validation workflow (Merchant → UW → Admin).",
        "POS Dashboard with total sales, orders, returns, pending payments, etc.",
        "Sub-merchant creation and permission assignment.",
      ],
    },
  },
  {
    title: "Electric Vehicle Marketing Page",
    type: "Company Project",
    tech: "React, CSS, ",
    description:
      "A single-page marketing site showcasing electric vehicles with their specifications, pricing, and inquiry option.",
    challenges:
      "Designed a fully responsive layout with seamless scroll navigation and dynamic section rendering.",
    modal: {
      overview:
        "This is a single-page application (SPA) designed to market electric vehicles. The goal was to create a modern and responsive interface that highlights different EV models, their features, benefits, and prices. Users can explore vehicle options and submit inquiries.",
      roles: [
        "Visitors: Browse EV models, explore specs and features.",
        "Potential buyers: Use the 'Enquire Us' section to submit interest.",
      ],
      features: [
        "Smooth navigation with section scrolling (Home, Vehicles, About Us, Enquire Us).",
        "Each EV model displayed with details like battery range, charging time, and price.",
        "Responsive UI across devices with clean, user-friendly layout.",
        "Interactive 'Enquire Us' section for lead capture.",
      ],
    },
  },
  {
    title: "Bank Marketing Landing Page",
    type: "Personal Project",
    tech: "HTML, CSS, JavaScript",
    description:
      "A responsive marketing page for a bank, highlighting features, operations, and testimonials with interactive UI effects.",
    challenges:
      "Implemented smooth scrolling, image lazy loading, hover transitions, and a testimonial slider with vanilla JavaScript.",
    modal: {
      overview:
        "This is a static marketing website for a fictional bank. It’s designed to showcase banking features and encourage users to open an account. The site uses smooth scrolling navigation and image optimizations to deliver a modern browsing experience.",
      roles: [
        "Visitors: Can browse bank features, operations, testimonials, and click to open an account.",
      ],
      features: [
        "Header with navigation links (Features, Operations, Testimonials, Open Account).",
        "Fade effect on header links when hovering over one.",
        "Smooth scrolling to section on link click.",
        "Images with lazy loading to enhance performance.",
        "Testimonial slider to showcase client feedback.",
        "CTA 'Open Your Account' in the footer.",
        "Fully responsive design using vanilla CSS.",
      ],
    },
  },
  {
    title: "Banking Web Application",
    type: "Personal Project",
    tech: "HTML, CSS, JavaScript",
    description:
      "A functional bank application built with vanilla web technologies, allowing users to simulate basic banking operations with real-time UI updates.",
    challenges:
      "Handled UI state transitions without frameworks, implemented secure-like PIN login, and built loan logic with dynamic validations.",
    modal: {
      overview:
        "This is a front-end simulation of a banking system. Users can log in using a User ID and PIN to perform common banking actions. All actions reflect changes instantly in the UI.",
      roles: [
        "User: Can log in, check balance, transfer money, request loans, and delete account.",
      ],
      features: [
        "Login functionality using User ID and PIN.",
        "Displays total balance, transaction history.",
        "Money transfer between users with validations.",
        "Loan request system (limit: 10% of current balance).",
        "Delete account option (with confirmation).",
        "Dynamically updates the UI based on user actions.",
        "Built using only HTML, CSS, and JavaScript (no libraries).",
        "Responsive design for various devices.",
      ],
    },
  },
  {
    title: "Easy Learning",
    type: "Personal Project",
    tech: "React, Vanilla CSS",
    description:
      "An interactive learning platform built with React and vanilla CSS, providing smooth navigation, program highlights, and an enquiry form for prospective students.",
    challenges:
      "Ensured smooth user experience with responsive design and efficient component structure while maintaining clean and scalable code.",
    modal: {
      overview:
        "Easy Learning is a Single Page Application built using React. It offers users detailed program information with an easy-to-use navigation system, interactive sections such as course highlights, and a contact/enquiry form to connect with the institute.",
      roles: [
        "Developer: Built the entire frontend using React and CSS, implementing routing, state management, and form handling.",
      ],
      features: [
        "SPA architecture using React Router for smooth page transitions.",
        "Responsive design ensuring usability across all devices.",
        "Interactive enquiry form for users to submit their details.",
        "Program sections showcasing different learning courses and their benefits.",
        "Clean and modular component-based structure for easy maintenance.",
      ],
    },
  },
  {
    title: "ChatGPT UI Clone",
    tech: "React, Tailwind CSS",
    challenges:
      "Managing dynamic sidebar toggling, handling message state cleanly, and ensuring responsive behavior for mobile devices.",
    modal: {
      overview:
        "A functional ChatGPT-inspired UI with a sidebar for chat history and a main chat interface. Built for replicating the intuitive and modern feel of AI-based chat apps.",
      roles: [
        "User can toggle sidebar using hamburger menu",
        "Start a new chat or continue existing chats",
        "Delete or archive chats from the header",
      ],
      features: [
        "Sidebar with chat history",
        "Hamburger menu for toggling sidebar",
        "Header options: ChatGPT button, Upgrade button, 3-dot vertical menu (delete/archive)",
        "Chat window with fallback UI when no chat is active",
        "Input box for entering messages",
        "Responsive and clean Tailwind CSS layout",
      ],
    },
  },

  // Add other projects here
];
