import { Post } from '../../../hooks'
import { useNavigate } from 'react-router-dom';
import './index.css'

interface TableSkythinkingBodyProps {
  posts?: Post[]
  isLoading: boolean
  isError: boolean
}


const TableSkythinkingBody = ({posts, isLoading, isError } : TableSkythinkingBodyProps) => {
  const navigate = useNavigate();
  const onClickRow = (e: any) => {
    navigate(`/Post`, { state: [e] });
    
  }

    return (
        <div>
            {isLoading && !isError && (
              <div className="center">
                <div className="loader"/>
              </div> 
            )}

           {isError && (
            <div className="center">
                <p>server error.</p>
             </div> 
           )}

            {posts?.map((post) => (
                <div className="row" key={post.id} onClick={() => onClickRow(post)}>
                    <div className="col-1">{post.id}</div>
                    <div className="col-2">{post.title}</div>
                    <div className="col-3">{post.body}</div>
                </div>
            ))}
  
        </div>

    )
}


export default TableSkythinkingBody