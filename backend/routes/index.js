//file upload template code
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, uploadDir); // Use relative path instead of absolute path
//     },
//     filename: (req, file, cb) => {
//         const uniqueFileName = saveProfileImages(file.originalname);
//         req.body.profile_img = uniqueFileName;
//         cb(null, uniqueFileName);
//     }
// });

// const upload = multer({ storage });


const express = require('express');
const router = express.Router();
const storeRoutes = require("../routes/storeRoute");

router.use('/shop', storeRoutes)
module.exports = router;









































