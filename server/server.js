const express = require("express");
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')

require('dotenv').config();
require('./config/config.mongoose.jsx')

app.use(express.json(), express.urlencoded({ extended: true }))
app.use(cors({credentials: true, origin:'http://localhost:5173'}))
app.use(cookieParser())

const userRoutes = require('./routes/user.routes.jsx')
userRoutes(app)
const gearRoutes = require('./routes/gear.routes.jsx')
gearRoutes(app)
const wishRoutes = require('./routes/wish.routes.jsx')
wishRoutes(app)
const lotteryRoutes = require('./routes/lottery.routes.jsx')
lotteryRoutes(app)


app.listen(8000, () => console.log("Crackalackin' at port 8000"))