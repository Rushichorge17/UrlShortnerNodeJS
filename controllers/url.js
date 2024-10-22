const shortid = require("shortid");
const URL = require("../models/url");

async function handelGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "url is required" });
  }

  // Generate a short ID using shortid
  const ShortID = shortid.generate();

  // Create a new URL entry in your database
  await URL.create({
    shortId: ShortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  // Respond with the newly generated short ID
  return res.render("home",{ id: ShortID });
}

async function handelGetAnalytics(req, res) {
  const shortID = req.params.shortID;

  // Find the URL by shortID
  const result = await URL.findOne({ shortID });

  // Check if the result exists and if visitHistory is defined
  if (!result) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  // Default visitHistory to an empty array if it's undefined
  const visitHistory = result.visitHistory || [];

  return res.json({
    totalClick: visitHistory.length,
    analytics: visitHistory.length,
  });
}

module.exports = {
  handelGenerateNewShortURL,
  handelGetAnalytics
};
