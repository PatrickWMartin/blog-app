import { useEffect, useState } from "react"
import List from './components/List.jsx'

function App() {
    const [postData, setPostData] = useState([]); 
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(false); 
    useEffect(() => {
        (async() => {
            try{
                setLoading('true');
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}api/allblogs`); 
                const data = await response.json();
                setPostData(data.blogs);
            } catch (err) {
                setError(true) ;
                console.log("error");
            } finally {
                setLoading(false);
            }

        })();
    }, []);
    return (
        <>
            <h1>Hello World</h1>
            <List list={postData} />
        </>
      )
}

export default App
