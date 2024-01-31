const students = [
    {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
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
        id: 202,
        name: 'Frank Martinez',
        email: 'frank@example.com',
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