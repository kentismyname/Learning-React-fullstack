const express = require('express');
const router = express.Router();
const { Posts } = require('../models'); // Import the Posts model

// GET route for fetching all posts (or a greeting message)
router.get("/", async (req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

router.get('/byId/:id' , async (req, res) =>{
    const id = req.params.id
    const post = await Posts.findByPk(id);
    res.json(post);
});

// POST route for creating a new post
router.post("/", async (req, res) => {
    try {
        const post = req.body;
        const newPost = await Posts.create(post); // Wait for the post to be created
        res.json(newPost); // Respond with the created post
    } catch (error) {
        res.status(500).json({ error: error.message }); // Send an error response
    }
});


module.exports = router;
