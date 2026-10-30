const router = require("express").Router();
const Lead = require("../models/Lead");

router.post("/", async (req, res) => {
  try {
    const { name, email, company = "", message } = req.body;
    if (![name, email, company, message].every(value => typeof value === "string")) {
      return res.status(400).json({ message: "Please submit valid form fields." });
    }
    if (!name.trim() || !email.trim() || !message.trim()) {
      return res.status(400).json({ message: "Name, email and message are required." });
    }
    if (name.trim().length < 2 || message.trim().length < 10) {
      return res.status(400).json({ message: "Name must be at least 2 characters and message at least 10 characters." });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ message: "Please enter a valid email address." });
    }
    const lead = await Lead.create({ name, email, company, message });
    res.status(201).json({ message: "Request received.", id: lead._id });
  } catch (error) {
    console.error("Lead submission failed:", error.message);
    res.status(500).json({ message: "Server error while saving your request." });
  }
});

// Development/admin convenience endpoint. Add authentication before public production use.
router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }).select("-__v");
    res.json({ count: leads.length, leads });
  } catch (error) {
    res.status(500).json({ message: "Could not retrieve leads." });
  }
});

module.exports = router;