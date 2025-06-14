const express = require('express');
const router = express.Router();
const HabitProgress = require('../models/HabitProgress'); // Make sure model path is correct

// Already existing routes above...



router.post('/habit/:habitName/complete', async (req, res) => {
    const { habitName } = req.params;
    const { level } = req.body;
    const userId = req.session?.userId || 'demoUser12345678901234567890';

    try {
        let progress = await HabitProgress.findOne({ userId, habitName });

        if (!progress) {
            progress = new HabitProgress({ userId, habitName, completedLevels: [parseInt(level)] });
        } else if (!progress.completedLevels.includes(parseInt(level))) {
            progress.completedLevels.push(parseInt(level));
        }

        await progress.save();
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Failed to save progress' });
    }
});



  

module.exports = router;
