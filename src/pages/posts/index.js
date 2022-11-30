import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';

const PostPage = () => {
    const { id } = useParams();

    useEffect(() => {

    }, [id]);

    return (
        <></>
    )
}

export default PostPage;