import React from "react";
import { useHref } from 'react-router-dom';

export default () => { 

    const url = useHref();
    document.title = "404";
    
    const style = {
        "display": 'inline-block',
        "font-size": "24px",
        "color": "#fff",
        "width": "100%",
        "position": "absolute",
        "top": "45%",
        "text-align": "center",
    }

    return (
        <div style={style}>
            Sorry, Found No Page for {url}
        </div>
    );
}