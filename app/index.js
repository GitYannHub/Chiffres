import{View, Text, StyleSheet, ImageBackground, Button, Image, TouchableOpacity, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Constants from './data';

export default function Page() {

    
  return (
<View style={[StyleSheet.absoluteFill, styles.mainView]}>
<ImageBackground style={ styles.imgBackground } 
                 source={require('../assets/fonds/fond2.jpg')}>

     <View style={styles.spacerHaut}></View>
     <Text style={styles.titre} adjustsFontSizeToFit={true} numberOfLines={1}>J'apprends les couleurs</Text>
     <View style={styles.spacer2}></View>
  

    <View style={styles.viewContainerMenu}>
     <Link  href="./memory" asChild> 
     <Pressable style={styles.wrapperstyle}>
          <Text style={styles.menu}>MEMORY</Text>
      </Pressable>
      </Link>
    </View>
    
    <View style={styles.spacer3}></View>

    <View style={styles.viewContainerMenu}>
     <Link  href="./jeu" asChild> 
     <Pressable style={styles.wrapperstyle}>
          <Text style={styles.menu}>QUIZZ</Text>
      </Pressable>
      </Link>
    </View>
    
    <View style={styles.spacer3}></View>

    <View style={styles.viewContainerMenu}>
     <Link  href="./apprentissage" asChild> 
     <Pressable style={styles.wrapperstyle}>
          <Text style={styles.menu}>APPRENTISSAGE</Text>
      </Pressable>
      </Link>
    </View>

    <View style={styles.spacer3}></View>

    <View style={styles.viewContainerMenu}>
     <Link  href="./emotions" asChild> 
     <Pressable style={styles.wrapperstyle}>
          <Text style={styles.menu}>EMOTIONS</Text>
      </Pressable>
      </Link>
    </View>
    
   

    </ImageBackground>
    </View>
    
  );
}

{/*feuille de style type CSS*/}
const styles = StyleSheet.create({
   mainView:{backgroundColor: "#58dde6", flex: 1, width: null, height: null, },
   imgBackground:{ width: '100%',height: '100%', flex: 1 },

   spacerHaut:{height:'25%', width:'100%',},
   spacer2:{height:'7%', width:'100%',},
   spacer3:{height:'5%', width:'100%',},

   titre:{fontSize:50, textAlign:'center', fontWeight:"700",  color: '#f13b8e', marginHorizontal:20},

   menu: {fontSize:30, color: 'white', fontWeight:'600'},
   wrapperstyle: {width:'70%', height: '100%', backgroundColor:'#bbada0',justifyContent:"center", alignItems: "center", borderRadius:10,  },
   viewContainerMenu:{ height:'10%', justifyContent: "center",alignItems: "center",},
}
)

