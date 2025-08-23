import { View, Text, Button, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import { useState } from "react";
 
export default function Login({ navigation }) {
    const [usuario, setEmail] = useState(''); 
    const [senha, setSenha] = useState('');
    const [isSelected, setSelection] = useState(false);
    const usuarioValido = 'email'
    const senhaValida = 'senha'

    const ValidarLogin = () => {
        if (usuario == usuarioValido && senha == senhaValida){
            navigation.navigate('Home')
        } else {
        Alert.alert('Erro', 'Usuário ou senha inválidos');
        }
    }
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Acesse</Text>
            <Text style={styles.textoExtra}>Com email e senha</Text>

            <Text style={{fontSize: 15}}>E-mail</Text>
            <TextInput style={styles.Input} placeholder="Digite seu E-mail" value={usuario} onChangeText={setEmail}/> 

            <Text style={{fontSize: 15}}>Senha</Text>
            <TextInput style={styles.Input} placeholder="Digite sua senha" value={senha} onChangeText={setSenha}/>

            <View style={styles.subInputs}>
                <TouchableOpacity onPress={() => setSelection(!isSelected)} style={{flexDirection: 'row'}}>
                    <View style={[styles.checkbox, isSelected && {backgroundColor: '#62daa0'}]} />
                    <Text style={{ marginLeft: 8 }}>Lembrar senha</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.subInputs}>
                  <TouchableOpacity style={styles.button} onPress={() => ValidarLogin()}>
                    <Text style={styles.buttonText}>Acessar</Text>
                  </TouchableOpacity>

                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText2}>Cadastrar</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: 'auto',
        marginLeft: '3%',
    },

    title: {
        fontSize: 50,
        fontWeight: 'bold',
    },

    textoExtra: {
        fontSize: 18,
        marginBottom: '5%',
    },

    Input: {
        backgroundColor: '#eaeced',
        placeholderTextColor: '#bec3c7',
        width: '90%',
        paddingVertical: '4%',
        paddingHorizontal: '3%',
        borderRadius: 8,
        marginBottom: 15,
    },

    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#43d38d',
        borderRadius: 4,
        backgroundColor: '#fff',
    },

    subInputs: {
        alignContent: 'center', 
        flexDirection: 'row',
        width: '90%',
        height: '15%',
        justifyContent: 'space-between',
    },

    button: {
        backgroundColor: '#43d38d',
        paddingVertical: '2%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#43d38d',
        width: '47%',
        height: 'auto',
        justifyContent:'center',
    },

    button2: {
        paddingVertical: '2%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#43d38d',
        width: '47%',
        height: 'auto',
        justifyContent:'center',
    },

    buttonText: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center'
    },

    buttonText2: {
        fontSize: 15,
        color: '#black',
        textAlign: 'center'
    },
});