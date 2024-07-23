import React, {useState, useEffect} from 'react';
import{View, Text, StyleSheet, Button, Image, TouchableOpacity, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import { Link, router } from 'expo-router';
import Constants from './data';


export default function App(){

  const [dataSelected, setDataSelected]=useState([1,2,3,4]);
  const [dataOk, setDataOk]=useState(1);
  const [dataPlaceOk, setDataPlaceOk]=useState(1);
  const [oldDataSelected, setOldDataSelected]=useState(1);
  const [disabled0, setDisabled0]= useState(false);
  const [disabled1, setDisabled1]= useState(false);
  const [disabled2, setDisabled2]= useState(false);
  const [disabled3, setDisabled3]= useState(false);
const[nbEssais, setNbEssais]=useState(1);
const[nbErreurs, setNbErreurs]=useState(0);

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

async function playSoundBonneReponse() {
  console.log('Loading Sound');

var nbSons=6;
var index=random(nbSons);

if (index==1){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/useful/bienJoue.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==2){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/useful/bravo.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==3){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/useful/c_bien.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==4){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/useful/c_exact.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==5){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/useful/correct.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==6){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/useful/oui.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}
      
}

async function playSoundMauvaiseReponse() {
  console.log('Loading Sound');

var nbSons=5;
var index=random(nbSons);

if (index==1){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/useful/ce_n_est_pas_ca.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==2){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/useful/encoreunefois.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==3){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/useful/essaieEncore.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==4){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/useful/nonEssaieEncore.mp3'));
  setSound(sound);
  console.log('Playing Sound');
  await sound.playAsync();
}

if (index==5){
  const { sound } = await Audio.Sound.createAsync( require('../assets/sons/useful/nonrecommence.mp3'));
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
//On réactive les boutons
setDisabled0(false);
setDisabled1(false);
setDisabled2(false);
setDisabled3(false);

}

function handlePressSound(PShuffled) {
  //playSoundObjet(dataOk);

 if (PShuffled==dataPlaceOk){
//On desactive les boutons le temps des clicks
setDisabled0(true);
setDisabled1(true);
setDisabled2(true);
setDisabled3(true);

playSoundBonneReponse();
setNbEssais(nbEssais+1);
var nbMaxEssais=3; //A Modifier pour le nombre d'essais total

if(nbEssais<nbMaxEssais){
setTimeout(ChangeAndplayNextSound, 1300);
}

if(nbEssais>=nbMaxEssais){
  router.push({ pathname: "./resultats", params: { nbErreurs } });
  } 
//jouer son ok et changer de couleur et ajouter un bon point
 }
 if (PShuffled!=dataPlaceOk){
// jouer son erreur, ajouter une erreur
playSoundMauvaiseReponse();
setNbErreurs(nbErreurs+1);
 }


}

//jouer le son au démarrage
  useEffect(() => {
    var i = chooseData();
    playSoundObjet(i[4]);
 }, [])
 
function handlePress2(){};

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

    <View  style={{position: 'absolute', right: '7%'}}>
    <Text style={styles.essais}>Essais: {nbEssais}/3</Text>
    </View>

</View>

<View style={styles.spacer2}></View>

<View style={styles.ContenaireMenuNomCouleur}>
<TouchableOpacity onPress={ () => {playSoundObjet(dataOk);}} style={styles.MenuNomCouleur}>
   <Text style={styles.NomCouleur}>
   {Constants.data[dataSelected[dataPlaceOk]]["nom"]}
  </Text>

<Image
      source={require('../assets/icones/music.png')}
      style={styles.musique}
/>
</TouchableOpacity> 
</View>

<View style={styles.spacer3}></View>

 
<View style={styles.viewImageAlign}>
<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled0} onPress={ () => {handlePressSound(0)}}>
<Image
     source= {Constants.data[dataSelected[0]]["url"]}
    style={styles.imageStyle}
  />
</TouchableOpacity>
</View>

<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled1} onPress={ () => {handlePressSound(1)}}>
  <Image
     source= {Constants.data[dataSelected[1]]["url"]}
    style={styles.imageStyle}
  />
  </TouchableOpacity>
</View>
</View>


<View style={styles.viewImageAlign}>
<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled2} onPress={ () => {handlePressSound(2)}} >
  <Image
     source= {Constants.data[dataSelected[2]]["url"]}
    style={styles.imageStyle}
  />
  </TouchableOpacity>
</View>

<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled3} onPress={ () => {handlePressSound(3)}}>
  <Image
    source= {Constants.data[dataSelected[3]]["url"]}
    style={styles.imageStyle}
  />
  </TouchableOpacity>
</View>
</View>










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
essais:{fontSize:18, color:'#776e65'},

spacer2:{height:'5%', width:'100%'},

ContenaireMenuNomCouleur:{height: '10%', width:'100%',alignItems: 'center', justifyContent: 'center'},
MenuNomCouleur:{height: '100%',flexDirection:'row', alignItems: 'center', justifyContent: 'center', resizeMode:"contain"},
NomCouleur:{fontSize:45, color:'#776e65', fontWeight:'500'},
musique:{marginLeft:'2%', width:'20%', height:'80%', resizeMode:"contain", },

spacer3:{height:'3%', width:'100%', },


//Les 4 images
viewImageAlign:{flexDirection:"row", justifyContent:'center'},
viewImage:{width:'45%', aspectRatio:1, margin:'2%'},
imageStyle:{ width:'100%',height:'100%', resizeMode: "contain"},





}
)

//


/*


contenairLine:{height:'30%',alignItems: 'center', justifyContent: 'center', backgroundColor:'blue'},

line1:{width:'100%',flexDirection:'row', justifyContent: 'center',backgroundColor:'lightblue'},

containerImage:{width:'100%', height:'50%', backgroundColor:'blue'},
containerImage:{width:100, height:100, backgroundColor:'blue'}, 

*/
