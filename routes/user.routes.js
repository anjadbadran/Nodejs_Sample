import express from "express";
import {getUsers, createUsers} from "../controllers/user.controller.js";
//import { router } from "./users.js";

const router= express.Router();

router.get("/", getUsers);
router.post("/", createUsers);

export default router;

