function ts4() {
    let students = [
        { name: 'Ірина', age: 20, course: 2 },
        { name: 'Олександр', age: 22, course: 4 },
        { name: 'Олексій', age: 21, course: 3 },
        { name: 'Наталія', age: 19, course: 1 }
    ];

    students = students.filter(student => student.name !== 'Олексій');
    console.log("2. Масив після видалення Олексія:", students);

    let newStudent = { name: 'Михайло', age: 23, course: 3 };
    students.push(newStudent);
    console.log("3. Масив після додавання:", students);

    students.sort((a, b) => b.age - a.age);
    console.log("4. Масив студентів за віком від найстаршого до наймолодшого:", students);

    let studentOnThirdCourse = students.find(student => student.course === 3);
    console.log("5. Студент на 3-му курсі:", studentOnThirdCourse);
}