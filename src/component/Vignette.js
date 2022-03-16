import React from 'react';
import PropTypes from 'prop-types';

const Vignette = (props) => {
    const logo = props.logo

    return (
        <div className="vignette">
            <img src={"/img/"+logo} alt={logo} />
        </div>
    );
};

Vignette.protoType = {
    props:{
        logo: PropTypes.string.isRequired
    }
}

export default Vignette;