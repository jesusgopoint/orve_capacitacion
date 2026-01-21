import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { sendEmail } from "./send-email.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));
  app.use(express.json());

  // Email API endpoint
  app.post("/api/send-email", async (req, res) => {
    try {
      const { to, from, subject, nombre, apellido, correo, telefono, mensaje, replyTo } = req.body;

      if (!to || !from || !subject || !nombre || !apellido || !correo || !telefono || !mensaje) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const result = await sendEmail(to, from, subject, {
        nombre,
        apellido,
        correo,
        telefono,
        mensaje
      }, replyTo);

      if (result.error) {
        return res.status(400).json({ message: result.error.message });
      }

      res.json({ success: true, id: result.data?.id });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3001;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
