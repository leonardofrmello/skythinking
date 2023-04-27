import React from 'react'
import { useLocation } from 'react-router-dom';
import TableSkythinking from '../Components/TableSkythinking';


const PostDetailsScreen = () => {
    const location = useLocation();
    return (
        <>
            <TableSkythinking data={location.state} isLoading={false} isError={false} titleCol2='Title' titleCol3='Body'  />
        </>
    )
}
export default PostDetailsScreen;
