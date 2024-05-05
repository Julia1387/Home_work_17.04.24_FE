// Создание класса Employee: Создайте класс Employee с конструктором, который принимает три параметра: name, age, position. Конструктор должен инициализировать соответствующие свойства объекта.
class Employee {
  constructor(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  getInfo() {
    return ` ${this.name}: ${this.age}, ${this.position}`;
  }
}

//--------

//Добавление метода getInfo(): Добавьте в класс Employee метод getInfo(), который возвращает строку с информацией о сотруднике в формате "Имя: Возраст, Должность".

const employee = new Employee("Боб", 26, "Инженер");
console.log(employee.getInfo());

//-----

//Фильтрация сотрудников по должности:
// Напишите функцию filterEmployeesByPosition, которая принимает два параметра: список сотрудников (employees) и должность (position).
// Отфильтруйте список сотрудников по заданной должности.

function filterEmployeeByPosition(employees, position) {
  return employees.filter((employee) => employee.position === position);
}

const employees = [
  { name: "Боб", age: 26, position: "Инженер" },
  { name: "Алла", age: 28, position: "Врачь" },
  { name: "Скай", age: 31, position: "Системный администратор" },
];

const filteredEmployees = filterEmployeeByPosition(employees, "Врачь");
console.log(filteredEmployees);

//-----

// Используйте метод map, чтобы преобразовать отфильтрованный список в список имен сотрудников.
// Функция должна возвращать массив имен сотрудников с заданной должностью.

const employeeNames = filteredEmployees.map((emp) => emp.name);
console.log(employeeNames);

//-----

//   Результат фильтрации в вывести на страницу во втором модальном окне на вашем сайте pallas cat studio. результат выложить на гитхаб в прошлый проект, но разделите новый код комментариями!!

//   // Display the filtered names
//   const filteredEmployeesDiv = document.getElementById("filteredEmployees");
//   filteredEmployeesDiv.innerHTML = filteredNames.join(", ");
// }

//Создание модального окна прикрепила в домашнюю работу как вы и написали в задании.
