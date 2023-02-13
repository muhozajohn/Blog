import multer from "multer";
import path from "path";
let upload = multer({ 
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if(ext!== '.png' && ext!== '.jpg' && ext!== '.jpeg' && ext!== '.gif'&& !ext== '.webp'){
            return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
    }   
 });
 export default upload;