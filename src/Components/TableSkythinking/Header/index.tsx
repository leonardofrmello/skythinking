import './index.css';

interface TableSkythinkingHeaderProps {
    titleCol1?: string
    titleCol2?: string
    titleCol3?: string
}

const TableSkythinkingHeader = ({titleCol1 = '', titleCol2 = '', titleCol3 = ''} : TableSkythinkingHeaderProps) => {
    return (
        <div className='header-table'>
            <div className='col-1'>{titleCol1}</div>
            <div className='col-2'>{titleCol2}</div>
            <div className='col-3'>{titleCol3}</div>
        </div>
    )
}


export default TableSkythinkingHeader