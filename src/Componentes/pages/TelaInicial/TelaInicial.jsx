import { useEffect, useState } from "react";
import { pexelsRequest } from "../../../config/axios/pexels";


const TelaInicial = () => {

    const[images, setImages] = useState([]);

    useEffect(() => {
        pexelsRequest.getPhotos("wedding").then(data => {
            setImages(data.photos)
            console.log(data);
            
        })
        images.sort((image1, image2) => image1.id - image2.id);
        console.log(images);
        
    }, [])

    return(
        <div>
            <div>
                {images.length > 0 ? images.map(image => {
                    return(
                    <img style={{width: '100px', height: '100px'}} src={image.src.original} alt={image.alt} />
                    )
                }) : <div>
                    Nenhuma Imagem encontrada.
                    </div>}
            </div>
        </div>
    );

}


export default TelaInicial;