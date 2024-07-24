import React, {useState, useEffect} from 'react';
import{View, Text, StyleSheet, Button, Image, TouchableOpacity, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import { Link, router } from 'expo-router';
import Constants from './data';


export default function App(){


    const [dataSelected, setDataSelected]=useState([1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]);
    const [dataPlaced, setDataPlaced]=useState([1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]);
    const [clik1, setClik1]=useState(-1);
    const [cliksurquinze1, setCliksurquinze1]=useState(-1);
    const [clik2, setClik2]=useState(-1);
    
    const [couleur1, setCouleur1]=useState("");
    const [couleur2, setCouleur2]=useState("");
    const [separateur, setSeparateur]=useState("");
    const [resultat, setResultat]=useState("");

    const [disabled, setDisabled]= useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
    
    const [visibleface, setVisibleface] = useState(["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"]);
    const [visibleverso, setVisibleverso] = useState(["flex", "flex", "flex", "flex", "flex", "flex", "flex", "flex", "flex", "flex", "flex", "flex", "flex", "flex", "flex", "flex"]);

    const [nbBonnesRep, setNbBonnesRep]=useState(0);
    const[nbErreurs, setNbErreurs]=useState(0);

// partie son
const [sound, setSound] = useState();
Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

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

        //Choisi les 8 éléments du jeu
        function chooseData(){
        var i=1;
        var j=1;
        var k=1;
        var l=1;
        var m=1;
        var n=1;
        var o=1;
        var p=1;

        //Premiere data 
        i = random(Constants.nbData);      
        j=i; 
        while(i==j){ //afin d'eviter d'avoir 2 fois le meme element
            j = random(Constants.nbData);
           }
        
           k=i;
        while(i==k||j==k){ //afin d'eviter d'avoir 2 fois le meme element
            k = random(Constants.nbData);
           }

        l=i;
        while(i==l||j==l||k==l){ //afin d'eviter d'avoir 2 fois le meme element
            l = random(Constants.nbData);
           }

        m=i;
        while(i==m||j==m||k==m||l==m){ //afin d'eviter d'avoir 2 fois le meme element
            m = random(Constants.nbData);
           }

        n=i;
        while(i==n||j==n||k==n||l==n||m==n){ //afin d'eviter d'avoir 2 fois le meme element
            n = random(Constants.nbData);
           }

        o=i;
        while(i==o||j==o||k==o||l==o||m==o||n==o){ //afin d'eviter d'avoir 2 fois le meme element
            o = random(Constants.nbData);
           }
    
        p=i;
        while(i==p||j==p||k==p||l==p||m==p||n==p||o==p){ //afin d'eviter d'avoir 2 fois le meme element
            p = random(Constants.nbData);
           }

        setDataSelected([i, j, k, l, m, n, o, p,i, j, k, l, m, n, o, p]);
        return [i, j, k, l, m, n, o, p,i, j, k, l, m, n, o, p];
        }


        function arrayShuffle(a) {
            var l = a.length, t, r;
            while (0 !== l) {
              r = Math.floor(Math.random() * l);
              l -= 1;
              t = a[l];
              a[l] = a[r];
              a[r] = t;
            }
            return a;
          }

    function placeData(){
      setDataPlaced(arrayShuffle(chooseData()));
    }

    function handlePressSound(a){

    deactiveCase(a);
    setCliksurquinze1(a);
    var c1=-1;
    var c2=-1;

        //Prermier retournement
        if (clik1==-1){
        c1=dataPlaced[a];
        setClik1(dataPlaced[a]);
        setCouleur1(Constants.data[dataPlaced[a]]["nom"]);
        
        
          // On masque le dos de la carte
          setVisibleverso(oldArray => {
            const newArray = [...oldArray];
            newArray[a] = "none";
            return newArray;
         });

          //On affiche la face de la carte
          setVisibleface(oldArray => {
            const newArray = [...oldArray];
            newArray[a] = "flex";
            return newArray;
         });
        } //Fin du 1er retournement


        //Deuxime retournement
        if (clik2==-1 && clik1!=-1){
            c2=dataPlaced[a];
            setClik2(dataPlaced[a]);
            setSeparateur(" | ");
            setCouleur2(Constants.data[dataPlaced[a]]["nom"]);

            // On masque le dos de la carte
            setVisibleverso(oldArray => {
              const newArray = [...oldArray];
              newArray[a] = "none";
              return newArray;
            });

            //On affiche la face de la carte
            setVisibleface(oldArray => {
              const newArray = [...oldArray];
              newArray[a] = "flex";
              return newArray;
            });


      //Verification si win

          //Victore
        if (clik1==c2 && clik1!=-1){
            //setResultat("Bravo");
            setClik1(-1);
            setClik2(-1);
            setCouleur1("");
            setCouleur2("");
            setSeparateur("");
            playSoundBonneReponse();
            setNbBonnesRep(nbBonnesRep+1);
            if (nbBonnesRep==7){
              router.push({ pathname: "./memoryResultats", params: { nbErreurs }  });
            }
        }

        //Echec
        if (clik1!=c2 && clik1!=-1){
          //setResultat("Echec");
          setClik1(-1);
          setClik2(-1);
          playSoundMauvaiseReponse();
         
          setTimeout(EchecReactivate, 700, a, cliksurquinze1);
        
    
        }      
  }
}

function EchecReactivate(a,  cliksurquinze1){

  setCouleur1("");
  setCouleur2("");
  setSeparateur("");

 // On réactive les cases si défaites
 reactiveCase(a, cliksurquinze1);

 //On masque la face de la carte
 setVisibleface(oldArray => {
   const newArray = [...oldArray];
   newArray[a] = "none";
   newArray[cliksurquinze1] = "none";
   return newArray;
 });

 // On affiche le dos de la carte
 setVisibleverso(oldArray => {
   const newArray = [...oldArray];
   newArray[a] = "flex";
   newArray[cliksurquinze1] = "flex";
   return newArray;
  });
}

function deactiveCase(a){
    setDisabled(oldArray => {
      const newArray = [...oldArray];
      newArray[a] = true;
      return newArray;
   });
  }

function reactiveCase(a,b){
  setDisabled(oldArray => {
    const newArray = [...oldArray];
    newArray[a] = false;
    newArray[b] = false;
    return newArray;
 });
}


//Au chargement
  useEffect(() => {
  placeData();
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
<Text style={styles.titre}>Memory</Text> 
<Text style={styles.soustitre}>Retourne les 2 mêmes chiffres</Text> 
<View style={styles.spacer2}></View>

<Text style={styles.couleurs}>{couleur1} {separateur} {couleur2} </Text> 
<Text style={styles.resultat}>{resultat} </Text> 

<View style={styles.spacer3}></View>

<View style={styles.viewImageAlign}>
<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled[0]} onPress={ () => {handlePressSound(0)}} >
<View style={{display:visibleface[0]}}>
  <Image
     source= {Constants.data[dataPlaced[0]]["url"]}
    style={styles.imageStyle}
  />
  </View>
  <View style={{display:visibleverso[0]}}>
    <Image
     source= {require("../assets/icones/carte.png")}
    style={styles.imageStyle}
  />
  </View>
  </TouchableOpacity>
</View>

<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled[1]} onPress={ () => {handlePressSound(1)}}>
<View style={{display:visibleface[1]}}>
  <Image
     source= {Constants.data[dataPlaced[1]]["url"]}
    style={styles.imageStyle}
  />
  </View>
  <View style={{display:visibleverso[1]}}>
    <Image
     source= {require("../assets/icones/carte.png")}
    style={styles.imageStyle}
  />
  </View>
  </TouchableOpacity>
</View>

<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled[2]} onPress={ () => {handlePressSound(2)}} >
<View style={{display:visibleface[2]}}>
  <Image
     source= {Constants.data[dataPlaced[2]]["url"]}
    style={styles.imageStyle}
  />
  </View>
  <View style={{display:visibleverso[2]}}>
    <Image
     source= {require("../assets/icones/carte.png")}
    style={styles.imageStyle}
  />
  </View>
  </TouchableOpacity>
</View>

<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled[3]} onPress={ () => {handlePressSound(3)}} >
<View style={{display:visibleface[3]}}>
  <Image
     source= {Constants.data[dataPlaced[3]]["url"]}
    style={styles.imageStyle}
  />
  </View>
  <View style={{display:visibleverso[3]}}>
    <Image
     source= {require("../assets/icones/carte.png")}
    style={styles.imageStyle}
  />
  </View>
  </TouchableOpacity>
