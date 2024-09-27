const app = require("./app");
require("dotenv").config(); // Load environment variables from .env

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
