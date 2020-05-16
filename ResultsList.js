import React from "react";

const ResultsList = (props) => {
    
    
    return (
        <div className="ui relaxed divided list">
           <p>{props.data} </p>
        </div>
    );
}

export default ResultsList;