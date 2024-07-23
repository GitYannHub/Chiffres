import React, {useState, useEffect} from 'react';
import{View, Text, StyleSheet, Button, Image, TouchableOpacity, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import { Link } from 'expo-router';



export default function App(){

  const nbData=10;
  const data = {
    1: {
        url:require("../assets/blanc.png"),
        nom:"Blanc",
        son:require("../assets/sons/blanc.mp3")
        },
    2: {
        url:require("../assets/bleu.png"),
        nom:"Bleu",
        son:require("../assets/sons/bleu.mp3")
      },
    3: {
        url:require("../assets/gris.png"),
        nom:"Gris",
        son:require("../assets/sons/gris.mp3")
      },
    4: {
        url:require("../assets/jaune.png"),
        nom:"Jaune",
        son:require("../assets/sons/jaune.mp3")
      },
    5: {
        url:require("../assets/marron.png"),
        nom:"Marron",
        son:require("../assets/sons/marron.mp3")
      },
    6: {
        url:require("../assets/orange.png"),
        nom:"Orange",
        son:require("../assets/sons/orange.mp3")
      },
    7: {
        url:require("../assets/rose.png"),
        nom:"Rose",
        son:require("../assets/sons/rose.mp3")
      },
    8: {
        url:require("../assets/rouge.png"),
        nom:"Rouge",
        son:require("../assets/sons/rouge.mp3")
      },
    9: {
        url:require("../assets/vert.png"),
        nom:"Vert",
        son:require("../assets/sons/vert.mp3")
      },
    10: {
        url:require("../assets/violet.png"),
        nom:"Violet",
        son:require("../assets/sons/violet.mp3")
      },
  };
  
  const [dataSelected, setDataSelected]=useState(random(nbData));
 

// partie son
const [sound, setSound] = useState();
Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

async function playSoundObjet() {
  console.log('Loading Sound');

if (dataSelected==1){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/blanc.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (dataSelected==2){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/bleu.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (dataSelected==3){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/gris.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (dataSelected==4){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/jaune.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (dataSelected==5){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/marron.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (dataSelected==6){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/orange.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (dataSelected==7){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/rose.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (dataSelected==8){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/rouge.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (dataSelected==9){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/vert.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (dataSelected==10){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/violet.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}


 
  
}

useEffect(() => {
  return sound
    ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
    : undefined;
}, [sound]);
//fin de la partie son



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
  playSoundObjet();
  }

  useEffect(() => {
   playSoundObjet();
    }, [])

return(
  

<View>


  <Image
    source={data[dataSelected]["url"]}
    style={styles.imageStyle}
  />
 

  <Text> {dataSelected}</Text>
  <Text> {data[dataSelected]["nom"]}</Text>

  <Button 
  title="Ceci est un bouton"
  color="black"
  onPress={handlePress}
  />

<Link href="/" style={styles.viewImage2} asChild>
<Pressable>
<Image
    source={require('../assets/icones/home.png')}
    style={styles.iconeStyle}

  />
  
  </Pressable>
</Link>


</View>

);


}


{/*feuille de style type CSS*/}
const styles = StyleSheet.create({
  container:{marginTop:50, flexDirection: "column"},
  textOne:{fontSize:20},
  viewTWO:{backgroundColor:"yellow", flexDirection: "row"},
  viewBoutton:{flexDirection:"row"},
  viewImage:{width:'40%'},
  imageStyle:{ width:'100%', resizeMode: "contain"},
  viewImageAlign:{flexDirection:"row", justifyContent:'center'},
  viewImage2:{width: '20%', height:'10%' , backgroundColor: "lightgreen"},

  iconeStyle:{ resizeMode: "contain",width: '100%', height:'100%' },
}
)



