import express from "express";
import bodyParser from "body-parser";
import requestIp from "request-ip";
import * as dotenv from "dotenv";
import "dotenv/config";
import healthCheck from "./healthCheck";
import { wearableRouter } from "./wearable/wearable.router";

dotenv.config({ path: __dirname + "/.env" });

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

app.use(requestIp.mw());

app.use((req, res, next) => {
  const clientIp = requestIp.getClientIp(req);
  next();
});

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    const allowedOrigins = ["https://play.decentraland.org"];
    const origin = req.headers.origin;

    console.log("Request origin is: ", origin);
    if (allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Origin", origin);
  } else {
    const allowedOrigins = ["http://localhost:8000", "http://127.0.0.1:8000"];
    const origin = req.headers.origin;

    console.log("Request origin is: ", origin);
    if (allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, x-identity-timestamp, x-identity-metadata, x-identity-auth-chain-0, x-identity-auth-chain-1, x-identity-auth-chain-2"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  return next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/wearable", wearableRouter);
app.use("/_health", healthCheck);

export default app;
