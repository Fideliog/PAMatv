import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from "react";
 
export default function Login({ navigation }) {
    const [usuario, setEmail] = useState(''); 
    const [senha, setSenha] = useState('');
    const usuarioValido = 'email'
    const senhaValida = 'senha'

    const ValidarLogin = () => {
        if (usuario == usuarioValido && senha == senhaValida){
            navigation.navigate('Home')
        } else {
        Alert.alert('Erro', 'Usuário ou senha inválidos');
        }
        
    const toggleSecureText = () => {
        setSecureText(!secureText);
        };

    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Acesse</Text>
            <Text style={styles.textoExtra}>Com email e senha</Text>

            <View style={styles.buttonContainer}>
                <Text style={styles.textInput}>E-mail</Text>
                <TextInput style={styles.Input} placeholder="Digite seu E-mail" value={usuario} onChangeText={setEmail}/> 
                <Text style={styles.textInput}>Senha</Text>
                <TextInput style={styles.Input} placeholder="Digite sua senha" value={senha} onChangeText={setSenha}/>
                <Button
                    title="Logar"
                    onPress={() => ValidarLogin()}
                />
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
        fontWeight: 'bold'
    },
    buttonContainer: {
        margin: 10,
        borderRadius: 5,
    },
    textoExtra: {
        fontSize: 18,
        marginBottom: '5%',
    },
    textInput: {
        fontSize: 15,
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
});