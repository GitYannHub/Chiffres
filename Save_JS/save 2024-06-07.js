import React, {useState, useEffect} from 'react';
import{View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';


export default function App(){

//const couleurs=["blanc", "bleu", "gris", "jaune", "marron","orange","rose","rouge","vert","violet"];


const nbData=10;

const data = {
  1: {
      url:require("./assets/blanc.png"),
      nom:"Blanc",
      son:"./assets/blanc.mp3"
      },
  2: {
      url:require("./assets/bleu.png"),
      nom:"Bleu",
      son:"./assets/bleu.mp3"
    },
  3: {
      url:require("./assets/gris.png"),
      nom:"Gris",
      son:"./assets/gris.mp3"
    },
  4: {
      url:require("./assets/jaune.png"),
      nom:"Jaune",
      son:"./assets/jaune.mp3"
    },
  5: {
      url:require("./assets/marron.png"),
      nom:"Marron",
      son:"./assets/marron.mp3"
    },
  6: {
      url:require("./assets/orange.png"),
      nom:"Orange",
      son:"./assets/orange.mp3"
    },
  7: {
      url:require("./assets/rose.png"),
      nom:"Rose",
      son:"./assets/rose.mp3"
    },
  8: {
      url:require("./assets/rouge.png"),
      nom:"Rouge",
      son:"./assets/rouge.mp3"
    },
  9: {
      url:require("./assets/vert.png"),
      nom:"Vert",
      son:"./assets/vert.mp3"
    },
  10: {
      url:require("./assets/violet.png"),
      nom:"Violet",
      son:"./assets/violet.mp3"
    },
};


const [dataSelected, setDataSelected]=useState(random(nbData));

function random(max){
  return Math.floor(Math.random() * max+1);
  }

function chooseData(){
  var i = random(nbData);
  while(i==dataSelected){ //afin d'eviter d'avoir 2 fois le meme element
      i = random(nbData);
  }
setDataSelected(i);
}

function handlePress() {
  chooseData();
  }



return(
  
<View>
  <Image
    source={data[dataSelected]["url"]}
  />

  <Text>{dataSelected}</Text>
  <Text>{data[dataSelected]["nom"]}</Text>

  <Button 
  title="Ceci est un bouton"
  color="green"
  onPress={handlePress}
  />


</View>

);
}




