import React from 'react';

/**
 * @typedef PropType
 * 
 * @property {string} name
 * @property {string} value 
 * @property {string} image
 */

/**
 *key data display component
 *
 * @param   {PropType}  props  
 * 
 * 
 */
const KeyData = (props) => {
    const name = props.name;
    const value = props.value;
    const img = props.image
    let altTitle = img.split('.');
    // @ts-ignore
    altTitle = altTitle[0]

    /**
     * returns the keydata component
     *
     * @return  {JSX}
     */
    return (
        <div className={"KeyData "+ name}>
            <figure className="leftContainer">
                <img src={"/img/" + img} 
// @ts-ignore
                alt={altTitle} />
            </figure>
            <div className="rightContainer">
                <h3>{value}</h3>
                <span>{name}</span>
            </div>
        </div>
    );
};


export default KeyData;