import TableSkythinking from "../Components/TableSkythinking"
import { useCallApi } from "../hooks"

const PostsScreen = () => {
    const { data, isLoading, isError } = useCallApi("https://jsonplaceholder.typicode.com/posts")
    return (
        <TableSkythinking data={data} isLoading={isLoading} isError={isError} titleCol2='Title' titleCol3='Body'  /> 
    )
}


export default PostsScreen