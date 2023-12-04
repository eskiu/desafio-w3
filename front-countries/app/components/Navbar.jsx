import Darkmode from './Darkmode'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar_container}>
        <div className={styles.navbar_content_container}>
            <a className={styles.navbar_content_logo} href="/">
                w3
            </a>
            <Darkmode />
        </div>
    </nav>
  )
}
