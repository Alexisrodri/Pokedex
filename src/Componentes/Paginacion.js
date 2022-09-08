import React from "react";

const Paginacion = (props) => {

const {pages,totalPages,clickLeft,clickRight} = props;

return(
    <div className="Paginacion">
    <button onClick={clickLeft}>
    ⬅
    </button>
    <div>{pages} de {totalPages}</div>
    <button onClick={clickRight}> 
    ➡
    </button>
    </div>
)
}

export default Paginacion;