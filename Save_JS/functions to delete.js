export async function playSoundObjet(index) {
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