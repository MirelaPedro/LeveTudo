import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { useState } from "react";


export default function FaleConosco({navigation}) {
    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [message, setMessage] = useState("")

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Fale Conosco</Text>
            
            <TextInput
            style={styles.input}
            placeholder="Nome: "
            onChangeText={setNome}
            value={nome}
            />

            <TextInput
            style={styles.input}
            placeholder="E-mail: "
            onChangeText={setEmail}
            value={email}
            />

            <TextInput
            style={styles.input}
            placeholder="Message: "
            onChangeText={setMessage}
            value={message}
            />

            <Text style={styles.text}>Olá, {nome}</Text>
            <Text style={styles.text}>Confirmando E-mail: {email}</Text>
            <Text style={styles.text}>{message}</Text>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1
    },

    title: {
        fontSize: 32
    },

    input: {
        fontSize: 24
    },

    text: {
        fontSize: 24
    }
})
