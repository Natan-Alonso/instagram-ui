import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import Logo from "../../assets/logo.svg"
import Message from "../../assets/message.svg"
import Stroke from "../../assets/stroke.svg"
import foto from "../../assets/foto.png"
import foto1 from "../../assets/foto1.png"
import foto2 from "../../assets/foto2.png"
import foto3 from "../../assets/foto3.png"
import foto4 from "../../assets/foto4.png"
import foto5 from "../../assets/foto5.png"
import foto6 from "../../assets/foto6.png"
import foto7 from "../../assets/foto7.png"
import foto8 from "../../assets/foto8.png"
import foto9 from "../../assets/foto9.png"
import foto10 from "../../assets/foto10.png"
import foto11 from "../../assets/foto11.png"
import foto12 from "../../assets/foto12.png"
import Points from "../../assets/points.svg"
import Bookmark from "../../assets/Bookmark.svg"
import Heart from "../../assets/Heart.svg"
import Comment from "../../assets/Comment.svg"
import Share from "../../assets/Share.svg"

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto1,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto2,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto5,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto6,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto7,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto8,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto9,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto10,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto11,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto12,
  }]

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <View style={styles.headerOptions}>
          <Stroke />
          <Message />
        </View>
      </View>

      <View style={styles.stories}>
        <FlatList
          horizontal
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <View style={styles.storiesCard} key={item.item.id}>
              <Image
                style={styles.storiesCardImage}
                source={item.item.photoURL} />
            </View>
          )}
        />
      </View>

      <ScrollView style={{ width: "100%" }}>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={foto1} />
              <Text style={styles.contentHeaderLeftImageText}>Natan Alonso</Text>
            </View>
            <Points />
          </View>
          <View style={styles.contentImage}>
            <Text style={{ color: "#FFF", fontWeight: 'bold', textAlign: 'justify' }}>Minha linda,</Text>
            <Text></Text>
            <Text style={{ color: "#FFF", fontWeight: 'bold', textAlign: 'justify' }}>Em cada batida do meu coração,
              encontro a melodia da sua presença,
              a poesia da sua essência. Você é como uma obra-prima da natureza,
              uma rosa desabrochando em meio ao jardim da vida.
            </Text>
            <Text></Text>
            <Text style={{ color: "#FFF", fontWeight: 'bold', textAlign: 'justify' }}>
              Quero confessar que, desde o primeiro instante em que nossos olhares se cruzaram,
              meu coração soube que encontrara seu lar. Cada momento ao seu lado é como uma página
              de um livro de contos de fadas, e seu amor é o protagonista da minha história.
            </Text>
            <Text></Text>
            <Text style={{ color: "#FFF", fontWeight: 'bold', textAlign: 'justify' }}>
              Você é a estrela que ilumina o meu céu noturno, a brisa suave que acalma minha alma.
              Seus olhos são como constelações que guiam meu caminho, e sua voz, a canção que embala meus sonhos.
            </Text>
            <Text></Text>
            <Text style={{ color: "#FFF", fontWeight: 'bold', textAlign: 'justify' }}>
              Hoje, celebro o presente de tê-la ao meu lado. Cada ano ao seu lado é um capítulo da nossa jornada de amor,
              mal posso esperar para escrever muitos mais com você.
            </Text>
            <Text></Text>
            <Text style={{ color: "#FFF", fontWeight: 'bold', textAlign: 'justify' }}>
              Que este dia e todos os que seguirão sejam preenchidos com o perfume do amor,
              a doçura da paixão e a beleza da felicidade. Você merece o mundo, minha vida,
              e prometo estar ao seu lado, apoiando seus sonhos e celebrando suas conquistas.
            </Text>
            <Text></Text>
            <Text style={{ color: "#FFF", fontWeight: 'bold', textAlign: 'justify' }}>
              Feliz aniversário, meu amor, minha dama, minha vida.
            </Text>
          </View>

          <View style={styles.contentFooter}>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
              <View style={styles.contentFooterLeft}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>
            <View style={{ gap: 10, marginTop: 15, paddingLeft: 10 }}>
              <Text style={{ color: "#FFF", fontWeight: "bold" }}>Natan Alonso loves you</Text>
              <Text style={{ color: "#FFF" }}>View all 3 comments</Text>
              <Text style={{ color: "#FFF", fontSize: 10 }}>3 hours ago See Translation</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },

  header: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerOptions: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 20,

  },

  stories: {
    height: 110,
    paddingLeft: 10,
    alignItems: "center",
  },
  storiesCard: {
    marginRight: 14,
  },
  storiesCardImage: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: "#F111A5",
    borderRadius: 100,
  },

  content: {
    width: "100%",
    marginBottom: 10,
    backgroundColor: '#000'
  },
  contentHeader: {
    height: 70,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  contentHeaderLeft: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contentHeaderLeftImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  contentHeaderLeftImageText: {
    color: "#ddd",
    fontWeight: "bold"
  },
  contentImage: {
    width: "100%",
    height: 490,
    paddingHorizontal: 18,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgrouxndColor: '#000',
  },

  contentFooter: {
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#000',
  },
  contentFooterLeft: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  }
});
