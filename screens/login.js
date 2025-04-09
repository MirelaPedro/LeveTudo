import { View, StyleSheet, Text, TextInput, Button } from "react-native";


export default function Login({navigation}) {
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
            style={styles.button}
            title="Entrar"
            onPress={() => navigation.navigate('HomeDrawer')}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center'
    },

    title: {
        fontSize: 32
    },

    input: {
        fontSize: 32
    },

    button: {
        width: 300,
        height: 50
    }
})
