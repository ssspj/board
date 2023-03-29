import { useState } from "react"
import { Route, Routes } from "react-router-dom";
import List from "./board/List";
import Layout from "./Layout";

const App = () => {

    const [list, setList] = useState([
        { id: 1, name: "관리자", subject: "첫번쨰 게시물...", content: "우리나라 대한민국 가자 기영아 순이야", date: "2023.03.29" },
        { id: 2, name: "관리자", subject: "두번쨰 게시물...", content: "우리나라 대한민국 가자 기영아 순이야", date: "2023.03.30" },
    ]);
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="list" element={<List list={list} />} />
            </Route>
        </Routes>
    )
}

export default App