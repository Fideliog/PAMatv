import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { useState } from "react";
 
export default function Login({ navigation }) {
    const [usuario, setUsuario] = useState(''); 
    const [senha, setSenha] = useState('');
    const usuarioValido = 'usuario'
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
            <Text style={styles.title}>Login Page</Text>
            <View style={styles.buttonContainer}>
                <TextInput
                    placeholder="Usuario" 
                    value={usuario} 
                    onChangeText={setUsuario}
                /> 
                <TextInput 
                    placeholder="Senha" 
                    value={senha} 
                    onChangeText={setSenha}
                />
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        margin: 10,
        borderRadius: 5,
    },
});