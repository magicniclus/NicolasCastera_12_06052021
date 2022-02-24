import React from 'react';

const KeyData = (props) => {
    const name = props.name;
    const value = props.value;
    const img = props.image
    let altTitle = img.split('.');
    altTitle = altTitle[0]

    console.log(name, value);

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

export default KeyData;