import React from 'react'
import { UserAuth } from '../Context/AuthContext'

const Navbar = () => {

const {currentUser,logout}=UserAuth();
    
    const setDarkMode=()=>{
      document.querySelector("body").setAttribute('data-theme','dark')
    }
    const setLightMode=()=>{
        document.querySelector("body").setAttribute('data-theme','light')
      }
   
      const toggleTheme=(e)=>{
           (e.target.checked)?setDarkMode():setLightMode();
      }


      const handleLogout=async ()=>{
        try {
          await logout()
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <>
    <div className='nav  '>
     <div className="navbar bg-base-100 flex justify-between fixed z-10  px-52">
  <div className="bbb">
    <a className="btn btn-ghost text-xl text-green-500">Chat-App</a>
  </div>
    <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="/user.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-32">
        <li>
          <a>
            Profile
          </a>
        </li>
        <li>
          <a>
          {currentUser? <button  onClick={handleLogout} className="btn btn-primary p-0 w-24 text-white">Logout</button>:""}
          </a>
        </li>
        <li><a><label className="cursor-pointer grid place-items-center mt-1">
  <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" onChange={toggleTheme}/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label></a></li>
      </ul>
    </div>
</div>
</div>
    </>
  )
}


export default Navbar