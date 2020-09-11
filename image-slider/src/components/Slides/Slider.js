import React, { useRef, useEffect, useContext , useState} from "./node_modules/react";
import { Slide } from "./node_modules/react-slideshow-image";
import SlideContext from "../../context/Slides/slideContext";
import SlideItem from "./SlideItem";
import Spinner from "../layout/Spinner";
import { UncontrolledTooltip } from "./node_modules/reactstrap";


const Slider = () => {

     // Initalizing the context
     const imageContext = useContext(SlideContext);

     // Pulling out the data with destructing
     const { slides, getSlide, loading } = imageContext;
 
     useEffect(() => {
         getSlide();
         // eslint-disable-next-line
     }, []);


  const slideRef = useRef();

  const [previousIndex, setPreviousIndex] = useState(null);
  const [nextIndex, setNextIndex ] = useState();


  const style = {
     textAlign: "center",
   };

  const properties = {
    transitionDuration: 1500,
    infinite: true,
    autoplay: false,
    arrows: true,
    onChange: (previous, next) => {
      setPreviousIndex(previous);
      setNextIndex(next)
    }
  };

  const previous = () => {
    slideRef.current.goBack();
  }

  const next = () => {
    slideRef.current.goNext();
  }

  if(loading) {
    return <Spinner />
  } else {
    return (
      <div className="slide-container">
          <div > 
        {/*  If slides is not === null and not loading then show slides else show spinner */}

        <Slide ref={slideRef} {...properties} >
            {slides.map(slide =>
                <div key={slideRef} style={style} className="slide">
                    <SlideItem key={slide.id} slide={slide}/>
                </div>
                )}
        </Slide>

        </div>
        <div className="autoplay-buttons">
          
          {/* When the next button is click the tooltip will then update the state while in transition indicate which slide is next */}

          <div className="next-button">
      
            <button className="btn-sm"  type="button" onClick={next}>Next</button>
    
            <p ><i className="fas fa-info" style={{textDecoration: "underline", color: "blue"}} href="#" id="UncontrolledTooltipExample1" ></i></p>
            <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample1">
              Next slide {nextIndex + 1}

            </UncontrolledTooltip>
  
          </div>

          
          <div className="previous-button">

            {/* When the previous button is click the tooltip will then update the state while in transition
              will indicating from which slide was previous and which slide will be next*/}

          <button className="btn-sm" type="button" onClick={previous}>Previous</button>

          <p ><i className="fas fa-info" style={{textDecoration: "underline", color: "blue"}} href="#" id="UncontrolledTooltipExample2" ></i></p>

          <UncontrolledTooltip style={{ width: "100px", height: "50px"}} placement="right" target="UncontrolledTooltipExample2">

            Transitioned from {previousIndex} to {nextIndex}

          </UncontrolledTooltip>
          </div>

        </div>
      </div>

  );
  }


  
};

export default Slider;