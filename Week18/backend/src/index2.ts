import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());

const prisma = new PrismaClient({
  log: ["query", "error", "warn"],
});

/* ------------------ ROUTES ------------------ */

// CREATE USER
app.post("/users", async (req, res) => {
  try {
    const { username, password, age, city } = req.body;

    const user = await prisma.user.create({
      data: {
        username,
        password,
        age,
        city,
      },
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

// DELETE USER
app.delete("/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.user.delete({
      where: { id },
    });

    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(404).json({ error: "User not found" });
  }
});

// UPDATE USER
app.put("/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { username } = req.body;

    const user = await prisma.user.update({
      where: { id },
      data: { username },
    });

    res.json(user);
  } catch (err) {
    res.status(404).json({ error: "User not found" });
  }
});

// FIND USER
app.get("/users/:id", async (req, res) => {
  const id = Number(req.params.id);

  const user = await prisma.user.findFirst({
    where: { id },
  });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

// FIND USER WITH TODOS
app.get("/users/:id/todos", async (req, res) => {
  const id = Number(req.params.id);

  const user = await prisma.user.findFirst({
    where: { id },
    include: {
      todos: true,
    },
  });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

/* ------------------ SERVER ------------------ */

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

/* ------------------ SHUTDOWN CLEANUP ------------------ */

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
