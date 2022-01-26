


// 5.Создайте программу, которая запрашивает у пользователя два целых числа a и b, 
// после чего выводит на экран результаты следующих математических операций: 

// - сумма a и b; 

// - разница между a и b;

// - произведение a и b; 

// - частное от деления a на b; 

// - остаток от деления a на b;  

// - результат возведения числа a в степень b
let a=+prompt("введите первое целое число");
let b=+prompt("введите второе целое число");
let sum=a+b;
let minus=a-b;
let multyly=a*b;
let division=a/b;
let remain=a%b;
let exponentiation=a**b;
document.write(sum+"<br>")
document.write(minus+"<br>")
document.write(multyly+"<br>")
document.write(division+"<br>")
document.write(remain+"<br>")
document.write(exponentiation+"<br>")
