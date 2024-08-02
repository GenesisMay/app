import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export const Ejercicio = () => {
    //arreglo inicial
    const arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    //hook useState : vectores de clasificación
    const [pares, setPares] = useState<number[]>([]);
    const [impares, setImpares] = useState<number[]>([]);
    //hook useState: mostrar el resultado
    const [mostrarResultado, setMostrarResultado] = useState<boolean>(false);

    //función de clasificación
    const clasificarNumeros = () => {
        //método filter: clasificar la data dle arreglo
        const tempPares = arreglo.filter((numero) => numero % 2 === 0);
        //agregar a nuestro arreglo
        setPares(tempPares);

        const tempImpares = arreglo.filter((numero) => numero % 2 !== 0);
        setImpares(tempImpares);

        //mostrar resultado
        setMostrarResultado(true);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>BIENVENIDO</Text>
            <Text style={styles.text}>Vector: {arreglo.join(', ')}</Text>
            <Button
                title='CLASIFICAR'
                onPress={clasificarNumeros} />
            {
                mostrarResultado === true
                    ?
                    <View>
                        <Text style={styles.text}>Pares: {pares.join(', ')}</Text>
                        <Text style={styles.text}>Impares: {impares.join(', ')}</Text>
                    </View>
                    :
                    <Text></Text>
                }

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})