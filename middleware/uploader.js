// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: "images/",
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.random(Math.random() * 1E9);
//         cb(null, uniqueSuffix + '-' + file.originalname);
//     }
// })


// const uploader = multer({
//     // dest: 'images/',
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         const supportedImage = /png|jpg/;
//         const extention = path.extname(file.originalname);

//         if (supportedImage.test(extention)) {
//             cb(null, true)
//         } else {
//             cb(new Error("Must be a png/jpg image"))
//         }
//     },
//     limits: {
//         fileSize: 5000000
//     }
// })


// module.exports = uploader;

