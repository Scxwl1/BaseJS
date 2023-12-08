//Напишите программу, в которой созданы три переменные: фамилия, имя, отчество.
const firstName = "Даниил";
const lastName = "Гаврилов";
const middleName = "Юрьевич";

console.log("Фамилия: " + lastName);
console.log("Имя: " + firstName);
console.log("Отчество: " + middleName);

console.log("ФИО: " + lastName + " " + firstName + " " + middleName);
console.log(`ФИО: ${lastName} ${firstName} ${middleName}`);

//Даны три целых числа. Выведите среднее арифметическое этих чисел.
let num1 = 5;
let num2 = 5;
let num3 = 5;

let average = (num1 + num2 + num3) / 3;

console.log(average);

//Напишите программу, которая считает, сколь лет вам будет в 2045 году.
let bornYear = 2003;
const futureYear = 2045;

let ageInFuture = futureYear - bornYear; //42

let difference = ageInFuture / bornYear;

console.log("Вам будет", ageInFuture, "года в", futureYear, "году.");
console.log("Вы будете старше в", difference, "раз, чем в настоящее время.");

//Найти площадь треугольника. Длины катетов хранятся в переменных и заданы в виде вещественного числа.
let a = 2.1;
let b = 1.5;

let s = (a * b) / 2;

console.log("Площадь треугольника:", s);


//Найти периметр треугольника. Длины катетов хранятся в переменных и заданы в виде вещественного числа.
let x = 5.5;
let z = 3.2;

let c = Math.sqrt(x ** 2 + z ** 2);

let perimeter = x + z + c;
console.log("Периметр треугольника: " + perimeter);

//Проверка пароля дважды.
function checkPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    if (password === confirmPassword) {
      console.log("Пароль принят");
    } else {
      console.log("Пароль не принят");
    }
  }

//Даны три разных целых числа. Выведите значение наименьшего из них.
function minOfThreeNumbers(q, e, t) {
    return Math.min(q, e, t);
  }
  
  var number1 = 5;
  var number2 = 10;
  var number3 = -3;
  
  var minValue = minOfThreeNumbers(number1, number2, number3);
  console.log(minValue);

//Даны два целых числа А и В. Выведите все числа от A до B включительно.
function printNumbers(F, G) {
    for (let i = F; i <= G; i++) {
      console.log(i);
    }
  }
  
  let F = 5;
  let G = 10;
  printNumbers(F, G);

//Дано 10 целых чисел. Вычислите их сумму, используя цикл for и while.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumFor = 0;
for (let i = 0; i < numbers.length; i++) {
  sumFor += numbers[i];
}

let sumWhile = 0;
let j = 0;
while (j < numbers.length) {
  sumWhile += numbers[j];
  j++;
}

console.log("Сумма (for):", sumFor);
console.log("Сумма (while):", sumWhile);

//Напишите программу, которая выводит числа от 1 до n.
function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
      if ((i >= 15 && i <= 19) || (i >= 37 && i <= 45)) {
        continue;
      }
      console.log(i);
    }
  }
  
  const n = 50;
  
  printNumbers(n);

//По данному натуральному числу N найдите наибольшую целую степень двойки не превосходящую N.
function findLargestPowerOfTwo(N) {
    let power = 0;
    let result = 1;
  
    while (result <= N) {
      power += 1;
      result *= 2;
    }
  
    return power - 1;
  }
  
  const N = 27;
  const largestPowerOfTwo = findLargestPowerOfTwo(N);
  console.log(largestPowerOfTwo);
  