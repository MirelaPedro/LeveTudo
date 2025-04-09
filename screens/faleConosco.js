import { View, StyleSheet, Text, TextInput, ScrollView } from "react-native";
import { useState } from "react";


export default function FaleConosco({navigation}) {
    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [message, setMessage] = useState("")

    return(
        <ScrollView>
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
        </ScrollView>
    )
}


const styles = StyleSheet.create({

    /* ** Views ** */
    container: {
        flex:1,
        alignItems: 'center',
        gap: 20,
        justifyContent: 'space-evenly'
    },

    /* ** Texts ** */
    title: {
        fontSize: 32
    },

    input: {
        width: 300,
        height: 50,
        borderWidth: 5,
        borderColor: '#DDDD',
        fontSize: 24
    },

    text: {
        fontSize: 24
    }
})
