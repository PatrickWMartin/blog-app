import { useEffect, useState } from "react"

function App() {
    const [data, setData] = useState([]); 
    useEffect(() => {
        (async() => {
            try{
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}api/allblogs`); 
                const data = await response.json();
                setData(data);
                console.log(data);
            } catch {
                console.log("error");
            }

        })();
    }, []);

    return (
        <>
            <p>Hello World</p>
        </>
      )
}

export default App
