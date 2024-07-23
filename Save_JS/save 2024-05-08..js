import React, {useState, useEffect} from 'react';
import{View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';


export default function App(){

  //Gestion du son
 
 let audioFile='./assets/bleu.mp3'
 

 const [sound, setSound] = useState();
  Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require(audioFile)
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
    
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);



const name2 = "Manu";
const getnames = (fistrName, secondName) =>{
  return fistrName + " " + secondName;
}


const[name, setName]=useState("Stan");

const handlePress= () => {
  setName("Steve");
}

const max=4;
const[Number, setNumber]=useState(Math.floor(Math.random() * max)+1);

const handlePress2 = () => {
  playSound();
  setNumber(Math.floor(Math.random() * max)+1);
}



return(



<View style={styles.container}>
  <View>
    <Text>    Texte wxcone  </Text>
    <Text>    Texte 2  </Text>
    <Text>    Texte 3  </Text>
  </View>


{/*commentaire*/}
  <View style={styles.viewTWO}>
    <Text>    VUE 2  T1 </Text>
    <Text style={styles.textOne}>    VUE 2 T232  </Text>

    <Text> {name2} </Text>
  </View>

  <Text>
{getnames("Yann", "Fouquet")}
  </Text>


<View style={styles.viewBoutton}>
  <Button 
  title="Ceci est un bouton"
  color="green"
  onPress={handlePress}
  />

<Button 
  title="Bouton 2"
  color="blue"
  onPress={handlePress}
  />
</View>

<Text>
  {name}
</Text>





<View style={styles.viewImageAlign}>
<View style={styles.viewImage}>
<TouchableOpacity
onPress={handlePress2}
activeOpacity={0.3}
>
<Image
    source={require('./assets/rose.png')}
    style={styles.imageStyle}
  />
</TouchableOpacity>
</View>
<View style={styles.viewImage}>
  <Image
    source={require('./assets/rose.png')}
    style={styles.imageStyle}
  />
</View>
</View>


<View style={styles.viewImageAlign}>
<View style={styles.viewImage}>
  <Image
    source={require('./assets/rose.png')}
    style={styles.imageStyle}
  />
</View>

<View style={styles.viewImage}>
  <Image
    source={require('./assets/rose.png')}
    style={styles.imageStyle}
  />
</View>
</View>



  <View style={styles.viewImage2}>
  <Text>
{Number}
  </Text>
  </View>




</View>
);
}


{/*feuille de style type CSS*/}
const styles = StyleSheet.create({
  container:{marginTop:50, flexDirection: "column"},
  textOne:{fontSize:20},
  viewTWO:{backgroundColor:"yellow", flexDirection: "row"},
  viewBoutton:{flexDirection:"row"},
  viewImage:{width:'45%', aspectRatio:1, margin:'2%'},
  imageStyle:{ width:'100%',height:'100%', resizeMode: "contain"},
  viewImageAlign:{flexDirection:"row", justifyContent:'center'},
  viewImage2:{width: 150, height:150 , backgroundColor: "lightblue"},
}
)


