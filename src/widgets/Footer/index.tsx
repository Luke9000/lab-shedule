import { Icon } from "../../shared/ui/icon";
import styles from "./styles.module.css";
import { Link} from "react-router-dom";

const index = () => {

    const handleClickIcon = () => {
            console.log('click')
        };

  return (  
        <footer className={styles.wrapper}>
            <nav className={styles.nav}>
            
                 <ul className={styles.ul}>
                    
                    <li>
                         <Link to="/map">
                            <Icon className="Icon-Custom" type="Map" />
                         </Link> 
                    </li>
                    <li>
                         <Link to="/">
                            <Icon className="Icon-Custom" type="Home" />
                         </Link> 
                    </li>
                    
                    <li>
                         <Link to="/calendar">
                            <Icon className="Icon-Custom" type="Calendar" />
                         </Link> 
                    </li>
                </ul> 
            </nav>
        {/* <button onClick={toggleTheme}>{theme}</button> */}
      </footer>
  )
}

export default index