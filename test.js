const a = ["something", "else", "another"];
console.log(a.constructor == Array);
a.forEach((item) => console.log(typeof(item) === 'string'));
