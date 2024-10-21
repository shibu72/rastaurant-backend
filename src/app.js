import express from "express";
import userRoutes from "./app/modules/user/user.route.js";
import itemRoutes from "./app/modules/items/items.route.js";
const app = express();
app.use(express.json())
app.get("/", (req, res) => {
  res.send("server running successfully");
});

app.use("/api", userRoutes, itemRoutes);

export default app;