</View>
</View>


<View style={styles.viewImageAlign}>
<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled[4]} onPress={ () => {handlePressSound(4)}} >
<View style={{display:visibleface[4]}}>
  <Image
     source= {Constants.data[dataPlaced[4]]["url"]}
    style={styles.imageStyle}
  />
  </View>
  <View style={{display:visibleverso[4]}}>
    <Image
     source= {require("../assets/icones/carte.png")}
    style={styles.imageStyle}
  />
  </View>
  </TouchableOpacity>
</View>

<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled[5]} onPress={ () => {handlePressSound(5)}}>
<View style={{display:visibleface[5]}}>
  <Image
     source= {Constants.data[dataPlaced[5]]["url"]}
    style={styles.imageStyle}
  />
  </View>
  <View style={{display:visibleverso[5]}}>
    <Image
     source= {require("../assets/icones/carte.png")}
    style={styles.imageStyle}
  />
  </View>
  </TouchableOpacity>
</View>

<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled[6]} onPress={ () => {handlePressSound(6)}} >
<View style={{display:visibleface[6]}}>
  <Image
     source= {Constants.data[dataPlaced[6]]["url"]}
    style={styles.imageStyle}
  />
  </View>
  <View style={{display:visibleverso[6]}}>
    <Image
     source= {require("../assets/icones/carte.png")}
    style={styles.imageStyle}
  />
  </View>
  </TouchableOpacity>
