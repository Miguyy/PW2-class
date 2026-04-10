// import Express
import express from "express";
// create Express application
const app = express();
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

app.listen(port, host, () =>
  console.log(`Server running at http://${host}:${port}`),
);

// Routes

//b)
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
};

app.get("/", (req, res) => {
  res.send("Welcome to my express server");
});

//c)
app.use("/users", loggerMiddleware, (req, res, next) => {
  console.log("Accessing /users route");
  next();
});

app.get("/users", (req, res) => {
  //console.log("New GET request received at /users");
  res.json({ message: "Get all users" });
});

app.post("/users", (req, res) => {
  //console.log("POST request received at /users");
  res.json({ message: "Create a new user" });
});

//d)
const testMiddleware = (req, res, next) => {
  console.log("Test middleware executed");
  next();
};

const testMiddleware2 = (req, res, next) => {
  console.log("Test middleware 2 executed");
  next();
};

app.get("/test", testMiddleware, testMiddleware2, (req, res) => {
  //console.log("GET request received at /test");
  res.json({ message: "Testing middleware chain" });
});

//e)
const adminMiddleware = (req, res, next) => {
  const psswd = req.query;
  if (!psswd) {
    // send error response

    const err = new Error("Unauthorized: Password is required");
    err.status = 401;
    next(err);

    //res.status(401).json({ message: "Unauthorized: Password is required" });
  } else {
    console.log("Password provided");
    next();
  }
};

const isAdmin = (req, res, next) => {
  if (req.query.psswd !== "super_secure_pass") {
    res.status(403).json({ message: "Forbidden: Incorrect password" });
  } else {
    console.log("Admin access granted");
    next();
  }
};

app.get("/admin", adminMiddleware, isAdmin, (req, res) => {
  //console.log("GET request received at /admin");
  res.json({ message: "Welcome admin" });
});

// error
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});
