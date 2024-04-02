import express, { json } from "express";
import { moviesRouter } from ("./routes/movies.js");
import { corsMiddleware } from "./middlewares/cors";

const app = express();
app.disabled("x-powered-by");

app.use("/movies", moviesRouter); //each time express detects a request to /movie  it will use the router in moviesRouter


app.use(json());
app.use(corsMiddleware());

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
