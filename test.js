const qs = require('qs');

// const obj = { 'photo[name]': 'test', 'photo[desc]': 'qqq' };
// const obj2 = { 'photo[img]': { 'name': 'test.jpg' } };
// const obj3 = { 'photo[img]': [{ 'name': 'test.jpg' },{ 'name': 'test2.jpg' }] };

// console.log(qs.parse(obj));

// const parsedObj2 = qs.parse(obj2, { parseArrays: true });
// console.log(parsedObj2);
// console.log(parsedObj2.photo.img.length);
// console.log(typeof parsedObj2.photo.img);

// const parsedObj3 = qs.parse(obj3);
// console.log(parsedObj3.photo.img.length);
// console.log(typeof parsedObj3.photo.img);

// console.log(Array.isArray(parsedObj2.photo.img));
// console.log(Array.isArray(parsedObj3.photo.img));


let str = 'C:\\MyDevp\\React\\node-fileupload\\public\\uploadfiles\\upload_fbf6f5f4d42e6e1583da05178cb9218c.jpg';

str = str.split('\\').reverse().shift();

console.log(str);