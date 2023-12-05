import Darkmode from './Darkmode'
import styles from './Navbar.module.css'
import Image from 'next/image'
import LogoW3 from '../../public/logo_w3.svg'

export default function Navbar() {
  return (
    <nav className={styles.navbar_container}>
        <div className={styles.navbar_content_container}>
            <a className={styles.navbar_content_logo} href="https://w3itsolutions.net/" target='_blank'>
              <Image src={LogoW3} width={100} height={60} alt='logo of the company w3 solutions'/>
            </a>
            <Darkmode />
        </div>
    </nav>
  )
}
