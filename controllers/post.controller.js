import Post from "../models/post.model.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createPost = async (req, res) => {
    try {
        const newPost = await Post.create({
            user: req.body.user,
            content: req.body.content,
            image: req.body.image || null
        });

        res.status(201).json(newPost);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ msg: "user not found" });
        res.json(post);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};