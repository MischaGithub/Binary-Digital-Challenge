import React, { useReducer } from "react";
import SlideContext from "./slideContext";
import imageReducer from "./slideReducer";
import {
    GET_SLIDE,
    SLIDE_ERROR
} from "../types";
import axios from "axios";

const SlideState = props => {
    const initialState = {
        slides: [],
        loading: true,
        error: null
    };

    const [ state, dispatch ] = useReducer(imageReducer, initialState);

    // Get Slides
    const getSlide =  async () => {
        try {
            const res = await axios.get("/api/images");

            dispatch({
                type: GET_SLIDE,
                payload: res.data
            });
            
        } catch (err) {
            dispatch({
                type: SLIDE_ERROR,
                payload: err.response.msg
            });
        }
    };

    // Slides Error

    return (
        <SlideContext.Provider
        
        // Providing the values
        value={{
            slides: state.slides,
            loading: state.loading,
            getSlide

        }}
        >
            { props.children }
        </SlideContext.Provider>
    )
};

export default SlideState;