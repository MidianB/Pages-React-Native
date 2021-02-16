import { StatusBar } from 'expo-status-bar';
import React from 'react';
import  {useState} from 'react';
import { StyleSheet, Text, View,Image, TextInput, Alert, Button, TouchableOpacity } from 'react-native';


export default function App() {



  const [nome, setNome] =useState('');
  const [email, setEmail] =useState('');
  const [senha, setSenha] =useState('');
  const [tipoEscola, setTipoEscola] =useState('');
  const [sobrenome, setSobrenome] =useState('');
  const [escolaridade, setEscolaridade] =useState('');
  const [cpf, setCpf] =useState('');
  const [dataNascimento, setDataNascimento] =useState('');

  const cadastro =()=>{
    Alert(nome);
    Alert(email);
    Alert(senha);
    Alert(sobrenome);
    Alert(cpf);
    Alert(dataNascimento);
    Alert(escolaridade);
    Alert(tipoEscola);
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden/>

     <Text style={styles.text}>CONATUS</Text>
      <StatusBar  />

   

      <Image source={require('./../../../assets/logo.jpg')}
      style={styles.logo}
      ></Image>
      <Text style={styles.h1}>CADASTRE-SE</Text>



<Text style={styles.h2}>Nome</Text>
      <TextInput style={styles.input} 
      placeholder="Digite seu nome" onChangeText={text=>setNome(text)}/>

<Text style={styles.h2}>Sobrenome</Text>
      <TextInput style={styles.input} 
      placeholder="Digite seu email" onChangeText={text=>setSobrenome(text)}/>

<Text style={styles.h2}>CPF</Text>
      <TextInput style={styles.input} 
      placeholder="Digite seu CPF" onChangeText={text=>setCPF(text)}/>

<Text style={styles.h2}>Data de Nascimento</Text>
      <TextInput style={styles.input} 
      placeholder="dd/mm/aaaa" onChangeText={text=>setNascimento(text)}/>
      

      <Text style={styles.h2}>Escolaridade</Text>
      <TextInput style={styles.input} 
      placeholder="Digite seu grau de escolaridade" onChangeText={text=>setEscolaridade(text)}/>

<Text style={styles.h2}>Tipo de Escola</Text>
      <TextInput style={styles.input} 
      placeholder="Pública ou Privada" onChangeText={text=>setTipoEscola(text)}/>

<Text style={styles.h2}>Email</Text>
      <TextInput style={styles.input} 
      placeholder="email@exemplo.com" onChangeText={text=>setEmail(text)}/>

<Text style={styles.h2}>Senha</Text>
      <TextInput style={styles.input} 
      placeholder="Digite sua senha" onChangeText={text=>setSenha(text)}
      secureTextEntry={true}
      />

      <TouchableOpacity style ={styles.btncadastro} onPress={()=>cadastro()}>
        <Text>CADASTRAR</Text></TouchableOpacity>



      {/*<Button title="Login"style={styles.button}
      onPress={() => Alert.alert('Login colcluído!')}
  />
      <Button title="Cadastrar"
      onPress={() => Alert.alert('Cadastro realizado com sucesso!')}
  /> */}     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#3AC1F0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width:60,
    height:60,
    borderRadius:20,
    Align:'left'

  },
  button:{
   
    marginTop:1,
    padding:100

  },

  text:{
    
    marginTop:10,
    padding:100,
    width:1274,
    textAlign:'center',
    fontSize: 19
  

  },
  input:{
    marginTop:10,
    padding:10,
    width:350,
    backgroundColor:'#fff',
    fontSize: 15,
    borderRadius:5
  },
  btncadastro:{
    width: 300,
    height:40 ,
    backgroundColor:'#007bff',
    justifyContent:'center',
    textAlign:'center',
    borderRadius:5,
  
    height:40

  }


  

});
