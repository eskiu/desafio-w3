'use client'

import { useState } from "react"
import axios from "axios"
import styles from './Search.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faUserGroup, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import './Search.css'
import Loader from "../loader/Loader";

export default function Search() {

    const [valor, setValor] = useState('')
    const [resultado, setResultado] = useState([])
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)

    const buscar = async () => {

        try{
            const res = await axios.get(`http://localhost:8080/buscar?valor=${valor}`)
            setResultado(res.data)
            setStatus(res.status)
            setLoading(false)
        }
        catch(error){
            console.log(error, 'error')
            setResultado([])
            if(error.code === 'ERR_NETWORK') setStatus(500)
            setLoading(false)
        }

    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setStatus(null)
            e.preventDefault();
            buscar();
        }
    }

    return (
      <section>
            <div className={styles.input_container}>
                <input className={styles.input} type="text" value={valor} onChange={(e) => (setValor(e.target.value), setStatus(null))} onKeyDown={handleKeyPress} />
                <button
                    className={styles.buttonSearch}
                    onClick={buscar}
                    type="button"
                    aria-label="Buscar"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Buscar
                </button>
            </div>
            
            {loading && 
                <div className={styles.loader_container}>
                    <Loader />
                </div>
            }
            {resultado.length > 0 && (
                <div className={styles.tableContainer}>
                    <div className={styles.tableHeader}>
                        <div className={styles.tableHeaderItem}>Nombre del país</div>
                        <div className={styles.tableHeaderItem}>Población</div>
                        <div className={styles.tableHeaderItem}>Porcentaje</div>
                    </div>
                    <div className={styles.tableBody}>
                        {resultado.map(({ nombre, poblacion, porcentaje }) => (
                        <div key={nombre} className='tableBodyItem'>
                            <div className={styles.tableBodyItemName}><FontAwesomeIcon icon={faLocationDot} className={styles.iconName}/> {nombre}</div>
                            <div className={styles.tableBodyItemPoblacion}><FontAwesomeIcon icon={faUserGroup} className={styles.iconPoblacion}/> {poblacion.toLocaleString('es')}</div>
                            <div className={styles.tableBodyItemPercentage}><FontAwesomeIcon icon={faEarthAmericas} className={styles.iconPercentage}/>{porcentaje}%</div>
                        </div>
                        ))}
                    </div>
                </div>
            )}
            {(status === 204 && valor.length > 2) && <div className={styles.notFoundResults}>No se encontraron resultados.</div>}
            {(status === 204 && valor.length < 3) && <div className={styles.requirements}>Por favor, ingrese un país o al menos 3 caracteres.</div>}
            {status === 500 && <div className={styles.errorResults}>Error en el servidor.</div>}
      </section>
    )
  }
  