import { Icon } from "../../shared/ui/icon";
import styles from "./styles.module.css";
import { Link} from "react-router-dom";

const index = () => {
  return (
    <div className={styles.wrapper}>
        <header className={styles.header}>
          <Icon className="Icon-Custom" type="Calendar" />
          <Icon className="Icon-Custom" type="Calendar" />
      </header>
    </div>
  )
}

export default index