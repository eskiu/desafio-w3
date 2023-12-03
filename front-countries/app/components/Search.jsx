'use client'

import { useState } from "react"
import axios from "axios"
import styles from './Search.module.css'


export default function Search() {

    const [valor, setValor] = useState('')
    const [resultado, setResultado] = useState([])
    const [status, setStatus] = useState('')

    const buscar = async () => {

        try{
            const res = await axios.get(`http://localhost:8080/buscar?valor=${valor}`)
            setResultado(res.data)
            setStatus(res.status)
        }
        catch(error){
            console.log(error, 'error')
            setResultado([])
        }

    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            buscar();
        }
    }

    return (
      <section>
            <div className={styles.input_container}>
                <input className={styles.input} type="text" value={valor} onChange={(e) => setValor(e.target.value)} onKeyDown={handleKeyPress} />
                <button className={styles.button} onClick={buscar}>Buscar</button>
            </div>
            {status === 200 ? (
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr className={styles.tr}>
                        <th className={styles.th}>Nombre del país</th>
                        <th className={styles.th}>Población</th>
                        <th className={styles.th}>Porcentaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultado.map(({ nombre, poblacion, porcentaje }) => (
                        <tr key={nombre} className={styles.tr}>
                            <td className={styles.td}>{nombre}</td>
                            <td className={styles.td}>{poblacion}</td>
                            <td className={styles.td}>{porcentaje}%</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No se encontraron resultados</p>
            )}
      </section>
    )
  }
  