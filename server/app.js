const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
// client에서 body에 데이터를 담아보내면 서버에서 꺼내쓰기 좋게해주는 parser
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let id = 2;
const todoList = [
  {
    id: 1,
    text: "할일 1",
    done: false,
  },
]; // todoList라는 데이터를 서버에 저장.

app.get("/api/todo", (req, res) => {
  res.json(todoList);
});

app.post("/api/todo", (req, res) => {
  const { text, done } = req.body;
  console.log("req.body: ", req.body);
  todoList.push({
    id: id++,
    text,
    done,
  });
  return res.send("success");
});

app.listen(4000, () => {
  console.log("server start!");
});
