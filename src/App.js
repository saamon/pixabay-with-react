import './App.css';
import ImageGallery from "./imageGallery";
import {useRef, useState} from "react";

function App() {

    const [fetchData, setFetchData] = useState([]);
    const ref = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ref.current.value);

        //API URL
        const endpointURL =
            `https://pixabay.com/api/?key=28550824-cc85788efee766e5503307829&q=${ref.current.value}&image_type=photo`;
        //APIを叩く(データフェッチング)
        fetch(endpointURL)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data.hits)
                setFetchData(data.hits)
            })

    }

    return (
        <div className="container">
            <h2>My Pixabay</h2>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type={"text"} placeholder={"画像を探す"} ref={ref}/>
            </form>
            <ImageGallery fetchData={fetchData}/>
        </div>
    );
}

export default App;
