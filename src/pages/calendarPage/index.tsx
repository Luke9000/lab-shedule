import Layout from '../../app/layouts/DashboardLayout'
// import Calendar from '../../features/calendar';
import Calendar from '../../features/calendarapp';
import styles from "./styles.module.css";

const calendarPage = () => {
  return (
    <>
    <Layout>
      <div className={styles.sections}>
        <Calendar></Calendar>
      </div>
    </Layout>
    </>
  )
}

export default calendarPage