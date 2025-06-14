const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

const app = express();
const PORT = process.env.PORT || 3001;

const initial_path = path.join(__dirname, "public");

// Serve static files from "public"
app.use(express.static(initial_path));

// Enable file upload
app.use(fileupload());

// Home page route
app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
});

// Editor page route
app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
});

// Upload route for images
app.post('/upload', (req, res) => {
    if (!req.files || !req.files.image) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    let file = req.files.image;
    let date = new Date();
    let imagename = date.getDate() + date.getTime() + file.name;
    let uploadPath = path.join(initial_path, "uploads", imagename);

    // Ensure the uploads directory exists
    const fs = require('fs');
    const uploadsDir = path.join(initial_path, "uploads");
    if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
    }

    file.mv(uploadPath, (err) => {
        if (err) {
            res.status(500).json({ error: "File upload failed" });
        } else {
            res.json(`uploads/${imagename}`);
        }
    });
});

// Blog page route
app.get("/:blog", (req, res) => {
    res.sendFile(path.join(initial_path, "blog.html"));
});

// 404 handler
app.use((req, res) => {
    res.status(404).json("404");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});