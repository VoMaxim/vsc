let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

leftBorderWidth = 10;
console.log(leftBorderWidth);

const obj = {
  a: 50
};

obj.a = 10;
console.log(obj);
// прямых констант в джаваскрипте не бывает


console.log(name);
var name = 'Ivan';

{
  let result = 50;
}

console.log(result);
// в данном случае (22-26) видим, что переменная let не видна, также будет и с const, но если их заменить на var, то консоль выдаст результат

"use strict";
// данная фраза запускает строгий режим, без этой фразы в начале файла, переменную "а" можно использовать, с ней консоль выдаст is not defined

a = 15;
console.log(a);