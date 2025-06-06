import { useEffect, useState } from "react";


const TelaInicial = () => {

    const[images, setImages] = useState([]);

    useEffect(() => {
        
    }, [])

    return(
        <div>
            <div>
                {images.length > 0 ? images.map(image => {
                    return(
                    <img key={image.id} style={{width: '100px', height: '100px'}} src={image.src.original} alt={image.alt} />
                    )
                }) : <div>
                    Nenhuma Imagem encontrada.
                    </div>}
            </div>
        </div>
    );

}


export default TelaInicial;