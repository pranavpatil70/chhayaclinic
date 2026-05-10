import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const KEY = process.env.GOOGLE_API_KEY;
const TTL = process.env.REVIEWS_TTL_SECONDS ? Number(process.env.REVIEWS_TTL_SECONDS) : 3600; // seconds

let cache = { ts: 0, data: null };

app.get("/api/reviews", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (!PLACE_ID || !KEY) {
    return res.status(500).json({ error: "Missing GOOGLE_PLACE_ID or GOOGLE_API_KEY" });
  }

  try {
    const now = Date.now();
    if (cache.data && now - cache.ts < TTL * 1000) {
      return res.json(cache.data);
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,url&key=${KEY}`;
    const r = await fetch(url);
    const data = await r.json();

    if (data.status !== "OK") {
      return res.status(502).json({ error: data.status, raw: data });
    }

    const reviews = (data.result.reviews || []).map((rv) => ({
      author_name: rv.author_name,
      profile_photo: rv.profile_photo_url,
      rating: rv.rating,
      text: rv.text,
      time: rv.time,
      relative_time_description: rv.relative_time_description,
    }));

    cache = {
      ts: now,
      data: { name: data.result.name, rating: data.result.rating, url: data.result.url, reviews },
    };

    res.json(cache.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "server_error" });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Reviews API listening on http://localhost:${PORT}`);
});
