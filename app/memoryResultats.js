import React, {useState, useEffect} from 'react';
import{View, Text, StyleSheet, ImageBackground, Button, Image, TouchableOpacity, Pressable } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import Constants from './data';

export default function Page() {
    const params = useLocalSearchParams();

    const[dnoir1, setDnoir1]=useState('flex');
    const [dnoir2, setDnoir2]=useState('flex');
    const [dnoir3, setDnoir3]=useState('flex');
    const [dnoir4, setDnoir4]=useState('flex');
    const [dnoir5, setDnoir5]=useState('flex');

    const [dor1, setDor1]=useState('flex');
    const [dor2, setDor2]=useState('flex');
    const [dor3, setDor3]=useState('flex');
    const [dor4, setDor4]=useState('flex');
    const [dor5, setDor5]=useState('flex');

    const [message, setMessage]=useState('Bravo');
    const [note, setNote]=useState(10);

    function handlePressSound(numero) {   
      //Ne fait rien pour le moment
     }

     //fonction lancée au chargement
     useEffect(() => {
      var i = params.nbErreurs;
      var notesur20;

      notesur20=20-(2*i);
      if(notesur20<0){notesur20=0;}
      setNote(notesur20);

  //Etoiles et appréciations
if(i==0||i==1){
  setDnoir1("none");
  setDnoir2("none");
  setDnoir3("none");
  setDnoir4("none");
  setDnoir5("none");
  setMessage("Félicitations !");
}
if(i==2||i==3){
  setDnoir1("none");
  setDnoir2("none");
  setDnoir3("none");
  setDnoir4("none");
  setDor5("none");
  setMessage("Très bien");
}
if(i==4||i==5){
  setDnoir1("none");
  setDnoir2("none");
  setDnoir3("none");
  setDor4("none");
  setDor5("none");
  setMessage("Bien");
}
if(i==6||i==7||i==8){
  setDnoir1("none");
  setDnoir2("none");
  setDor3("none");
  setDor4("none");
  setDor5("none");
  setMessage("Peut mieux faire");
}
if(i>8){
  setDnoir1("none");
  setDor2("none");
  setDor3("none");
  setDor4("none");
  setDor5("none");
  setMessage("Bof Bof");
}

   }, [])
    
  return (
<View style={[StyleSheet.absoluteFill, styles.mainView]}>
<ImageBackground style={ styles.imgBackground } 
                 source={require('../assets/fonds/fond2.jpg')}>

 <View style={styles.spacerHaut}></View>  

<View style={styles.mainContenair}>
<View style={styles.c2}>

<View style={styles.spacerEtoile}></View>
<View style={styles.spacerEtoile}></View>
<View style={styles.spacerEtoile}></View>

  <TouchableOpacity style={{display: dnoir1}} disabled={true}>
  <View style={styles.spacerEtoile}></View>
  <View style={styles.viewImage}>
      <Image
        source= {require('../assets/icones/etoile-noire.png')}
        style={styles.imageStyle}
       />
    </View>
    </TouchableOpacity>
       
  <TouchableOpacity style={{display: dor1}} disabled={true}>
  <View style={styles.viewImage}>
      <Image
        source= {require('../assets/icones/etoile-or.png')}
        style={styles.imageStyle}
       />
        </View>
    </TouchableOpacity>
   

</View>

<View style={styles.colonne}>
<View style={styles.spacerEtoile}></View>
<TouchableOpacity style={{display: dnoir2}} disabled={true}>
  <View style={styles.viewImage}>
      <Image
        source= {require('../assets/icones/etoile-noire.png')}
        style={styles.imageStyle}
       />
    </View>
    </TouchableOpacity>
       
  <TouchableOpacity style={{display: dor2}} disabled={true}>
  <View style={styles.viewImage}>
      <Image
        source= {require('../assets/icones/etoile-or.png')}
        style={styles.imageStyle}
       />
        </View>
    </TouchableOpacity>
</View>


<View style={styles.c2}>
<TouchableOpacity style={{display: dnoir3}} disabled={true}>
  <View style={styles.viewImage}>
      <Image
        source= {require('../assets/icones/etoile-noire.png')}
        style={styles.imageStyle}
       />
    </View>
    </TouchableOpacity>
       
  <TouchableOpacity style={{display: dor3}} disabled={true}>
  <View style={styles.viewImage}>
      <Image
        source= {require('../assets/icones/etoile-or.png')}
        style={styles.imageStyle}
       />
        </View>
    </TouchableOpacity>
</View>


<View style={styles.colonne}>
<View style={styles.spacerEtoile}></View>
<TouchableOpacity style={{display: dnoir4}} disabled={true}>
  <View style={styles.viewImage}>
      <Image
        source= {require('../assets/icones/etoile-noire.png')}
        style={styles.imageStyle}
       />
    </View>
    </TouchableOpacity>
       
  <TouchableOpacity style={{display: dor4}} disabled={true}>
  <View style={styles.viewImage}>
      <Image
        source= {require('../assets/icones/etoile-or.png')}
        style={styles.imageStyle}
       />
        </View>
    </TouchableOpacity>
</View>


<View style={styles.c2}>
<View style={styles.spacerEtoile}></View>
<View style={styles.spacerEtoile}></View>
<View style={styles.spacerEtoile}></View>
<TouchableOpacity style={{display: dnoir5}} disabled={true}>
  <View style={styles.viewImage}>
      <Image
        source= {require('../assets/icones/etoile-noire.png')}
        style={styles.imageStyle}
       />
    </View>
    </TouchableOpacity>
       
  <TouchableOpacity style={{display: dor5}} disabled={true}>
  <View style={styles.viewImage}>
      <Image
        source= {require('../assets/icones/etoile-or.png')}
        style={styles.imageStyle}
       />
        </View>
    </TouchableOpacity>
</View>


</View>
    

<View style={styles.appreciation}>
    <Text style={styles.note}>{message}</Text>
  </View>
    
  <View style={styles.notewrapper}>
    <Text style={styles.note}> </Text>
    </View>

    <View  style={styles.spacer2}></View>
      <View style={styles.viewContainerMenu}>
      <Link  href="/" asChild> 
      <Pressable style={styles.wrapperMenu}>
      <Text style={styles.titreMenu}>MENU</Text>
        </Pressable>
        </Link>
    </View>
  
      </ImageBackground>
    </View>
    
  );
}

