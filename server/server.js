require("dotenv").config();
const app = require("./app");
const connectDatabase = require("./config/db");

const PORT = process.env.PORT;
app.listen(PORT, async () => {
  await connectDatabase();
  console.log(`Server started at http://localhost:${PORT}`);
});
