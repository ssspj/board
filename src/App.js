import { useRef, useState } from "react"
import { Route, Routes } from "react-router-dom";
import List from "./board/List";
import Modify from "./board/Modify";
import View from "./board/View";
import Write from "./board/Write";
import Layout from "./Layout";
import db from "./db";
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



db.connect(err => {
    if (err) {
        console.error("Error connecting to MySQL database:", err);
    } else {
        console.log("Connected to MySQL database.");
    }
});

app.post("/write", (req, res) => {
    const { title, author, content } = req.body;

    const queryString = "INSERT INTO posts (title, author, content) VALUES (?, ?, ?)";
    const values = [title, author, content];

    db.query(queryString, values, (error, results, fields) => {
        if (error) {
            console.error("Error writing post:", error);
            res.status(500).json({ error: "Error writing post" });
        } else {
            console.log("Post written successfully.");
            res.status(200).json({ message: "Post written successfully" });
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const App = () => {

    const [list, setList] = useState([
        
    ]);

    const idRef = useRef(1);
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="list" element={<List list={list} />} />
                <Route path="view/:id" element={<View list={list} setList={setList} />} />
                <Route path="modify/:id" element={<Modify list={list} setList={setList} />} />
                <Route path="write" element={<Write list={list} setList={setList} idRef={idRef} />} />
            </Route>
        </Routes>
    )
}

export default App