// const tree = new TreeNode();
// tree.insert(5);
// tree.insert(2);
// tree.insert(3);
// tree.insert(1);
// tree.insert(2.5);
// tree.insert(10);
// tree.insert(13);
// tree.insert(9);
// tree.insert(12);
// tree.insert(11);
// tree.insert(15);
// console.log(tree.search(3));
// tree.delete(10);
// tree.delete(12);
// tree.delete(9);
// tree.delete(3);
// tree.delete(2);
// tree.delete(5);
// console.log(tree);
// ==========================================
// const person = {
//   name: "Rita",
// };

// function test(phone, email) {
//   this.phone = phone;
//   this.email = email;
//   console.log(`${this.name} ${phone} ${email}` );
//   return;
// }

// test.myBind(person,'1234567')()
// test.myBind(person,'1234567')('123@com')

// test.myCall(person,'123','123@com')

// console.log(a.myMap((el) => el + 2));

//   let ar = [1,2,2,3,4,4,5,5,6];
//   console.log(ar.myFilter((item, i, ar) => ar.indexOf(item)=== i))

// console.log(a.myFilter(el => el > 2));

// console.log(a.myFind(el => el > 3))

// a.myForEach((el) => console.log(el));
// console.log(a.myForEach((el) => console.log(el+1)));

// const [first, ...rest] = this;

// let acc = callback(accumulator, first);
// return rest.myReduce(callback, acc);

// console.log(
//   a.myReduce((total, el) => {
//     return total + el;
//   }, 0)
// );
// let b = ["hello", "world", "hello", "dogs", "hello", "cats"];
// console.log(
//   b.myReduce((acc, el) => {
//     acc[el] = (acc[el] || 0) + 1;
//     return acc;
//   }, {})
// );

// console.log(
//   a.myReduce((acc, el) => {
//     acc.push(el * 2);
//     return acc;
//   }, [])
// );

// ====================

// let ab = [{ a: 10 }, { a: -1 }, { a: 7 }, { a: 5 }];
// let a = [4, 1, 34, 7, 88, 9, 2];
// let arr = ["c", "f", "b", "e", "g", "d", "a"];
// let arr = [4, 1, 22, 34, 7, 5, 88, 6, 9, 3, 12, 2];

// console.log(arr.bubbleSort());
// console.log(a.bubbleSort());
// console.log(ab.bubbleSort());
// console.log(a.bubbleSort((a, b) => a > b));
// console.log(arr.bubbleSort((a, b) => a > b));
// console.log(ab.bubbleSort((a, b) => a.a > b.a));

// console.log(arr.selectionSort());
// console.log(ab.selectionSort((a, b) => a.a > b.a));
// console.log(a.selectionSort((a, b) => a > b));
// console.log(arr.selectionSort());
// ======================================================
("+cc(mmm)xxx-xx-xx");
let tel = "+38(066)731-41-36";
let regexpTel = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
// console.log(regexpTel.test(tel));

let email = "a_rita@ukr.net";
let regexpEmail = /^([\w-]+)@([a-z]+)\.([a-z]{2,6})$/;
// console.log(regexpEmail.test(email));

let site = "http://test.dev";
let regexpSite = /^http\:\/\/([-\w\.]+)\.\/?/;
// console.log(regexpSite.test(site));
// ^((https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$
/https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

let password = "qwerty123_5@";
let regexpPassword = /^(?=.*[!@#$%^&*])(?=.*\w)[\w!@#$%^&*]{6,25}$/;
// let regexpPassword = /^(?=.*[!@#$%^&*])(?=.*\w)[\w!@#$%^&*]{6,25}$/;
//  (пробел) ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~
// (?=.*\d)(?=.*[a-z])(?=.*[A-Z])
// console.log(regexpPassword.test(password));
// ?=.*\

let ip = "192.0.2.235";
let regexpIpv4 = /^([0-9]{1,3}[\.]){3}[0-9]{1,3}$/;
// console.log(regexpIpv4.test(ip));
//  ipv4  192.0.2.235  010.010.010.010 ^((25[0-5]|2[4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[4]\d|[01]?\d\d?)$;

// /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;

//   "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"
// ;
