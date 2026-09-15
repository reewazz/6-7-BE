import multer from "multer"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+ "-" + file.originalname )
  }
})

// 1ge23utg167t662873182361283-logomomo.png
export const upload = multer({ storage: storage })