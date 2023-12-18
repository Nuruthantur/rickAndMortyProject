import { useEffect, useState } from "react";

// export default function Pagination() {
//  const navigate = useNavigate();
//  return (
//    <div className="App">
//      <Link to="/dashboard">Dashboard</Link>
//      <button onClick={() => navigate("/")}>Sign Out</button>
//    </div>
//  );
// }

 const Pagination = () => {
    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [charsPerPage, setCharsPerPage] = useState(10);

    useEffect(() => {
        const fetchChars = async () => {
            setLoading(true);
            const res = await axios.get('https://rickandmortyapi.com/api/character');
            setChars(res.data);
            setLoading(false);
        }

        fetchChars();
    }, []); 

    console.log(chars);
    return (
        <div className="container">
            <h1>My App</h1>
        </div>
    )
 }
export default Pagination;

// https://rickandmortyapi.com/api/character