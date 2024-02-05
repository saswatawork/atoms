import './header.scss'

export const DashboardHeader = ()=>{
    return(  
       <div className='dashboardHeader'>
        <div>Dashboard</div>
        <div><input type="date" name="daterange" value="01/01/2018 - 01/15/2018" /></div>
       </div>
    )
}
