import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {

    const nbData=10;
  return (
    <View>
      <Link href="./"> INDEX pds</Link>
     <Text> </Text>
     <Text> </Text>
     <Text> </Text>
     <Text> </Text>
     <Text> </Text>
     <Text> </Text>
     <Text> </Text>
     <Text> </Text>
      <Link href={{pathname: "./page2", params: { datapassed: nbData }}}>page 2 avec un paramètre à la fin</Link>
      <Text> </Text>
     <Text> </Text>
     <Text> </Text>
     <Text> </Text>
     <Text> </Text>
     <Text> </Text>
     <Text> </Text>
     <Text> </Text>
      <Link href="./App">Test de la démo des taches</Link>

      <Text> </Text>
      <Text> </Text>
     
    </View>
  );
}