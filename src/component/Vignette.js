import React from 'react';

const Vignette = (props) => {
    const logo = props.logo

    return (
        <div className="vignette">
            <img src={"/img/"+logo} alt={logo} />
        </div>
    );
};

export default Vignette;