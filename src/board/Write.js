import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Write = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({ title: "", author: "", content: "" });

    const handleChange = e => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post("database-1.c3koiuuggbgx.ap-northeast-2.rds.amazonaws.com", inputs);
            navigate("/list"); 
        } catch (error) {
            console.error("Error writing post:", error);
     
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={inputs.title} onChange={handleChange} required />
            </div>
            <div>
                <label>Author:</label>
                <input type="text" name="author" value={inputs.author} onChange={handleChange} required />
            </div>
            <div>
                <label>Content:</label>
                <textarea name="content" value={inputs.content} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Write;


// import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Write = ({ list, setList, idRef }) => {
//     const navigate = useNavigate();

//     const [inputs, setInputs] = useState({});
//     const input = useRef([]);

//     console.log(inputs);
//     const time = new Date();

//     const inputHandler = e => {
//         const { name, value } = e.target;
//         setInputs(
//             {
//                 id: idRef.current,
//                 ...inputs,
//                 [name]: value,
//                 date: time.toLocaleDateString()
//             }
//         );
//     }

//     console.log(input.current.length, input.current[0])
//     const onSubmit = e => {
//         e.preventDefault();
//         for (let i = 0; i < input.current.length; i++) {
//             if (input.current[i].value.length < 2) {
//                 alert(`${input.current[i].name}은 2자 이상 입력하세용`);
//                 input.current[i].focus();
//                 return
//             }
//         }
        
//         setList([
//             ...list,
//             inputs
//         ]);

//         idRef.current = idRef.current + 1;

//         navigate('/list')
//     }

//     return (
//         <>
//             <h2>글쓰기</h2>
//             <form onSubmit={onSubmit}>
//                 <ul>
//                     <li>
//                         <label htmlFor="subject">제목</label>
//                         <input
//                             type="text"
//                             id="subject"
//                             name="subject"
//                             onChange={inputHandler}
//                             required
//                             ref={el => input.current[0] = el}
//                         />
//                     </li>
//                     <li>
//                         <label htmlFor="name">이름</label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             onChange={inputHandler}
//                             required
//                             ref={el => input.current[1] = el}
//                         />
//                     </li>
//                     <li>
//                         <label htmlFor="content">내용</label>
//                         <textarea
//                             type="text"
//                             id="content"
//                             name="content"
//                             onChange={inputHandler}
//                             required
//                             ref={el => input.current[2] = el}
//                         />
//                     </li>
//                 </ul>
//                 <button>글작성</button>
//             </form>
//         </>
//     )
// }

// export default Write