import express from "express";
import userRoutes from "./app/module/user/user.route.js";
const app = express();
app.use(express.json())
app.get("/", (req, res) => {
  res.send("server running successfully");
});

app.use("/api", userRoutes);

export default app;
