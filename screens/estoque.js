import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";


export default function Estoque({navigation}) {

    const [contador0, setContador0] = useState(0)
    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)
    const [contador3, setContador3] = useState(0)
    const [contador4, setContador4] = useState(0)

    function Aumentar0(){
        setContador0(contador0 + 1)
    }

    function Diminuir0(){
        if (contador0 > 0){
            setContador0(contador0 - 1)
        }
    }

    function Aumentar1(){
        setContador1(contador1 + 1)
    }

    function Diminuir1(){
        if (contador1 > 0){
            setContador1(contador1 - 1)
        }
    }

    function Aumentar2(){
        setContador2(contador2 + 1)
    }

    function Diminuir2(){
        if (contador2 > 0){
            setContador2(contador2 - 1)
        }
    }

    function Aumentar3(){
        setContador3(contador3 + 1)
    }

    function Diminuir3(){
        if (contador3 > 0){
            setContador3(contador3 - 1)
        }
    }

    function Aumentar4(){
        setContador4(contador4 + 1)
    }

    function Diminuir4(){
        if (contador4 > 0){
            setContador4(contador4 - 1)
        }
    }



    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Estoque</Text>

                {/* 1º PRODUTO */}

                <View style={styles.produto}>

                    <Image source={require('../assets/roupa0.jpg')} style={{width: 100, height: 100}}/>

                    <Text style={styles.text}>Nome</Text>
                    <Text style={styles.text}>Descrição</Text>

                    {/* CONTADOR */}
                    <View style={styles.contador}>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={Aumentar0}
                        >
                        <Text style={styles.text}> + </Text></TouchableOpacity>

                        <Text style={styles.text}>Qtd: {contador0}</Text>

                        <TouchableOpacity
                        style={styles.button}
                        onPress={Diminuir0}
                        >
                        <Text style={styles.text}> - </Text> </TouchableOpacity>
                    </View>
                    
                </View>

                {/* 2º PRODUTO */}

                <View style={styles.produto}>

                    <Image source={require('../assets/roupa1.jpg')} style={{width: 100, height: 100}}/>

                    <Text style={styles.text}>Nome</Text>
                    <Text style={styles.text}>Descrição</Text>

                    {/* CONTADOR */}
                    <View style={styles.contador}>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={Aumentar1}
                        >
                        <Text style={styles.text}> + </Text></TouchableOpacity>

                        <Text style={styles.text}>Qtd: {contador1}</Text>

                        <TouchableOpacity
                        style={styles.button}
                        onPress={Diminuir1}
                        >
                        <Text style={styles.text}> - </Text> </TouchableOpacity>
                    </View>
                    
                </View>

                {/* 3º PRODUTO */}

                <View style={styles.produto}>

                    <Image source={require('../assets/roupa2.jpg')} style={{width: 100, height: 100}}/>

                    <Text style={styles.text}>Nome</Text>
                    <Text style={styles.text}>Descrição</Text>

                    {/* CONTADOR */}
                    <View style={styles.contador}>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={Aumentar2}
                        >
                        <Text style={styles.text}> + </Text></TouchableOpacity>

                        <Text style={styles.text}>Qtd: {contador2}</Text>

                        <TouchableOpacity
                        style={styles.button}
                        onPress={Diminuir2}
                        >
                        <Text style={styles.text}> - </Text> </TouchableOpacity>
                    </View>
                    
                </View>

                {/* 4º PRODUTO */}

                <View style={styles.produto}>

                    <Image source={require('../assets/roupa3.jpg')} style={{width: 100, height: 100}}/>

                    <Text style={styles.text}>Nome</Text>
                    <Text style={styles.text}>Descrição</Text>

                    {/* CONTADOR */}
                    <View style={styles.contador}>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={Aumentar3}
                        >
                        <Text style={styles.text}> + </Text></TouchableOpacity>

                        <Text style={styles.text}>Qtd: {contador3}</Text>

                        <TouchableOpacity
                        style={styles.button}
                        onPress={Diminuir3}
                        >
                        <Text style={styles.text}> - </Text> </TouchableOpacity>
                    </View>
                    
                </View>

            {/* 5º PRODUTO */}

            <View style={styles.produto}>

                    <Image source={require('../assets/roupa4.jpg')} style={{width: 100, height: 100}}/>

                    <Text style={styles.text}>Nome</Text>
                    <Text style={styles.text}>Descrição</Text>

                    {/* CONTADOR */}
                    <View style={styles.contador}>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={Aumentar4}
                        >
                        <Text style={styles.text}> + </Text></TouchableOpacity>

                        <Text style={styles.text}>Qtd: {contador4}</Text>

                        <TouchableOpacity
                        style={styles.button}
                        onPress={Diminuir4}
                        >
                        <Text style={styles.text}> - </Text> </TouchableOpacity>
                    </View>
                    
                </View>

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

    produto: {
        width: 330,
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#DDDDD'
    },

    contador: {
        flexDirection: 'row',
        gap: 20
    },

    /* ** Texts ** */

    title: {
        fontSize: 32
    },

    text: {
        fontSize: 24
    },

    /* ** Buttons ** */

    button: {
        width: 50,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDDDDD'
    }
})
