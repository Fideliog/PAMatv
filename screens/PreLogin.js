import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import casual_dog from '../assets/casual_dog.png';
import Google from '../assets/Google.png';

export default function PreLogin({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={{width: '90%'}} resizeMode="contain" source={casual_dog}/>

      <Text style={styles.title}>Ótimo dia!</Text>
      <Text style={styles.subtitle}>Como deseja acessar?</Text>

      <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Login')}>
        <View style={styles.google}><Image source={Google} style={{ width: 30, height: 30}}/></View>
        <View style={{  flex: 1, alignItems: 'center'}}>
          <Text style={styles.buttonText}> Acessar com email </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText2}>Outras opções</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10
  },

  subtitle: {
    fontSize: 18,
    marginBottom: 20
  },

  google: {
    backgroundColor: 'white', 
    borderRadius: 8, 
    borderWidth: 2, 
    borderColor: 'white',
    alignSelf: 'flex-start',
  },
  
  button: {
    backgroundColor: '#43d38d',
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#43d38d',
    alignItems:'center',
    flexDirection: 'row',
    marginBottom: 15,
    width:'90%',
    position: 'relative',
    },

  button2: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#43d38d',
    width:'90%'
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
