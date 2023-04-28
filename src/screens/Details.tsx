import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { VStack,HStack,IconButton, useTheme, ScrollView } from 'native-base';
import Logo from '../assets/logo_secondary2.svg'
import { ArrowSquareLeft } from 'phosphor-react-native';
import { Card } from '../components/Card';

type RouteParams = {
    drink:any;
}

export function Details() {
  const {colors} = useTheme()
    const route = useRoute();
    const navigation = useNavigation()
    const {drink} = route.params as RouteParams;
    function backToHome(){
        navigation.goBack();
    }
  return (
    <VStack flex={1} bg={'gray.900'}>
        <HStack mr = {30} justifyContent={'space-between'}>
                    <IconButton ml={15} width={20} mt={50} height={20} onPress={backToHome} icon={<ArrowSquareLeft size={40} color={colors.pink[400]} />} />
                    <Logo height={200} width={200} />
        </HStack>
        <VStack  alignItems={'center'}>
              <Card name={drink.name} description={drink.description} type={drink.type} price = {drink.price} />
        </VStack>        
    </VStack>
  );
}