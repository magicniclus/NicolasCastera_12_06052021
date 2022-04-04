import React, {useState, useEffect} from 'react';
import { globalData } from '../service/datamanager';

const Title = () => {
    /**
     * [loading state]
     *
     * @param   {boolean}  false
     *
     */
    const [loading, setLoading] = useState(false);

    /**
     * [data State]
     *
     */
    const [data, setData] = useState (null);

    /**
     * [itsLoading function]
     * [retrieval of globalData data via the datamanager]
     */
    const itsLoading = async () => {
        const makeData = await globalData();
        setData(makeData);
        setLoading(true);
    }

    useEffect(() =>{
        itsLoading()
    }, [])

    if(!loading){
        return(
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    } else {
         return (
            <div className="title">
                <h1>Bonjour <span>{data}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        );
    }
   
};

export default Title;