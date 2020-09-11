import React from "./node_modules/react";

const ImageItem = ({ slide}) => {

    // Pulling out the info needed
    const { image_url, name, description} = slide;
    return(
         <div>
           <img src={image_url} alt="img" />
              <div className="details">
                <p className="location">
                  {name}</p>
                <p className="location">
                  {description}</p>
              </div>
         </div>
      
    )
};

export default ImageItem;