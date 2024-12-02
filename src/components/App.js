// create your App component here
import React, {useState, useEffect} from "react";

function App (){
    const [image, setimage] = useState("")
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        fetch ("https://dog.ceo/api/breeds/image/random")
        .then((res)=> res.json())
        .then(data => {
            setimage(data.message)
            setIsLoading(false)
        })
    }, [])
    

    return (
        <div>
            {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={image} alt="A Random Dog" />
      )}
        </div>
    )

}

export default App