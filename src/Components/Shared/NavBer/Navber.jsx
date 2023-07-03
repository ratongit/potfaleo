import { Link } from "react-router-dom";
import './Navber.css'
const Navber = () => {
    const i = 1 || 2 || 3 || 4 || 5;


    const navitem = <>

        <ul className="menu  menu-horizontal max-md:flex px-1 max-md:flex-col  xl:justify-center  font-semibold md:gap-7  gap-1 md:inline-block text-decoration-none max-md:bg-blue-400 max-md:rounded-3xl  text-xl">
                <li style={{ '--i': 4 }}  ><Link className="hover:text-blue-300 text-blue-50  text-decoration-none" to='/'> Home</Link></li>
                <li style={{ '--i': 3 }}  ><Link className="hover:text-blue-300  text-decoration-none text-blue-50" to='/services'>Services</Link></li>
                <li style={{ '--i': 2 }}  ><Link className="hover:text-blue-300 text-decoration-none text-blue-50" to='/project'> Projects</Link></li>
                <li style={{ '--i': 1 }}  ><Link className="hover:text-blue-300 text-decoration-none text-blue-50" to='/'> Contucts</Link></li>
               
                
        </ul>
    </>


    return (
        <div className="nav-bg relative text-white  bg-blue-50">
            <div className="navbar text-blue-500  ">
                <div className="navbar-start  " >
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg  xmlns="http://www.w3.org/2000/svg" className="h-10 w-8 text-white md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow flex  w-52 lg:hidden bg-transparent   rounded-3xl text-xl">
                            {navitem}
                        </ul>
                    </div>
                </div>
            </div>  

<div className="flex w-100% max-md:hidden justify-between align -mt-10 mx-16">
<div>
                        <ul>
                            <li><div className="font-bold text-3xl ">Pot<span className="text-blue-400">fileo</span></div></li></ul>

                    </div>

            <div className="flex w-100% justify-between gap-10">

            {navitem}

         </div> 

         <button className="btn btn-secondary max-md:hidden ">Download Resume</button>

</div>








             </div>
    );
};

export default Navber;