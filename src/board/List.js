
const List = ({ list }) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>no</td>
                        <td>제목</td>
                        <td>글쓴이</td>
                        <td>날짜</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((it, idx) => {
                            return (
                                <tr key={it.id}>
                                    <td>{idx + 1}</td>
                                    <td>{it.subject}</td>
                                    <td>{it.name}</td>
                                    <td>{it.date}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <hr />
            <div>
                <button>WRITE</button>
            </div>
        </>
    )
}

export default List;