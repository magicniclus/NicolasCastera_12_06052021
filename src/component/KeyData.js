import React from 'react';
import PropTypes from 'prop-types';


const KeyData = (props) => {
    const name = props.name;
    const value = props.value;
    const img = props.image
    let altTitle = img.split('.');
    altTitle = altTitle[0]

    /**
     * returns the keydata component
     *
     * @return  {JSX}
     */
    return (
        <div className={"KeyData "+ name}>
            <figure className="leftContainer">
                <img src={"/img/" + img} alt={altTitle} />
            </figure>
            <div className="rightContainer">
                <h3>{value}</h3>
                <span>{name}</span>
            </div>
        </div>
    );
};
KeyData.propTypes = {
    props:{
        name: string.isRequired,
        value: number.isRequired,
        img: string.isRequired
    }
}


export default KeyData;