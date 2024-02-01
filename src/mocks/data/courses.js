const courses = [
    {
        id: "1",
        name: 'Introduction to React Native',
        instructor: 'John Doe',
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: '/courseImages/course_1.png',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        likes: 5,
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
            {
                week: 3,
                topic: 'Styling in React Native',
                content: 'Exploring styling options and best practices in React Native applications.'
            },
            {
                week: 4,
                topic: 'Navigation in React Native',
                content: 'Implementing navigation and routing in React Native apps.'
            },
            {
                week: 5,
                topic: 'State Management',
                content: 'Understanding and implementing state management in React Native using hooks.'
            },
            {
                week: 6,
                topic: 'API Integration',
                content: 'Connecting your React Native app to external APIs and handling data.'
            },
            {
                week: 7,
                topic: 'Advanced UI Components',
                content: 'Exploring advanced UI components and their usage in React Native.'
            },
            {
                week: 8,
                topic: 'Final Project',
                content: 'Working on a final project to apply the skills learned throughout the course.'
            },
        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
        ],
    },
    {
        id: "2",
        name: 'Web Development Fundamentals',
        instructor: 'Jane Smith',
        description: 'Explore the foundational concepts of web development and build a solid understanding of HTML, CSS, and JavaScript.',
        enrollmentStatus: 'Open',
        thumbnail: '/courseImages/course_2.png',
        duration: '10 weeks',
        schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
        location: 'In-Person',
        prerequisites: [],
        likes: 8,
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Web Development',
                content: 'Overview of web development, understanding client-server architecture.'
            },
            {
                week: 2,
                topic: 'HTML Basics',
                content: 'Learn the basics of HTML, including tags, elements, and document structure.'
            },
            {
                week: 3,
                topic: 'CSS Styling',
                content: 'Explore CSS for styling web pages, covering selectors, properties, and layout.'
            },
            {
                week: 4,
                topic: 'Responsive Design',
                content: 'Implement responsive design principles using media queries and flexible layouts.'
            },
            {
                week: 5,
                topic: 'JavaScript Fundamentals',
                content: 'Introduction to JavaScript, covering variables, data types, and basic scripting.'
            },
            {
                week: 6,
                topic: 'DOM Manipulation',
                content: 'Understand the Document Object Model (DOM) and how to manipulate HTML using JavaScript.'
            },
            {
                week: 7,
                topic: 'Introduction to Git and Version Control',
                content: 'Learn the basics of version control with Git and GitHub for collaborative development.'
            },
            {
                week: 8,
                topic: 'Web Development Tools',
                content: 'Explore developer tools, debugging techniques, and optimizing web performance.'
            },
            {
                week: 9,
                topic: 'Introduction to Frontend Frameworks',
                content: 'Overview of popular frontend frameworks like React, Vue, or Angular.'
            },
            {
                week: 10,
                topic: 'Final Project - Build a Portfolio Website',
                content: 'Apply the skills learned throughout the course by building a personal portfolio website.'
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 202,
                name: 'Frank Martinez',
                email: 'frank@example.com',
            },
        ],
    }
];

export default courses;