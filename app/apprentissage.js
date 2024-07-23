import React, {useState, useEffect} from 'react';
import{View, Text, StyleSheet, Button, Image, TouchableOpacity, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import { Link } from 'expo-router';
import Constants from './data';


export default function App(){

   
  const [dataSelected, setDataSelected]=useState(random(Constants.nbData));
 

// partie son
const [sound, setSound] = useState();
Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

async function playSoundObjet(index) {
  console.log('Loading Sound');

if (index==1){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/1.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==2){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/2.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==3){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/3.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==4){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/4.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==5){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/5.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==6){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/6.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==7){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/7.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==8){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/8.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==9){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/9.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==10){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/0.mp3'));
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
  while(i==dataSelected){ //afin d'eviter d'avoir 2 fois le meme element
      i = random(Constants.nbData);
  }

setDataSelected(i);
return i;
}



async function ChangeAndplayNextSound(){
  var i = chooseData();
  playSoundObjet(i);
}

function handlePressSound() {
  playSoundObjet(dataSelected);
}

//jouer le son au démarrage
  useEffect(() => {
    playSoundObjet(dataSelected);
 }, [])
 

 return(
<View style={[StyleSheet.absoluteFill, styles.mainView]}>

<View style={styles.spacerHaut}></View>

<View style={styles.menu}>
  <Link href="/" style={styles.logoMenu} asChild>
  <Pressable>
      <Image
      source={require('../assets/icones/home.png')}
      style={styles.iconeStyle}
      />
    </Pressable>
  </Link>

  <View style={styles.viewContainerMenu}>
      <Link  href="/" asChild> 
      <Pressable style={styles.wrapperMenu}>
      <Text style={styles.titreMenu}>MENU</Text>
        </Pressable>
        </Link>
    </View>
</View>

<View style={styles.spacer2}></View>

<View style={styles.ContenaireMenuNomCouleur}>
<TouchableOpacity onPress={handlePressSound} style={styles.MenuNomCouleur}>
   <Text style={styles.NomCouleur}>
      {Constants.data[dataSelected]["nom"]}
  </Text>

<Image
      source={require('../assets/icones/music.png')}
      style={styles.musique}
/>
</TouchableOpacity> 
</View>

<View style={styles.spacer3}></View>

<TouchableOpacity onPress={ChangeAndplayNextSound} style={styles.containerImage}>
  <Image
    source={Constants.data[dataSelected]["url"]}
    style={styles.imageStyle}
  />
</TouchableOpacity> 

</View>

);


}


{/*feuille de style type CSS*/}
const styles = StyleSheet.create({
  mainView:{backgroundColor: "#eee4da", flex: 1, width: null, height: null, }, 
  spacerHaut:{height:'6%', width:'100%'},
  
  //Partie Menu
  menu:{height: '10%', width:'100%', flexDirection:'row', alignItems: 'center'},
  logoMenu:{ marginLeft:'5%', width:'20%', height:'100%', resizeMode:'contain'},
  iconeStyle:{ resizeMode: "contain",width: '100%', height:'100%' },
  viewContainerMenu:{ height:'70%', width:'28%', justifyContent:"center", textAlignVertical:'center' },
  wrapperMenu: {marginLeft:'10%', width:'100%', height: '100%', backgroundColor:'#bbada0', justifyContent:'center' , alignItems: "center",  borderRadius:10,  },
  titreMenu:{fontSize:25, color: 'white', fontWeight:'600', },
// Fin du menu


spacer2:{height:'5%', width:'100%', },

ContenaireMenuNomCouleur:{height: '10%', width:'100%',alignItems: 'center', justifyContent: 'center'},
MenuNomCouleur:{height: '100%',flexDirection:'row', alignItems: 'center', justifyContent: 'center', resizeMode:"contain"},
NomCouleur:{fontSize:45, color:'#776e65', fontWeight:'500'},
musique:{marginLeft:'2%', width:'20%', height:'80%', resizeMode:"contain", },

spacer3:{height:'3%', width:'100%'},

containerImage:{width:'100%', height:'50%', alignItems: 'center'},
imageStyle:{ width:'90%', height:'100%',resizeMode: "contain"},
    
   
    
   
}
)

