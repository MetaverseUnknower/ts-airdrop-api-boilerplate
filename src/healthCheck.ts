import express from "express";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send({
    success: true,
    text: "Server is up and running.",
  });
});

export default router;
