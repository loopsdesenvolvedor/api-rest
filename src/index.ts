import express from "express";
import "dotenv/config";
import { routes } from "./routes";

const port = process.env.PORT || 3000;

const app = express();
routes(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
