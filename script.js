// 1.Простое сообщение: сохраните текстовое сообщение в переменной и выведите его в браузере
let message="I want to be a strong programmer"
document.write(message+"<br>")

// 2.Простые сообщения: сохраните сообщение в переменной и выведите это сообщение.
//  Затем замените значение переменной другим сообщением и выведите новое сообщение
let myMessage="I have to study very hard";
document.write(myMessage+"<br>");
   myMessage="At least 5-6 hours a day for my studies"
   document.write(myMessage+"<br>")

//  3.Напишите несколько строк кода, выводящих на экран ваше имя и почтовый адрес.
let myName="Nuraiym";
 let myEmail="nuraiym.zhyrgalbekova.kk@gmail.com";
document.write(`My name is ${myName} <br>`);
document.write(`My email is ${myEmail} <br>`);

// 4.Интернет-магазин занимается продажей различных сувениров и безделушек. 
// Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя
//  количество тех и других покупок, после чего выведите на экран общий вес посылки.
let suvenir=prompt("Сколько сувениров вы купили?")
let smallGift=prompt("Сколько безделушек вы купили?")
let totalWeight=suvenir*75+smallGift*112;
document.write(`Общий вес посылки:${totalWeight}`);

// 5.Создайте программу, которая запрашивает у пользователя два целых числа a и b, 
// после чего выводит на экран результаты следующих математических операций: 

// - сумма a и b; 

// - разница между a и b;

// - произведение a и b; 

// - частное от деления a на b; 

// - остаток от деления a на b;  

// - результат возведения числа a в степень b
// let a=+prompt("введите первое целое число");
// let b=+prompt("введите второе целое число");
// let sum=a+b;
// let minus=a-b;
// let multyly=a*b;
// let division=a/b;
// let remain=a%b;
// let exponentiation=a**b;
// document.write(sum+"<br>")
// document.write(minus+"<br>")
// document.write(multyly+"<br>")
// document.write(division+"<br>")
// document.write(remain+"<br>")
// document.write(exponentiation+"<br>")
