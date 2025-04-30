import React, { useState } from 'react';

function AdivinaComponent() {

    const [numero, setNumero] = useState(1); // creamos un estado "número", que será el que elija el usuario (valor inicial 1)
    const [sorteo, setSorteo] = useState(0); // creamos un estado "sorteo", será el numero que salga de manera aleatoria (valor inicial 0)
    const [result, setResult] = useState(false); // creamos el estado de "resultado" (en false para no mostrar inicalmente el resultado, 
    // sino la pantalla de participar en el sorteo)
    const [jugadas, setJugadass] = useState(0); // contar las veces que jugó
    const [ganadas, setGanadas] = useState(0); // contar las veces que ganó
    const [perdidas, setPerdidas] = useState(0); // contar las veces que perdió

    const sortear = () => { // función que genera el numero aleatorio 1 - 10; guarda el resultado en la viarable winner 
        // y a su vez en el estado Sorteo
        const winner = Math.floor(Math.random() * 10) + 1;
        setSorteo(winner); // asigno valor por funcion
        setResult(true); // asigno valor por funcion; muestra en la pantalla el resultado

        setJugadass(jugadas + 1);

        if (winner === numero) {
            setGanadas(ganadas + 1)
        } else {
            setPerdidas(perdidas + 1)
        }
    };

    const colorResultado = sorteo === numero ? { color: 'green' } : { color: 'red' };

    return (
        <div style={{ margin: 30 }}>
            {!result ? // si Result es false (if result === false) --> !result 
                // si es false, se muestra el input y el botton:
                // type="number" permite que el usuario ingrese números
                // El value viene del estado numero
                // onChange actualiza ese valor con lo que escribe el usuario
                // Number() para convertir de string a número
                <>
                    <h4>Adivina el numero del 1 al 10</h4>
                    <input
                        type="number"
                        min="1" // validar numero min
                        max="10" // validar numero max
                        value={numero}
                        onChange={(e) => {
                            const val = Number(e.target.value);
                            if (val >= 1 && val <= 10) setNumero(val);
                        }}
                    />

                    <br />
                    <button onClick={() => sortear()}>SORTEAR</button>
                    {/* al hacer click, se ejecuta la función sortear */}
                </>
                :
                // Si result es true; entonces muestra este codigo de bloque:
                <>
                    <hr />
                    <h3>Usted eligio el número: {numero}</h3>
                    <h3>Salió el número: {sorteo}</h3>
                    <h3 style={colorResultado}>{sorteo === numero ? "Ganaste" : "Seguí Participando"}</h3>
                    <br />
                    <h3>Veces que jugó: {jugadas}</h3>
                    <h3>Veces que ganó: {ganadas}</h3>
                    <h3>Veces que perdió: {perdidas}</h3>
                    <button onClick={() => {
                        setResult(false);
                        setNumero(1);
                    }}>Volver a jugar</button>
                    {/* boton para reiniciar el juego */}
                </>
            }

        </div>
    );
}

export default AdivinaComponent;

//ejercicio
// 1- contar cuantas veces jugó, cuantas ganó y cuantas perdió
// 2- mostrar en rojo cuando pierda y en verde cuando gana
// 3- validar el ingreso a número del 1 al 10
