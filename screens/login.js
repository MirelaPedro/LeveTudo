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
        gap: 20,
        alignItems: 'center'
    },

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

    button: {
        width: 300,
        height: 50,
        backgroundColor: '#DDDD'
    }
})
