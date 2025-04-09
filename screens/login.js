import { View, StyleSheet, Text, TextInput, Button } from "react-native";


export default function Login() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>LOGIN</Text>

            <TextInput
            style={styles.input}
            placeholder="E-mail: "
            />
            <TextInput
            style={styles.input}
            placeholder="Password: "
            />

            <Button
            />


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1
    }
})

