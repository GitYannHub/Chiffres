import React, {useState, useEffect} from 'react';
import{View, Text, StyleSheet, Button, Image, TouchableOpacity, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import { Link } from 'expo-router';
import Constants from './data';


export default function App(){

  const [dataSelected, setDataSelected]=useState([1,2,3,4]);
  const [dataOk, setDataOk]=useState(1);
  const [dataPlaceOk, setDataPlaceOk]=useState(1);
  const [oldDataSelected, setOldDataSelected]=useState(1);
  

// partie son
const [sound, setSound] = useState();
Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

async function playSoundObjet(index) {
  console.log('Loading Sound');

if (index==1){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/blanc.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==2){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/bleu.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==3){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/gris.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==4){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/jaune.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==5){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/marron.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==6){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/orange.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==7){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/rose.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==8){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/rouge.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==9){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/vert.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==10){
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
  var i = random(Constants.nbData);
  var j= random(Constants.nbData);
  var k = random(Constants.nbData);
  var l = random(Constants.nbData);
  var bonneRep;
  var placeBonneRep;

while(i==dataSelected){ //afin d'eviter d'avoir 2 fois le meme element
  i = random(Constants.nbData);
}
while(j==i){ //afin d'eviter d'avoir 2 fois le meme element
  j = random(Constants.nbData);    
}
while(k==i||k==j){ //afin d'eviter d'avoir 2 fois le meme element
  k = random(Constants.nbData);    
}
while(l==i||l==j||l==k){ //afin d'eviter d'avoir 2 fois le meme element
  l = random(Constants.nbData);    
}

// choix de la bonne réponse
console.log("bonne Rep:" + bonneRep);
console.log("old Data:" + oldDataSelected);

do{
  placeBonneRep=Math.floor(Math.random() * 4);
  if (placeBonneRep==0){
    bonneRep=i;
  }
  if (placeBonneRep==1){
    bonneRep=j;
  }
  if (placeBonneRep==2){
    bonneRep=k;
  }
  if (placeBonneRep==3){
    bonneRep=l;
  }
} while (bonneRep==oldDataSelected);

setOldDataSelected(bonneRep);
setDataSelected([i, j, k, l]);
setDataPlaceOk(placeBonneRep);
setDataOk(bonneRep);

return [i, j, k, l, bonneRep];
}


async function ChangeAndplayNextSound(){
  var i = chooseData();
  playSoundObjet(i[4]);
}

function handlePressSound(PShuffled) {
  playSoundObjet(dataOk);
 console.log("press sound:" + PShuffled);
 if (PShuffled==0){
//jouer son ok et changer de couleur et ajouter un bon point
 }
 if (PShuffled==0){
// jouer son erreur, ajouter une erreur
 }
}

//jouer le son au démarrage
  useEffect(() => {
    var i = chooseData();
    playSoundObjet(i[4]);
 }, [])
 

 return(

<View style={[StyleSheet.absoluteFill, styles.mainView]}>

<Text> </Text>
<Text> </Text>
<Text> </Text>

<Text>Test</Text>

<Link href="/" style={styles.viewImage2} asChild>
<Pressable>
    <Image
    source={require('../assets/icones/home.png')}
    style={styles.iconeStyle}
    />
  </Pressable>
</Link>
<Link href="./"  asChild>
<Text>MENU</Text>
</Link>


<TouchableOpacity onPress={ () => {
          handlePressSound(dataOk)  }}>
  <Text style={styles.colorStyle}>
        {Constants.data[dataSelected[dataPlaceOk]]["nom"]}
  </Text>
</TouchableOpacity> 

<Button 
  title="Nouvelle couleur"
  color="black"
  onPress={ChangeAndplayNextSound}
/>


<TouchableOpacity onPress={ () => {handlePressSound(0)}}>
 <Image
    source= {Constants.data[dataSelected[0]]["url"]}
    style={styles.imageStyle}
  />
</TouchableOpacity> 

<TouchableOpacity onPress={ () => {handlePressSound(1)}}>
 <Image
    source= {Constants.data[dataSelected[1]]["url"]}
    style={styles.imageStyle}
  />
  </TouchableOpacity> 

  <TouchableOpacity onPress={ () => {handlePressSound(2)}}>
<Image
    source= {Constants.data[dataSelected[2]]["url"]}
    style={styles.imageStyle}
  />
  </TouchableOpacity> 

  <TouchableOpacity onPress={ () => {handlePressSound(3)}}>
<Image
    source= {Constants.data[dataSelected[3]]["url"]}
    style={styles.imageStyle}
  />
  </TouchableOpacity> 

  
</View>
);
}

{/*feuille de style type CSS*/}
const styles = StyleSheet.create({
    imageStyle:{ width:100, height: 100, resizeMode: "contain"},
    viewImage2:{width: '20%', height:'10%' , backgroundColor: "lightgreen"},
    iconeStyle:{ resizeMode: "contain",width: 50, height:50 },
    colorStyle:{fontSize:30},
    mainView:{backgroundColor: "lightgreen", flex: 1, width: null, height: null, },
}
)