{/*feuille de style type CSS*/}
const styles = StyleSheet.create({
  mainView:{backgroundColor: "#59d9e9", flex: 1, width: null, height: null, },
  imgBackground:{ width: '100%',height: '100%', flex: 1 },

  spacerHaut:{height:'40%', width:'100%',},

  mainContenair:{height: '20%', width: '95%',alignSelf:'center', flexDirection:'row',},
  colonne:{width:'20%', },
  c2:{width:'20%', },

  imageEtoile:{width:70, height: 70, resizeMode: "contain"},
  

  viewImage:{width:'100%', aspectRatio:1, },
  imageStyle:{ height:'95%', width:'100%', resizeMode: "contain"},
  spacerEtoile:{width:'100%', height:'16%'},

  //Notes et appréciations
  note:{fontSize:30, textAlign:'center', fontWeight:"bold",  color: '#f13b8e'},
  appreciation:{marginTop:'0%'},
  notewrapper:{marginTop:'5%'},

  //Retour au menu
  spacer2:{height:'6%', width:'100%',},
  viewContainerMenu:{ height:'10%', width:'100%', justifyContent:'center' , alignItems: "center" },
  wrapperMenu: { width:'60%', height: '100%', backgroundColor:'#bbada0', justifyContent:'center' , alignItems: "center",  borderRadius:10,  },
  titreMenu:{fontSize:35, color: 'white', fontWeight:'600', },

}
)