// import Express
import express from "express";
// create Express application
const app = express();
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;
// sets the server response to a GET request on URI /
/* app.get("/", (req, res) => {
  res.send("<html><body><h1>Hello World</h1></body></html>");
}); */

// Routes
app.get("/", (req, res) => {
  //console.log("GET request received at /");
  res.send("Hello World");
});

app.get("/", (req, res) => {
  //console.log("New GET request received at /");
  res.json({ message: "Hello World" });
});

app.post("/students", (req, res) => {
  //console.log("POST request received at /students");
  res.json({ message: "Student created successfully" });
});

// Global Middleware
//app.use(express.json()); // Middleware to parse JSON request bodies

app.use("/students", (req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    // event listener for when the response is finished
    const duration = Date.now() - start;
    console.log(`Request took ${duration}ms`);
  });
  next();
});

app.get("/error", (req, res, next) => {
  try {
    let x = y;
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// server creation and listening for any incoming requests
app.listen(port, host, (error) => {
  //console.log(`App listening at http://${host}:${port}/`);
});
