// import { useState, useEffect} from "react";
import Logo from "../../src/logo_turisteando.png"

function SideBar() {
    

    

    return(    
    <div>

		<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<i className="fas fa-chart-line"></i>
				</div>
				<div className="sidebar-brand-text mx3">Admin</div>
			</a>
			<a href="http://localHost:5020" ><div className="sidebar-brand-text  mx-3 turisteando" >Turisteando Home</div>
				<div className="sidebar-brand-icon"><img src={Logo} width="80px" ></img></div></a>
			

			
			<hr className="sidebar-divider my-0"/>

		
			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span></a>
			</li>

	
			<hr className="sidebar-divider"/>


			{/* <div className="sidebar-heading">Actions</div> */}

		
			{/* <li className="nav-item">
				<a className="nav-link collapsed" href="/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Pages</span>
				</a>
			</li>

	
			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Charts</span></a>
			</li>


			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-table"></i>
					<span>Tables</span></a>
			</li> */}


			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
	
  </div>
    
		
    )
}

export default SideBar;