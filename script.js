// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
const powCube = (num) => Math.pow(num, 3);
console.log(powCube(2));
console.log(powCube(3));
console.log(powCube(4));
console.log(powCube(5));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const amount = prompt("Введите сумму заработной платы");
function salary(amount) {
  console.log(
    `Размер заработоый плвты за вычетом налогов равен ${amount * 0.87} Ђ`
  );
}
isNaN(amount) ? console.log("Значение задано неверно") : salary(amount);

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
let num1 = Number(prompt("Введите первое число"));
let num2 = Number(prompt("Введите второе число"));
let num3 = Number(prompt("Введите третье число"));
function maxNumber(num1, num2, num3) {
  let maxNum = Math.max(num1, num2, num3);
  return maxNum;
}
console.log(
  `Максимальное число из чисел (${num1}, ${num2}, ${num3}) -> ${maxNumber(
    num1,
    num2,
    num3
  )}`
);
/*Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.*/
function sumNumber(a, b) {
  return a + b;
}
function diffNumber(a, b) {
  let c;
  a > b ? (c = a - b) : (c = b - a);
  return c;
}
function multNumber(a, b) {
  return a * b;
}
function devNumber(a, b) {
  let c;
  c = a / b;
  return c.toFixed(2);
}
let a = 2;
let b = 6;
console.log(`Сумма чисел ${a} и ${b} -> ${sumNumber(a, b)}`);
console.log(`Разность чисел ${a} и ${b} -> ${diffNumber(a, b)}`);
console.log(`Произведение чисел ${a} и ${b} -> ${multNumber(a, b)}`);
console.log(`Результат деления чисел ${a} и ${b} -> ${devNumber(a, b)}`);