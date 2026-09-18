import mongoose from "mongoose";
import { Chat } from "./models/chat.js";

let chats = [
  {
    from: "Patrick Rios",
    to: "Fenil Rokad",
    message: "Hey, how are you?",
    created_at: new Date(),
  },
  {
    from: "Fenil Rokad",
    to: "Patrick Rios",
    message: "I'm good! What about you?",
    created_at: new Date(),
  },
  {
    from: "Rahul Sharma",
    to: "Priya Patel",
    message: "Are you coming today?",
    created_at: new Date(),
  },
  {
    from: "Priya Patel",
    to: "Rahul Sharma",
    message: "Yes, I'll be there soon.",
    created_at: new Date(),
  },
  {
    from: "Jay Shah",
    to: "Meet Patel",
    message: "Did you finish the project?",
    created_at: new Date(),
  },
  {
    from: "Meet Patel",
    to: "Jay Shah",
    message: "Almost done!",
    created_at: new Date(),
  },
  {
    from: "Aarav Mehta",
    to: "Riya Shah",
    message: "Can you send me the notes?",
    created_at: new Date(),
  },
  {
    from: "Riya Shah",
    to: "Aarav Mehta",
    message: "Sure, I'll send them now.",
    created_at: new Date(),
  },
  {
    from: "Harsh Patel",
    to: "Neha Joshi",
    message: "What time is the meeting?",
    created_at: new Date(),
  },
  {
    from: "Neha Joshi",
    to: "Harsh Patel",
    message: "It's at 5 PM.",
    created_at: new Date(),
  },
  {
    from: "Yash Desai",
    to: "Simran Kaur",
    message: "Have you watched that movie?",
    created_at: new Date(),
  },
  {
    from: "Simran Kaur",
    to: "Yash Desai",
    message: "Not yet. Is it good?",
    created_at: new Date(),
  },
  {
    from: "Dhruv Mehta",
    to: "Isha Patel",
    message: "Let's go for coffee.",
    created_at: new Date(),
  },
  {
    from: "Isha Patel",
    to: "Dhruv Mehta",
    message: "Sounds good!",
    created_at: new Date(),
  },
  {
    from: "Liam O'Connor",
    to: "Yuki Tanaka",
    message: "I just saw the most ridiculous cat video 😂",
    created_at: new Date(),
  },
  {
    from: "Yuki Tanaka",
    to: "Liam O'Connor",
    message: "Send it immediately. I need this in my life.",
    created_at: new Date(),
  },
  {
    from: "Amara Okafor",
    to: "Mateo García",
    message: "If we miss this flight, I'm blaming your terrible sense of time.",
    created_at: new Date(),
  },
  {
    from: "Mateo García",
    to: "Amara Okafor",
    message: "Relax, I have a plan. The plan is running very fast. 🏃",
    created_at: new Date(),
  },
  {
    from: "Sofia Rossi",
    to: "Noah Williams",
    message: "You cannot convince me that pineapple belongs on pizza.",
    created_at: new Date(),
  },
  {
    from: "Noah Williams",
    to: "Sofia Rossi",
    message:
      "I don't need to convince you. Your taste buds will figure it out eventually.",
    created_at: new Date(),
  },
  {
    from: "Chen Wei",
    to: "Aisha Khan",
    message:
      "Three hours of debugging and the problem was one missing semicolon.",
    created_at: new Date(),
  },
  {
    from: "Aisha Khan",
    to: "Chen Wei",
    message: "Classic programmer experience. The semicolon wins again. 😂",
    created_at: new Date(),
  },
  {
    from: "Lucas Silva",
    to: "Maya Thompson",
    message: "I have a terrible idea. Want to hear it?",
    created_at: new Date(),
  },
  {
    from: "Maya Thompson",
    to: "Lucas Silva",
    message: "Absolutely. Terrible ideas usually make the best stories.",
    created_at: new Date(),
  },
];

try {
  //establishing connection
  await mongoose.connect("mongodb://127.0.0.1:27017/itsApp");
  console.log(`Connected to MongoDB Database....`);

  const clearChat = await Chat.deleteMany({});

  //clearing chats
  console.log("Chat Cleared");
  console.log(clearChat);

  //adding new chats
  const newChat = await Chat.create(chats);

  console.log("New Chat Added");
  console.log(newChat);

} catch (err) {
  console.error(`There is an error ${err}`);
} finally {
  await mongoose.disconnect();

  console.log("Disconnected From MongoDB..");
}
