import React, { useState, useContext } from 'react'
import { bubble as Menu } from 'react-burger-menu';
import './css/sidebar.css';
import { NavLink } from "react-router-dom";

export default props => {
  return (
    <Menu>
      <NavLink className="menu-item" to={"/"}>
        Dashboard
      </NavLink>
      <NavLink className="menu-item" to={"/ongoing"}>
        Ongoing Courses
      </NavLink>
      <NavLink className="menu-item" to={"/completed"}>
        Completed Courses
      </NavLink>
      <NavLink className="menu-item" to={"/wishlist"}>
        WishList
      </NavLink>
      <NavLink className="menu-item" to={"/settings"}>
        Account Settings
      </NavLink>
    </Menu>
  );
};


// // make a new context
// const MyContext = React.createContext();

// // create the provider
// const MyProvider = (props) => {
//   const [menuOpenState, setMenuOpenState] = useState(false)
  
//   return (
//     <MyContext.Provider value={{
//       isMenuOpen: menuOpenState,
//       toggleMenu: () => setMenuOpenState(!menuOpenState),
//       stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
//     }}>
//       {props.children}
//     </MyContext.Provider>
//   )
// }

// // create a button that calls a context function to set a new open state when clicked
// const Button = () => {
//   const ctx = useContext(MyContext)
//   return (
//     <button onClick={ctx.toggleMenu}>Toggle menu</button>
//   )
// }

// // create a navigation component that wraps the burger menu
// const Navigation = () => {
//   const ctx = useContext(MyContext)

//   return (
//     <Menu 
//       customBurgerIcon={false}
//       isOpen={ctx.isMenuOpen}
//       onStateChange={(state) => ctx.stateChangeHandler(state)}
//     >
//       <NavLink className="menu-item" to={"/"}>
//         Dashboard
//       </NavLink>
//       <NavLink className="menu-item" to={"/ongoing"}>
//         Ongoing Courses
//       </NavLink>
//       <NavLink className="menu-item" to={"/completed"}>
//         Completed Courses
//       </NavLink>
//       <NavLink className="menu-item" to={"/wishlist"}>
//         WishList
//       </NavLink>
//       <NavLink className="menu-item" to={"/settings"}>
//         Account Settings
//       </NavLink>
//     </Menu>
//   )
// }

// // default export here
// const App = () => {
//   return (
//     <MyProvider>
//       <div>
//         <Button />
//         <Navigation />
//       </div>
//     </MyProvider>
//   )
// }

// export default App;