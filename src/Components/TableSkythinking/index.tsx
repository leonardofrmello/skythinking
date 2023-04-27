import { Post } from "../../hooks"
import TableSkythinkingBody from "./Body"
import TableSkythinkingHeader from "./Header"

interface TableSkythinkingProps{
    data: Post[]
    isLoading: boolean
    isError: boolean
    titleCol1?: string
    titleCol2?: string
    titleCol3?: string
}

const TableSkythinking = ({
    data,
    isLoading,
    isError,
    titleCol1,
    titleCol2,
    titleCol3
}: TableSkythinkingProps) => {

    return (
        <>
            <TableSkythinkingHeader titleCol1={titleCol1} titleCol2={titleCol2} titleCol3={titleCol3} />
            <TableSkythinkingBody posts={data} isLoading={isLoading} isError={isError} />
        </>
    )
}


export default TableSkythinking