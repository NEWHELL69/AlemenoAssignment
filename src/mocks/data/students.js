const students = [
    {
        id: "1",
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password123",
        courses: [
            {
                id: "1",
                completed: true
            },
            {
                id: "2",
                completed: false,
                dueDate: "1/3/2023",
                progress: 75
            }
        ]
    },
    {
        id: "2",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        password: "securepass",
        courses: [
            {
                id: "2",
                completed: true
            },
        ]
    },
    // Add more students as needed
];


export default students