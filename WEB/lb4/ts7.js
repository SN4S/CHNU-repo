
function ts7() {
    let student = {
        name: 'Іван',
        age: 20,
        course: 2
    };

    student.subs = ['Математика', 'Фізика', 'Хімія'];
    console.log("2. Об'єкт зі списком предметів:", student);

    delete student.age;
    console.log("3. Об'єкт після видалення властивості 'вік':", student);

}