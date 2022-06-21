const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

const time = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
console.log(time);