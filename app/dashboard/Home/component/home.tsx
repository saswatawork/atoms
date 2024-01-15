import './home.scss'

export const DashboardHome = ()=>{
    return(
    <div className='dashboardHome'>
       <div className='menu'>
        <h2>Logo</h2>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
       </div>
       <div className='dashboardContetnt'>
            <div className='contentHeader'></div>
            <div className='contentArea'>  
                <div className='contentBlocks'>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <div className='blockChart'>
                    <div>1</div>
                    <div>2</div>
                </div>
                <div className='contentTable'>
                    1
                    <table>

                    </table>
                </div>
            </div>  
        </div>
    </div>
    )
}
