import React, {useState, useEffect} from 'react';
import{View, Text, StyleSheet, Button, Image, TouchableOpacity, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import { Link } from 'expo-router';
import Constants from '../app/data';


export default function App(){

  const [dataSelected, setDataSelected]=useState([1,2,3,4]);
  const [positionShuffled, setPositionShuffled]=useState([0,1,2,3]);
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
  var erreur1 = random(Constants.nbData);
  var erreur2 = random(Constants.nbData);
  var erreur3 = random(Constants.nbData);

while(i==dataSelected){ //afin d'eviter d'avoir 2 fois le meme element
  i = random(Constants.nbData);
}
while(erreur1==i){ //afin d'eviter d'avoir 2 fois le meme element
  erreur1 = random(Constants.nbData);    
}
while(erreur2==i||erreur2==erreur1){ //afin d'eviter d'avoir 2 fois le meme element
  erreur2 = random(Constants.nbData);    
}
while(erreur3==i||erreur3==erreur1||erreur3==erreur2){ //afin d'eviter d'avoir 2 fois le meme element
  erreur3 = random(Constants.nbData);    
}

setDataSelected([i, erreur1, erreur2, erreur3]);
setDataOk(i);

console.log("i: "+i);


return [i, erreur1, erreur2, erreur3];
}

function shuffle(){
var i=Math.floor(Math.random() * 4);
var j=Math.floor(Math.random() * 4);
var k=Math.floor(Math.random() * 4);
var l=Math.floor(Math.random() * 4);
var bonnePlace;

while(i==j){ //afin d'eviter d'avoir 2 fois le meme element
  j = Math.floor(Math.random() * 4);
}
while(k==i||k==j){ //afin d'eviter d'avoir 2 fois le meme element
  k = Math.floor(Math.random() * 4);
}
while(l==i||l==j||l==k){ //afin d'eviter d'avoir 2 fois le meme element
  l = Math.floor(Math.random() * 4);
}

console.log('shuffle TIME:');
console.log(i);
console.log(j);
console.log(k);
console.log(l);

if (i==0)
{bonnePlace=0;}

if (j==0)
  {bonnePlace=1;}

if (k==0)
  {bonnePlace=2;}

if (l==0)
  {bonnePlace=3;}

setDataPlaceOk(bonnePlace);
setPositionShuffled([i,j,k,l]);
}

async function ChangeAndplayNextSound(){
  var i = chooseData();
  playSoundObjet(i[0]);
  shuffle();
  console.log('shuffle: '+ positionShuffled);
  console.log('dataOk: '+ dataOk);
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
    playSoundObjet(i[0]);
    console.log(i);
    shuffle();
 }, [])
 

 return(
<View>


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
        {Constants.data[dataSelected[positionShuffled[dataPlaceOk]]]["nom"]}
  </Text>
</TouchableOpacity> 





<Button 
  title="Nouvelle couleur"
  color="black"
  onPress={ChangeAndplayNextSound}
/>




<TouchableOpacity onPress={ () => {handlePressSound(positionShuffled[0])}}>
 <Image
    source= {Constants.data[dataSelected[positionShuffled[0]]]["url"]}
    style={styles.imageStyle}
  />
</TouchableOpacity> 

<TouchableOpacity onPress={ () => {handlePressSound(positionShuffled[1])}}>
 <Image
    source= {Constants.data[dataSelected[positionShuffled[1]]]["url"]}
    style={styles.imageStyle}
  />
  </TouchableOpacity> 

  <TouchableOpacity onPress={ () => {handlePressSound(positionShuffled[2])}}>
<Image
    source= {Constants.data[dataSelected[positionShuffled[2]]]["url"]}
    style={styles.imageStyle}
  />
  </TouchableOpacity> 

  <TouchableOpacity onPress={ () => {handlePressSound(positionShuffled[3])}}>
<Image
    source= {Constants.data[dataSelected[positionShuffled[3]]]["url"]}
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
}
)



