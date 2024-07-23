import React, {useState, useEffect} from 'react';
import{View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';


export default function App(){

const couleurs=["blanc", "bleu", "gris", "jaune", "marron","orange","rose","rouge","vert","violet"];
const nbCouleurs=couleurs.length;

function random(max){
return Math.floor(Math.random() * max);
}

const [varr, setVarr]=useState(random(4));

/*
const handlePress = () => {
  setVarr(random(4));
}*/

const [tableauIndex, setTableauIndex]=useState(random(nbCouleurs));
const [couleurpng, setCouleurpng]=useState(couleurs[tableauIndex]);
const [couleurnom, setCouleurnom]=useState(couleurs[tableauIndex]);




function chooseElementTableau(){
  var i = random(nbCouleurs);
  while(i==tableauIndex){ //afin d'eviter d'avoir 2 fois le meme element
  i = random(nbCouleurs);
}

setCouleurpng(couleurs[i]);
setCouleurnom(couleurs[i]);
setTableauIndex(i);
//couleurName=couleurpng;
}


function handlePress() {
chooseElementTableau();
}



var myloop = [];
 function testfunction(ttt)  {
    
    for (let i = 0; i < 12; i++) {
      ttt.push(
        
        <Text>    {i}-
        {Math.floor(Math.random() * 9)+1}
        </Text>
        
      );
    }
  }
    



  testfunction(myloop);


var p=[];



p.push(
<Image
    source={require("./assets/"+couleurs[0]+".png")}
    style={styles.imageStyle}
  />
)


return(
  
<View>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>


<Text></Text>
<Text></Text>




<Button 
  title="Ceci est un bouton"
  color="green"
  onPress={handlePress}
  />


<Text>{tableauIndex}</Text>
<Text>{couleurnom}</Text>
<Text>{couleurpng}</Text>

{p}

</View>

);
}


const styles = StyleSheet.create({
    imageStyle:{ width:100,height:100, resizeMode: "contain"},

}
)


