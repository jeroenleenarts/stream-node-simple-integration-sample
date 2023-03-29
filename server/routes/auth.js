const express = require("express");

const { signup, login, chpasswd, users, feedWebhook, muxUpload, muxPlayback, muxAsset } = require("../controllers/auth.js");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post('/users', users);
router.post('/webhook', feedWebhook);
router.get('/webhook', feedWebhook);
router.post('/chpasswd', chpasswd);
router.post('/mux-upload', muxUpload);
router.post('/mux-asset', muxAsset);
router.post('/mux-playback', muxPlayback);

module.exports = router;
