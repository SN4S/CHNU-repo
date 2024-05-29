function ts3() {
    let employees = [
        { name: 'Іван', age: 28, work: 'розробник' },
        { name: 'Ольга', age: 25, work: 'аналітик' },
        { name: 'Марія', age: 35, work: 'менеджер' },
        { name: 'Петро', age: 32, work: 'розробник' }
    ];

    console.log("1. Масив:", employees);

    employees = employees.toSorted((a, b) => a.name.localeCompare(b.name));
    console.log("2. Масив після сортування:", employees);
    

    let developers = employees.filter(employee => employee.work === 'розробник');
    console.log("3. Розробники:", developers);

    employees = employees.filter(employee => employee.age !== 35);
    console.log("4. Масив після видалення:", employees);

    let newEmployee = { name: 'Анна', age: 30, work: 'аналітик' };
    employees.push(newEmployee);
    console.log("5. Масив після додавання:", employees);
}