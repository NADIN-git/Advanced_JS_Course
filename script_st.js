const fs = required('fs');
const text = fs.readfileSync('script.js', 'utf8')
console.log(text)