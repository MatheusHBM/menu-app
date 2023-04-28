import React, {ReactNode} from 'react';
import { IconProps } from 'phosphor-react-native';
import { VStack, HStack, Text, Box, useTheme} from 'native-base';

type Props = {
    name:string;
    description?:string;
    price:number;
    type:string;

    
}

export function Card({name, description, price, type}:Props) {
    const {colors} = useTheme();
    const disclaimer = type==='alcoholic'? "Atenção: Drink alcoolico, beba com moderação. Contém açúcar." : "Atenção: Contém açúcar" 
  return (
    <VStack borderWidth={1} borderColor = {type==='alcoholic'? colors.pink[400] : colors.cyan[400]}bg={'gray.800'} p={5} mt={5} rounded={'sm'}>
        <VStack alignItems={'center'} mb={4}>
            <Box>
                <Text color={type==='alcoholic'? colors.pink[400] : colors.cyan[400]} fontSize={'xl'} alignItems={'center'}>
                    {name}
                </Text>
            </Box>
            <Box borderTopWidth={3} borderTopColor = {type==='alcoholic'? colors.pink[400] : colors.cyan[400]}>
                <Text mt={3} color={type==='alcoholic'? colors.pink[400] : colors.cyan[400]} fontSize={'sm'} alignItems={'center'}>
                    {description}
                </Text>
            </Box>
            <Box>
                <Text mt={3} color='danger.700' fontSize={'sm'} alignItems={'center'}>
                    {disclaimer}
                </Text>
            </Box>
            
        </VStack>

            <Box borderTopWidth={3} borderTopColor = {type==='alcoholic'? colors.pink[400] : colors.cyan[400]}>
                <Text mt={3} color={type==='alcoholic'? colors.pink[400] : colors.cyan[400]} fontSize={'xl'} alignItems={'center'}>
                    {`Valor: R$ ${price.toFixed(2)}`.replace(".",",")}
                </Text>
            </Box>

    </VStack>
  );
}