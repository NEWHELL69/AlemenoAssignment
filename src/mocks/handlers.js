import { http, HttpResponse } from 'msw'
import students from "./data/students.js"
import courses from './data/courses.js';

export const handlers = [
  http.post('/api/student/login', async ({ request }) => {
    const { email, password } = await request.json();

    const student = students.find((student) => {
        return (student.email === email && student.password === password)
    });

    if(!student){
        return new HttpResponse("Invalid Credentials", {
            status: 401
        });
    }

    return HttpResponse.json(student);
  }),
  http.post('/api/student/toggleCourse', async ({ request }) => {
    const { studentId, courseId } = await request.json();


    students.forEach((student) => {
      if(student.id === studentId){
        student.courses.forEach((course) => {
          if(course.id === courseId){
            course.completed = !course.completed;
          }
        })
      }
    })

    console.log(students)

    return new HttpResponse();
  }),
  http.post('/api/courses', async ({ request }) => {
    const courseIds = await request.json();

    const coursesToSend = courseIds.map((id) => {
      return courses.find((course) => id === course.id);
    })

    return HttpResponse.json(coursesToSend);
  }),
  http.get('/api/courses', async ({ request }) => {
    return HttpResponse.json(courses);
  }),
]