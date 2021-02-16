import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Logo from "./../../../assets/logo.jpg";

const { height, width } = Dimensions.get("window");
export default function Home(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={styles.containerScroll}>
          <Image source={Logo} style={styles.logo} />
          <TouchableOpacity
            style={[styles.botao, styles.border]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.botaoTexto}>Acesse</Text>
          </TouchableOpacity>
          <View style={[styles.containerTexto, styles.border2]}>
            <Text style={styles.texto}>
              Desenvolvendo o potencial de jovens através da tecnologia
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.botao, styles.border]}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={styles.botaoTexto}>Cadastre-se</Text>
          </TouchableOpacity>
          <View style={[styles.containerTexto, styles.border2]}>
            <Text style={styles.titulo}>O que fazemos</Text>
            <Text style={styles.texto}>
              O QUE FAZEMOS A Conatus surge com o objetivo de desenvolver o
              potencial de jovens em situação de vulnerabilidade social.
              Queremos contribuir na ascensão profissional de jovens que estão
              ou recém sairam do ensino médio, através do estímulo a descoberta
              de talentos, capacitação para o mercado de trabalho e
              encaminhamento para vagas de emprego
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.botao, styles.border]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.botaoTexto}>SAIBA MAIS</Text>
          </TouchableOpacity>

          <View style={[styles.containerTexto, styles.border2]}>
            <Text style={styles.titulo}>Guia de aprendizagem</Text>
            <Text style={styles.texto}>
              São oferecidas algumas trilhas de habilidades técnicas e
              comportamentais necessárias em algumas áreas de atuação. Essa
              jornada é composta de vídeo aulas, textos, indicações de livros e
              exercícios para o aprimoramento dos conhecimentos. Muitos dos
              conteúdos aqui indicados não são autorais, mas são conteúdos que
              profissionais das respectivas áreas consideram extremamente
              relevantes.
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.botao, styles.border]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.botaoTexto}>SAIBA MAIS</Text>
          </TouchableOpacity>

          <View style={[styles.containerTexto, styles.border2]}>
            <Text style={styles.titulo}>Vagas</Text>
            <Text style={styles.texto}>
              Na área de vagas será possível encontrar vagas e empresas com
              processo seletivo aberto que se encaixam no perfil do nosso
              público alvo. Além de vagas direcionadas para minorias como PCD,
              mulheres, negros e LGBTI+. Teremos também um espaço para cadastro
              de vagas de empresas parceiras.
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.botao, styles.border]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.botaoTexto}>SAIBA MAIS</Text>
          </TouchableOpacity>

          <View style={[styles.containerTexto, styles.border2]}>
            <Text style={styles.titulo}>Feed personalizado</Text>
            <Text style={styles.texto}>
              Ao se cadastrar e acessar a plataforma com seu e-mail e senha,
              você será levado ao nosso feed! disponibilizaremos dicas de
              profissionais de recrutamento e empresas sobre como se preparar
              para as diferentes etapas de um processo seletivo, artigos sobre
              tecnologias e ferramentas importantes para o mercado de trabalho,
              novidades sobre cursos e formações com inscrições abertas e etc.
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.botao, styles.border]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.botaoTexto}>SAIBA MAIS</Text>
          </TouchableOpacity>

          <View style={[styles.containerTexto, styles.border2]}>
            <Text style={styles.titulo}>Mentorias(em breve)</Text>
            <Text style={styles.texto}>
              A mentoria tem como objetivo auxiliar o jovem a conquistar seus
              objetivos profissionais através de conselhos baseado em nossa
              experiência profissional do mentor. Durante esse processo é
              traçado o caminho mais promissor para o crescimento pessoal e
              profissional do mentorado ou da mentorada, além da realização de
              um acompanhamento constante dessa trajetória.
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.botao, styles.border]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.botaoTexto}>SAIBA MAIS</Text>
          </TouchableOpacity>
          <View style={[styles.containerTexto, styles.border2]}>
            <Text style={styles.titulo}>Vagas</Text>
            <Text style={styles.texto}>
              Na área de vagas será possível encontrar vagas e empresas com
              processo seletivo aberto que se encaixam no perfil do nosso
              público alvo. Além de vagas direcionadas para minorias como PCD,
              mulheres, negros e LGBTI+. Teremos também um espaço para cadastro
              de vagas de empresas parceiras.
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3AC1F0",
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  containerScroll: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  backgroundGif: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
    paddingVertical: 10,
  },
  logo: {
    width: "80%",
    height: 100,
    resizeMode: "contain",
    marginTop: 50,
    marginBottom: 0,
  },
  containerTexto: {
    width: "80%",
    alignContent: "center",
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#e1e1e1",
  },
  titulo: {
    color: "black",
    fontSize: 40,
    textAlign: "center",
    justifyContent: "center",
  },
  texto: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
  },
 
  botao: {
    position: "relative",
    width: "35%",
    height: 50,
    paddingVertical: 10,
    justifyContent: "center",
    marginVertical: 5,
    backgroundColor: "#4e54c8",
    borderRadius: 10,
  },
  botaoTexto: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});
