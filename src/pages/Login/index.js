import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, FlatList  } from 'react-native';
import Logo from './../../../assets/arte_login.jpg';

export default function Login(props) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const cadastro = () => {
        alert('Acesso concluído')
       
    }
    const DATA = [
        { id: '4', titulo: 'E-mail', teclado: 'default', tipo: 'useremail', escondido: false, onChange: setEmail },
        { id: '5', titulo: 'Senha', teclado: 'default', tipo: 'password', escondido: true, onChange: setSenha },
    ]
    const Item = ({ item }) => {
        return <TextInput style={[styles.input, styles.border]} placeholder={item.titulo}  
        keyboardType={item.teclado} textContentType={item.tipo} secureTextEntry={item.escondido} 
        onChangeText={text => item.onChange(text) } />
    }
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Image style={[styles.Image]} source={Logo} />
            <View style={[styles.main, styles.border2]}>
                <FlatList
                style={styles.flat}
                data={DATA}
                renderItem={Item}
                />
                <TouchableOpacity style={[styles.entrar, styles.border]} onPress={() => cadastro()}>
                    <Text style={[styles.entrarTexto]}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, .3)',
        height: '45%',
        width: '80%',
        borderRadius: 10,
        paddingTop: 10
    },
    border:{
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, .1)',
    
    },
    border2:{
        borderBottomWidth: 3,
        borderBottomColor: 'rgba(255, 255, 255, 1)',
      
    },

    Image:{
        width: '50%',
        height: '35%',
        
        marginVertical: 20,
        backgroundColor: 'white',
    },
    Login:{
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginVertical: 10
    },
    input:{
        color: 'white',
        width: '95%',
        borderRadius: 5,
        backgroundColor: '#fff',
        height: 40,
        marginTop: 10,
        paddingLeft: 20,
        fontSize: 20,
        alignSelf: 'center'
    },
    entrar:{
        width: '85%',
        borderRadius: 5,
        backgroundColor: 'white',
        height: 65,
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: '#4D57C9',
        justifyContent:'center',
    },
    entrarTexto:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',        
        margin: 'auto',
        color: 'white'
    },
    flat:{
        width: '100%',
        height: 'auto'
        
    }
});


