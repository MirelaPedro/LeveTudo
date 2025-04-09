import { View, StyleSheet, Text, TextInput, Button } from "react-native";


export default function FaleConosco() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Fale Conosco</Text>

            <TextInput
            style={styles.input}
            placeholder="E-mail: "
            />
            <TextInput
            style={styles.input}
            placeholder="Password: "
            />

            <TextInput
            style={styles.input}
            placeholder="Message: "
            />

            <Text></Text>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1
    }
})