</View>

<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled[7]} onPress={ () => {handlePressSound(7)}} >
<View style={{display:visibleface[7]}}>
  <Image
     source= {Constants.data[dataPlaced[7]]["url"]}
    style={styles.imageStyle}
  />
  </View>
  <View style={{display:visibleverso[7]}}>
    <Image
     source= {require("../assets/icones/carte.png")}
    style={styles.imageStyle}
  />
  </View>
  </TouchableOpacity>
</View>
</View>



<View style={styles.viewImageAlign}>
<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled[8]} onPress={ () => {handlePressSound(8)}} >
<View style={{display:visibleface[8]}}>
  <Image
     source= {Constants.data[dataPlaced[8]]["url"]}
    style={styles.imageStyle}
  />
  </View>
  <View style={{display:visibleverso[8]}}>
    <Image
     source= {require("../assets/icones/carte.png")}
    style={styles.imageStyle}
  />
  </View>
  </TouchableOpacity>
</View>

<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled[9]} onPress={ () => {handlePressSound(9)}}>
<View style={{display:visibleface[9]}}>
  <Image
     source= {Constants.data[dataPlaced[9]]["url"]}
    style={styles.imageStyle}
  />
  </View>
  <View style={{display:visibleverso[9]}}>
    <Image
     source= {require("../assets/icones/carte.png")}
    style={styles.imageStyle}
  />
  </View>
  </TouchableOpacity>
</View>

<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled[10]} onPress={ () => {handlePressSound(10)}} >
<View style={{display:visibleface[10]}}>
  <Image
     source= {Constants.data[dataPlaced[10]]["url"]}
    style={styles.imageStyle}
  />
  </View>
  <View style={{display:visibleverso[10]}}>
    <Image
     source= {require("../assets/icones/carte.png")}
    style={styles.imageStyle}
  />
  </View>
  </TouchableOpacity>
</View>

<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled[11]} onPress={ () => {handlePressSound(11)}} >
<View style={{display:visibleface[11]}}>
  <Image
     source= {Constants.data[dataPlaced[11]]["url"]}
    style={styles.imageStyle}
  />
  </View>
  <View style={{display:visibleverso[11]}}>
    <Image
     source= {require("../assets/icones/carte.png")}
    style={styles.imageStyle}
  />
  </View>
  </TouchableOpacity>
</View>
</View>


<View style={styles.viewImageAlign}>
<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled[12]} onPress={ () => {handlePressSound(12)}} >
<View style={{display:visibleface[12]}}>
  <Image
     source= {Constants.data[dataPlaced[12]]["url"]}
    style={styles.imageStyle}
  />
  </View>
  <View style={{display:visibleverso[12]}}>
    <Image
     source= {require("../assets/icones/carte.png")}
    style={styles.imageStyle}
  />
  </View>
  </TouchableOpacity>
</View>

<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled[13]} onPress={ () => {handlePressSound(13)}}>
<View style={{display:visibleface[13]}}>
  <Image
     source= {Constants.data[dataPlaced[13]]["url"]}
    style={styles.imageStyle}
  />
  </View>
  <View style={{display:visibleverso[13]}}>
    <Image
     source= {require("../assets/icones/carte.png")}
    style={styles.imageStyle}
  />
  </View>
  </TouchableOpacity>
</View>

<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled[14]} onPress={ () => {handlePressSound(14)}} >
<View style={{display:visibleface[14]}}>
  <Image
     source= {Constants.data[dataPlaced[14]]["url"]}
    style={styles.imageStyle}
  />
  </View>
  <View style={{display:visibleverso[14]}}>
    <Image
     source= {require("../assets/icones/carte.png")}
    style={styles.imageStyle}
  />
  </View>
  </TouchableOpacity>
</View>

<View style={styles.viewImage}>
<TouchableOpacity disabled={disabled[15]} onPress={ () => {handlePressSound(15)}} >
<View style={{display:visibleface[15]}}>
  <Image
     source= {Constants.data[dataPlaced[15]]["url"]}
    style={styles.imageStyle}
  />
  </View>
  <View style={{display:visibleverso[15]}}>
    <Image
     source= {require("../assets/icones/carte.png")}
    style={styles.imageStyle}
  />
  </View>
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


spacer2:{height:'2%', width:'100%'},


titre:{fontSize:45, color:'#776e65', fontWeight:'500', alignSelf:'center'},
soustitre:{fontSize:22, color:'#776e65', fontWeight:'500', alignSelf:'center'},
couleurs:{fontSize:24, color:'#776e65', fontWeight:'400', alignSelf:'center'},
resultats:{fontSize:18, color:'#776e65', fontWeight:'400', alignSelf:'center'},

spacer3:{height:'2%', width:'100%'},

//Les 4 images
viewImageAlign:{flexDirection:"row", justifyContent:'center'},
viewImage:{width:'22%', aspectRatio:1, margin:'1%'},
imageStyle:{ width:'100%',height:'100%', resizeMode: "contain"},


})

