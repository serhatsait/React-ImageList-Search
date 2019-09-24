import React from 'react';
import './image-list.css'
import Image from "./image";


//bunu bir fonksiyon base tanımladık çünkü burada bir state veya başka bir yaşam döngüsü fonksiyonuna ihtiyacımız yok.
//O yüzden class base tanımlamamıza gerek yoktu
const ImageList = ({images}) => {

    const preparedImageList = images.map(image => {
        return (
            <Image key={image.id} image={image}/>
        )
    });

    return (
        <div className={'image-list-container'}>
            {preparedImageList}
        </div>
    )
};

export default ImageList;