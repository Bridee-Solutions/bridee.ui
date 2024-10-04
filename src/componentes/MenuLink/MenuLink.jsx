import styles from "./MenuLink.module.css";	
import { NavLink } from "react-router-dom";


function MenuLink({ to, children }) {

    return (
        <NavLink
        className={({ isActive }) => `
          ${styles.link}
          ${isActive ? styles.linkDestacado : ""}
          `}
        to={to}
        end
        style={({ isActive }) => ({
          color: isActive ? 'black' : 'white',
          background: isActive ? 'white' : 'none',
      })}
      >
        
        {children}
      </NavLink>
    );
    }

  
export default MenuLink;