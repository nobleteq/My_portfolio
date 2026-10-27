import { Project } from '../types';

export const projects: Project[] = [
  // TKINTER — DESKTOP DEVELOPMENT
  {
    id: 'tkinter-1',
    title: 'Personal Finance Manager',
    summary: 'A desktop application for tracking income, expenses, and spending patterns.',
    description: 'A comprehensive personal finance management tool built with Tkinter that helps users track their financial transactions, categorize spending, and visualize their financial health through charts and summaries.',
    category: 'Tkinter',
    technologies: ['Python', 'Tkinter', 'SQLite', 'Matplotlib'],
    features: [
      'Record and categorize income and expenses',
      'Display spending summaries and visual charts',
      'Persistent data storage with SQLite',
      'User input validation and error handling',
      'Transaction search and filtering',
      'Export data to CSV format'
    ],
    problem: 'Individuals need a simple, offline tool to track their daily finances without relying on cloud-based services or internet connectivity.',
    solution: 'Built a desktop application using Tkinter with SQLite for local data storage, providing users with complete control over their financial data while offering intuitive visualization tools.',
    architecture: 'MVC pattern with Tkinter for UI, SQLite for data persistence, and Matplotlib for data visualization. The application separates business logic from UI components for maintainability.',
    challenges: 'Handling SQLite transactions safely, implementing responsive UI updates, and creating intuitive category management for transactions.',
    githubUrl: 'https://github.com/yourusername/personal-finance-manager',
    thumbnail: '/images/projects/tkinter-finance-manager.jpg',
    screenshots: ['/images/projects/tkinter-finance-manager-1.jpg', '/images/projects/tkinter-finance-manager-2.jpg']
  },
  {
    id: 'tkinter-2',
    title: 'Inventory and Sales Management System',
    summary: 'A desktop application for managing product inventory and recording sales transactions.',
    description: 'A complete inventory management solution for small businesses, enabling product tracking, stock level monitoring, sales recording, and report generation.',
    category: 'Tkinter',
    technologies: ['Python', 'Tkinter', 'SQLite', 'ReportLab'],
    features: [
      'Manage products and stock levels',
      'Record sales and generate receipts',
      'Search and filter inventory',
      'Track low-stock products with alerts',
      'Generate printable or exportable reports',
      'Sales analytics and summaries'
    ],
    problem: 'Small businesses need an affordable, offline solution to manage inventory without the complexity and cost of enterprise systems.',
    solution: 'Developed a Tkinter-based desktop application with SQLite for data storage, providing essential inventory management features in an accessible interface.',
    architecture: 'Three-tier architecture with presentation layer (Tkinter), business logic layer, and data access layer (SQLite). Includes separate modules for inventory, sales, and reporting.',
    challenges: 'Implementing concurrent stock updates, generating professional reports, and ensuring data integrity during sales transactions.',
    githubUrl: 'https://github.com/yourusername/inventory-sales-system',
    thumbnail: '/images/projects/tkinter-inventory.jpg',
    screenshots: ['/images/projects/tkinter-inventory-1.jpg', '/images/projects/tkinter-inventory-2.jpg']
  },

  // REACT — FRONTEND DEVELOPMENT
  {
    id: 'react-1',
    title: 'Developer Job Tracker',
    summary: 'A web application for tracking job applications and managing the job search process.',
    description: 'A comprehensive job application management tool that helps developers track their job search progress, organize applications by status, and visualize their job search activity.',
    category: 'React',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Local Storage'],
    features: [
      'Track applications, companies, and job statuses',
      'Filter applications by status and date',
      'Display dashboard of application activity',
      'Local persistence with browser storage',
      'Data export functionality',
      'Application notes and follow-up reminders'
    ],
    problem: 'Job seekers struggle to organize multiple applications across different companies and platforms, leading to missed opportunities and disorganized follow-ups.',
    solution: 'Built a React-based single-page application with local storage for data persistence, providing a centralized dashboard to manage the entire job search workflow.',
    architecture: 'Component-based React architecture with custom hooks for state management, context API for global state, and localStorage for data persistence. Modular component structure for reusability.',
    challenges: 'Implementing efficient filtering and search, managing complex state across components, and ensuring data persistence reliability.',
    githubUrl: 'https://github.com/yourusername/developer-job-tracker',
    liveDemoUrl: 'https://yourusername.github.io/developer-job-tracker',
    thumbnail: '/images/projects/react-job-tracker.jpg',
    screenshots: ['/images/projects/react-job-tracker-1.jpg', '/images/projects/react-job-tracker-2.jpg']
  },
  {
    id: 'react-2',
    title: 'Online Learning Dashboard',
    summary: 'A web application for tracking online courses and learning progress.',
    description: 'A learning management dashboard that helps users organize their online courses, track progress across different platforms, and visualize their learning journey.',
    category: 'React',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    features: [
      'Display courses and learning progress',
      'Course search and filtering',
      'Progress indicators and learning statistics',
      'Responsive course detail views',
      'Learning goal tracking',
      'Time spent analytics'
    ],
    problem: 'Learners taking courses from multiple platforms struggle to track overall progress and maintain consistent learning habits.',
    solution: 'Created a centralized dashboard that aggregates course information and progress data, providing visual insights into learning patterns and achievements.',
    architecture: 'React application with routing for different views, custom hooks for data fetching and state management, and Chart.js integration for progress visualization.',
    challenges: 'Integrating data from multiple course platforms, designing intuitive progress visualizations, and creating responsive layouts for various screen sizes.',
    githubUrl: 'https://github.com/yourusername/learning-dashboard',
    liveDemoUrl: 'https://yourusername.github.io/learning-dashboard',
    thumbnail: '/images/projects/react-learning-dashboard.jpg',
    screenshots: ['/images/projects/react-learning-dashboard-1.jpg', '/images/projects/react-learning-dashboard-2.jpg']
  },

  // FLET — PYTHON CROSS-PLATFORM DEVELOPMENT
  {
    id: 'flet-1',
    title: 'Smart Task and Productivity Manager',
    summary: 'A cross-platform task management application with productivity tracking features.',
    description: 'A comprehensive task management tool built with Flet that helps users organize tasks, track productivity, and maintain focus on their goals across multiple platforms.',
    category: 'Flet',
    technologies: ['Python', 'Flet', 'SQLite'],
    features: [
      'Create, edit, complete, and delete tasks',
      'Organize tasks by priority and due date',
      'Task filters and productivity summaries',
      'Persistent task storage with SQLite',
      'Cross-platform compatibility',
      'Productivity statistics and insights'
    ],
    problem: 'Users need a task manager that works consistently across desktop and mobile platforms without requiring separate apps for each device.',
    solution: 'Built a cross-platform application using Flet, which provides native-like performance on Windows, macOS, Linux, and mobile devices from a single Python codebase.',
    architecture: 'Flet framework with state management for task data, SQLite for persistence, and responsive UI components that adapt to different screen sizes and platforms.',
    challenges: 'Ensuring consistent UI behavior across platforms, managing state synchronization, and optimizing performance for mobile devices.',
    githubUrl: 'https://github.com/yourusername/smart-task-manager',
    thumbnail: '/images/projects/flet-task-manager.jpg',
    screenshots: ['/images/projects/flet-task-manager-1.jpg', '/images/projects/flet-task-manager-2.jpg']
  },
  {
    id: 'flet-2',
    title: 'Student Learning and Assessment App',
    summary: 'An educational application for learning materials and assessments.',
    description: 'An interactive learning platform that provides educational content, quizzes, and progress tracking for students across various subjects.',
    category: 'Flet',
    technologies: ['Python', 'Flet', 'SQLite'],
    features: [
      'Display learning materials by subject',
      'Multiple-choice quizzes with instant feedback',
      'Score calculation and performance feedback',
      'Track learning progress over time',
      'Reusable UI components',
      'Organized application logic'
    ],
    problem: 'Students need an accessible, offline-capable learning tool that combines study materials with assessment features without requiring internet connectivity.',
    solution: 'Developed a Flet-based application that stores learning content locally, provides interactive quizzes, and tracks student progress without requiring a backend server.',
    architecture: 'Modular Flet application with separate components for content display, quiz functionality, and progress tracking. SQLite database for storing user progress and quiz results.',
    challenges: 'Creating reusable quiz components, managing content organization across subjects, and implementing effective progress tracking algorithms.',
    githubUrl: 'https://github.com/yourusername/student-learning-app',
    thumbnail: '/images/projects/flet-learning-app.jpg',
    screenshots: ['/images/projects/flet-learning-app-1.jpg', '/images/projects/flet-learning-app-2.jpg']
  },

  // FLUTTER — MOBILE DEVELOPMENT
  {
    id: 'flutter-1',
    title: 'Personal Expense Tracker',
    summary: 'A mobile application for tracking daily expenses and spending patterns.',
    description: 'A mobile-first expense tracking application built with Flutter that helps users record transactions, analyze spending, and maintain budget awareness on the go.',
    category: 'Flutter',
    technologies: ['Dart', 'Flutter', 'SQLite', 'Flutter Charts'],
    features: [
      'Record transactions with categories',
      'Display spending summaries and charts',
      'Filter transactions by category and date',
      'Local data persistence',
      'Accessible mobile navigation',
      'Budget tracking and alerts'
    ],
    problem: 'Mobile users need a convenient way to track expenses immediately after purchases, rather than waiting to record them on a desktop application.',
    solution: 'Built a Flutter mobile application with intuitive input forms, visual spending summaries, and offline data storage for immediate expense recording anywhere.',
    architecture: 'Flutter application with BLoC state management pattern, SQLite for local storage, and responsive widgets optimized for mobile touch interfaces.',
    challenges: 'Designing mobile-optimized input forms, implementing efficient local database operations, and creating clear visualizations on small screens.',
    githubUrl: 'https://github.com/yourusername/flutter-expense-tracker',
    thumbnail: '/images/projects/flutter-expense-tracker.jpg',
    screenshots: ['/images/projects/flutter-expense-tracker-1.jpg', '/images/projects/flutter-expense-tracker-2.jpg']
  },
  {
    id: 'flutter-2',
    title: 'Offline Learning Companion',
    summary: 'A mobile application for offline learning content and progress tracking.',
    description: 'An educational mobile app that allows users to access learning materials, take quizzes, and track progress without requiring an internet connection.',
    category: 'Flutter',
    technologies: ['Dart', 'Flutter', 'SQLite'],
    features: [
      'Organize lessons by subject',
      'Bookmark favorite lessons',
      'Quizzes with immediate feedback',
      'Learning progress tracking',
      'Offline content access',
      'Synchronized learning experience'
    ],
    problem: 'Students in areas with limited or unreliable internet need access to learning materials that work completely offline.',
    solution: 'Created a Flutter application with local content storage, allowing users to download lessons and access them offline while maintaining progress tracking.',
    architecture: 'Flutter app with local file storage for content, SQLite for progress tracking, and a clean UI optimized for reading and interaction on mobile devices.',
    challenges: 'Managing local content storage efficiently, implementing offline-first architecture, and ensuring smooth user experience without network connectivity.',
    githubUrl: 'https://github.com/yourusername/offline-learning-companion',
    thumbnail: '/images/projects/flutter-learning-companion.jpg',
    screenshots: ['/images/projects/flutter-learning-companion-1.jpg', '/images/projects/flutter-learning-companion-2.jpg']
  },

  // FLASK — PYTHON WEB DEVELOPMENT
  {
    id: 'flask-1',
    title: 'REST API and Task Management Service',
    summary: 'A RESTful API service for task management with comprehensive documentation.',
    description: 'A well-structured REST API built with Flask that provides task management endpoints with proper validation, error handling, and OpenAPI documentation.',
    category: 'Flask',
    technologies: ['Python', 'Flask', 'Flask-RESTful', 'Flask-CORS', 'SQLite'],
    features: [
      'CRUD endpoints for task management',
      'Appropriate HTTP status codes',
      'Request data validation',
      'Pagination for list endpoints',
      'Comprehensive error responses',
      'OpenAPI/Swagger documentation',
      'Automated API tests'
    ],
    problem: 'Developers need a reference implementation of a well-structured REST API that demonstrates best practices for validation, error handling, and documentation.',
    solution: 'Built a Flask-based REST API following REST principles, with thorough validation, consistent error responses, and automated testing to serve as a learning resource and template.',
    architecture: 'Flask application with blueprint organization, service layer for business logic, repository pattern for data access, and comprehensive middleware for validation and error handling.',
    challenges: 'Implementing proper HTTP status codes, creating consistent error response formats, and writing comprehensive test coverage for all endpoints.',
    githubUrl: 'https://github.com/yourusername/flask-task-api',
    thumbnail: '/images/projects/flask-task-api.jpg',
    screenshots: ['/images/projects/flask-task-api-1.jpg', '/images/projects/flask-task-api-2.jpg']
  },
  {
    id: 'flask-2',
    title: 'Appointment and Booking System',
    summary: 'A web application for managing appointments and bookings.',
    description: 'A booking system that allows users to schedule appointments, view available time slots, and manage bookings with proper validation and user roles.',
    category: 'Flask',
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'Flask-Login', 'WTForms'],
    features: [
      'Create and manage appointments',
      'Validate available booking slots',
      'Customer and administrator views',
      'Server-side validation',
      'Database integration',
      'User authentication',
      'Booking confirmation emails'
    ],
    problem: 'Service providers need a simple system to manage appointments without the complexity and cost of full-featured scheduling platforms.',
    solution: 'Developed a Flask web application with role-based access, slot validation, and database-backed booking management suitable for small service businesses.',
    architecture: 'Flask application with MVC pattern, SQLAlchemy ORM for database operations, Flask-Login for authentication, and WTForms for input validation.',
    challenges: 'Implementing concurrent booking prevention, handling timezone considerations, and creating intuitive booking workflows for different user roles.',
    githubUrl: 'https://github.com/yourusername/flask-booking-system',
    thumbnail: '/images/projects/flask-booking-system.jpg',
    screenshots: ['/images/projects/flask-booking-system-1.jpg', '/images/projects/flask-booking-system-2.jpg']
  },

  // DJANGO — FULL-STACK WEB DEVELOPMENT
  {
    id: 'django-1',
    title: 'School Management Portal',
    summary: 'A comprehensive web application for managing school operations and student records.',
    description: 'A full-featured school management system built with Django that handles student records, teacher management, class scheduling, attendance tracking, and assessment results.',
    category: 'Django',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Django REST Framework'],
    features: [
      'Manage students, teachers, classes, and subjects',
      'Role-based access control',
      'Record attendance and assessment results',
      'Display dashboard summaries',
      'Django ORM for data operations',
      'Database migrations',
      'Form validation and permissions',
      'REST API for mobile integration'
    ],
    problem: 'Educational institutions need an integrated system to manage academic operations without the high cost of commercial school management software.',
    solution: 'Built a Django-based web application leveraging the framework\'s built-in authentication, ORM, and admin interface to create a comprehensive school management solution.',
    architecture: 'Django project with app-based modular structure, custom user models for role-based access, class-based views for CRUD operations, and signals for automated workflows.',
    challenges: 'Designing a flexible database schema for various school entities, implementing complex permissions, and creating efficient queries for dashboard summaries.',
    githubUrl: 'https://github.com/yourusername/django-school-portal',
    thumbnail: '/images/projects/django-school-portal.jpg',
    screenshots: ['/images/projects/django-school-portal-1.jpg', '/images/projects/django-school-portal-2.jpg']
  },
  {
    id: 'django-2',
    title: 'Driving School Management Platform',
    summary: 'A web platform for managing driving school operations and student bookings.',
    description: 'A specialized management system for driving schools that handles course presentations, instructor profiles, student bookings, and administrative workflows.',
    category: 'Django',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Django REST Framework'],
    features: [
      'Present driving courses and instructor profiles',
      'Student booking request submission',
      'Manage bookings and student records',
      'Administrative workflows',
      'Django authentication system',
      'ORM for database operations',
      'Form validation',
      'Role-based permissions'
    ],
    problem: 'Driving schools need a tailored solution to manage their specific workflow of course offerings, instructor assignments, and student progress tracking.',
    solution: 'Created a Django application customized for driving school operations, with specialized models for courses, instructors, vehicles, and booking management.',
    architecture: 'Django application with domain-specific models, custom permissions for different user roles, class-based views for common operations, and REST API for potential mobile integration.',
    challenges: 'Modeling the specific relationships between courses, instructors, and bookings, implementing booking availability logic, and creating workflows for lesson scheduling.',
    githubUrl: 'https://github.com/yourusername/django-driving-school',
    thumbnail: '/images/projects/django-driving-school.jpg',
    screenshots: ['/images/projects/django-driving-school-1.jpg', '/images/projects/django-driving-school-2.jpg']
  }
];
