import React from "react";

const slideItem = ({ slide}) => {

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

export default slideItem;