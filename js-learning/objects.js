const course = {
  id: 15251,
  title: 'teststsa',
  author: 'Pavlo',
  description: 'asfasfasf',
  students: ['Olga', 'Ira'],
  related_courses: [{ title: 'E2e Automation' }, { title: 'Api Automation' }],
};

const obj1 = course;
course.tag = 'myTag';

console.log(course.title);
console.log(obj1.tag);
console.log(obj1);

delete course.title;
console.log('students' in course);

for (const key in course) {
  console.log(course[key]);
}
