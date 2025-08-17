const express = require('express');
const { generateSummary } = require('../controllers/summarizeController');
const router = express.Router();

/**
 * POST /api/summarize
 * Summarize text input
 * 
 * Request body:
 * {
 *   "transcript": "Meeting text goes here...",
 *   "prompt": "Optional custom instructions"
 * }
 */
router.post('/', generateSummary);

module.exports = router;