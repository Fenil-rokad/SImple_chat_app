import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import { Chat } from "./models/chat.js";
import methodOverride from "method-override";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

async function Main() {
  try {
    //establishing connection
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB Database....`);

    //index route
    app.get("/chats", async (req, res) => {
      let data = await Chat.find();
      res.render("index", { data });
    });

    //new chat form
    app.get("/chats/new", (req, res) => {
      res.render("new");
    });

    //create route
    app.post("/new", async (req, res) => {
      let { from, to, message } = req.body;
      let newChat = await Chat.create({
        from: from,
        to: to,
        message: message,
        created_at: new Date(),
      });

      console.log("New Chat Added...");
      console.log(newChat);

      res.redirect("/chats");
    });

    //edit form
    app.get("/chats/:id/edit", async (req, res) => {
      let id = req.params.id;
      let chat = await Chat.findById(id);
      res.render("edit", { chat });
      console.log(chat);
    });

    //edit route
    app.put("/chats/:id", async (req, res) => {
      let id = req.params.id;
      let newMsg = req.body.message;
      let newChat = await Chat.findByIdAndUpdate(
        id,
        { message: newMsg },
        { runValidators: true, returnDocument: "after" },
      );
      console.log(newChat);
      res.redirect("/chats");
    });

    //delete route
    app.delete("/chats/:id", async (req, res) => {
      let id = req.params.id;
      let deletedChat = await Chat.findByIdAndDelete(id);
      console.log(deletedChat);
      res.redirect("/chats");
    });

  } catch (err) {
    console.error(`There is an error ${err}`);
  }
}


Main();

app.listen(port, () => {
  console.log(`App is running on ${port}...`);
});
