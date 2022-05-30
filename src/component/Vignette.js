
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef PropType
 * 
 * @property {string} logo
 */

/**
 * [Vignette component]
 *
 * @param   {PropType}  props  [props description]
 * 
 * 
 */
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