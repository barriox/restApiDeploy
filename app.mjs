import express, { json } from "express"; // require -> commonJS
import movies from "./movies.json";

const app = express();
app.use(json());
app.disable("x-powered-by");

app.use("/movies", movies);

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
