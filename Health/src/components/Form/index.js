import React, { useState } from "react"
import { View, 
         Text, 
         TextInput, 
         TouchableOpacity,
         Vibration,
         Pressable,
         Keyboard,
         FlatList
        } from "react-native"
import ResultIMC from "./ResultIMC/"
import styles from "./style"


export default function Form() {
    
const [height, setHeight] = React.useState(null)
const [weight, setWeight] = useState(null)
const [messageIMC, setMessageIMC] = useState("Indique sua altura e seu peso.")
const [IMC, setIMC] = useState(null) 
const [textButton, setTextButton] = useState("Calcular")
const [errorMessage, setErrorMessage] = useState(null)
const [listIMC, setListIMC] = useState([])

function imcCalculator() {
    let heightFormat = height.replace(',','.')
    totalIMC = (weight/(heightFormat*heightFormat)).toFixed(2)
    setListIMC((arr) => [...arr, {id: new Date().getTime(), IMC:totalIMC}])
    setIMC(totalIMC)
}

function verificationIMC() {
    if (IMC == null) {
        Vibration.vibrate();
        setErrorMessage("Campo Obrigatório*")
    }
}

function validationIMC() {
    if (weight != null && height != null) {
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageIMC("Seu IMC é igual a:")
        setTextButton("Calcular Novamente")
        setErrorMessage(null)
    } else {
    verificationIMC()
    setIMC(null)
    setTextButton("Calcular")
    setMessageIMC("Indique sua altura e seu peso.")
    }
}

    return(
        <View style={styles.formContext}>
            {IMC == null ? (
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="1.75"
                    KeyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="80"
                    KeyboardType="numeric"/>
                <TouchableOpacity
                style={styles.ButtonCalculator}
                onPress={() => {
                    validationIMC()
                }}
                >
                <Text style={styles.textbuttonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </Pressable>
        ) : (
            <View style={styles.exhibitionResultIMC}>
                <ResultIMC messageResultIMC={messageIMC} resultIMC={IMC}/>
                <TouchableOpacity
                style={styles.ButtonCalculator}
                onPress={() => {
                    validationIMC()
                }}
                >
                <Text style={styles.textbuttonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
        )}
        <FlatList
        style={styles.listIMC}
        showsVerticalScrollIndicator={false}
        data = {listIMC}
        renderItem = {({item}) => {
            return (
                <Text style={styles.resultIMCItem}>
                    <Text style={styles.textResultItemList}>Resultado IMC =</Text>
                    {item.IMC}
                </Text>
            )
        }}
        keyExtractor = {(item) => {
            item.id
        }}
        />

        </View>
        
    );
}