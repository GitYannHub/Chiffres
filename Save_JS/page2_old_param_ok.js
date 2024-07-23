import React from 'react';
import { View, Text } from 'react-native';
//import { Link, useNavigation, useRouter, useLocalSearchParams, useUnstableGlobalHref } from 'expo-router';
import { Link, useLocalSearchParams } from 'expo-router';

export default function Page({navigation,Route}) {
   const params = useLocalSearchParams();
return(
    <View>
        <Text>Page 2</Text>

        <Text> </Text>
     <Text> </Text>
     <Text> </Text>
     <Text> </Text>
     <Text> </Text>
        <Link href="./">index</Link>
        <Text> </Text>
        <Text> </Text>
      
      <Text>Paramaètre reçu depuis index: {params.datapassed} </Text>

    </View>
)
}