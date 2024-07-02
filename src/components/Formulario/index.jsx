import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const renderizaResultado = () => {
        const resultado = parseFloat(peso / (altura * altura)).toFixed(2)
        const imc = resultado

        if (resultado <= 18.5) {
            return (
                <p className={styles.resultado}>{resultado} Abaixo do normal</p>
            )
        }
        else if (resultado > 18.5 <= 24.9) {
            return (
                <p className={styles.resultado}>{resultado} Normal</p>
            )
        }
        else if (resultado >= 24.9 <29.9) {
            return (
                <p className={styles.resultado}>{resultado} Sobrepeso </p>
            )
        }
        else if (resultado >=29.9 <34.9 ) {
            return (
                <p className={styles.resultado}>{resultado} Obesidade grau I</p>
            )
        }
        else if (resultado >=35 <39.9 ) {
            return (
                <p className={styles.resultado}>{resultado} Obesidade grau II</p>
            )
        }
        else if (resultado > 40 ) {
            return (
                <p className={styles.resultado}>{resultado} Obesidade grau III</p>
            )
        }              
    }

    return (
        <div className={styles.container}> 
        <header className={styles.header}>
            <h1>Calculadora de IMC</h1>
        </header>
        <form className={styles.form}> 
        <h2 className={styles.title}>IMC</h2>
            <input className={styles.input} type="number" min={0} placeholder="Peso (kg)" onChange={evento => setPeso(evento.target.value)}/>
            <input className={styles.input} type="number"  step={0.01} max={2.3} placeholder="Altura (m)" onChange={evento => setAltura(evento.target.value)}/>
        <span className={styles.resultado}>{renderizaResultado()}</span>
        </form>
        </div>
    

    )
}

export default Formulario;