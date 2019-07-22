// var path = require('path');
// var mymodule = require('./mymodule');
// var dir = process.argv[2];
// var filterExtension = process.argv[3];

// var callback = function (err, list) {
//     if (err) throw err;
//     list.forEach(function (file) {
//         console.log(file);
//     })
// }

// mymodule(dir, filterExtension, callback);



// const fs = require('fs');
// var path = process.argv[2];
// fs.readdir(path, function (err, items) { 
//     for (var i = 0; i < items.length; i++) {
//         if (items[i].includes("."+process.argv[3] ) )
//             { 
//                console.log(items[i]);
//             }
//     }
// });

// const fs = require('fs');
// fs.readFile(process.argv[2], (err, fd) => {
//     if (err) return console.log(err)
//     else return console.log(fd.toString().split('\n').length - 1)

// });


// const fs = require('fs');
// console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length - 1)


