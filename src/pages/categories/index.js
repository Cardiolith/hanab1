import React, { useEffect } from "react";
import {} from 'antd';
import { useParams } from "react-router-dom";

const CategoryPage = () => {

    const { category }  = useParams();

    useEffect(() => {
        
    }, [category]);

    return (
        <></>
    )
}

export default CategoryPage;