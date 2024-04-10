// localStorage.setItem('key', 'text');
// let str = localStorage.getItem('key');
// console.log(str); 

// let time = localStorage.getItem('time');

// if (time === null) {
// 	let now = Date.now();
// 	localStorage.setItem('time', now);
// }

// let time = localStorage.getItem('time');

// if (!time) {
// 	let now = Date.now();
// 	localStorage.setItem('time', now);
// }

// localStorage.setItem('key', '2');
// let value2 = localStorage.getItem('key');

// console.log(value2);

// localStorage.removeItem('key');
// let value = localStorage.getItem('key');
// console.log(value); // выведет null

// let count = localStorage.getItem('refreshCount') || 0;

// if (count >= 10) {
//     count = 0;
// }

// count++;
// localStorage.setItem('refreshCount', count);

// document.getElementById('counter').textContent = `Count: ${count}`;

// localStorage.clear();

// let num = localStorage.length;
// console.log(num);

// function showItemCount() {
//     const count = localStorage.length;
//     document.getElementById('count').textContent = `${count}`;
// }

// function checkAndClear() {
//     const count = localStorage.length;
//     document.getElementById('count').textContent = `Number of items in Local Storage: ${count}`;
    
//     if (count > 10) {
//         localStorage.clear();
//         alert("Local Storage cleared as the number of items exceeded 10.");
//     }
// }

// let key = localStorage.key(0);
// console.log(key);

// let key = localStorage.key(0);
// let val = localStorage.getItem(key);

// console.log(val);

// for (let i = 0; i < localStorage.length; i++) {
// 	let key = localStorage.key(i);
// 	let val = localStorage.getItem(key);
	
// 	console.log(val);
// }