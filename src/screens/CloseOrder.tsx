import React from 'react';
import { VStack, HStack, useTheme, IconButton, Box, Text} from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import Logo from '../assets/logo_secondary2.svg'
import { ArrowSquareLeft } from 'phosphor-react-native';
import { OrderBill } from '../components/OrderBill';

type RouteParams = {
    bill:number;
}

export function CloseOrder() {
    const {colors} = useTheme()
    const route = useRoute();
    const navigation = useNavigation()
    const {bill} = route.params as RouteParams;

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
            <OrderBill bill={bill} /> 
        </VStack>        
    </VStack>
  );
}