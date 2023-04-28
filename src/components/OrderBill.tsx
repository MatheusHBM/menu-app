import React, {ReactNode} from 'react';
import { IconProps } from 'phosphor-react-native';
import { VStack, HStack, Text, Box, useTheme} from 'native-base';
import QRCode from 'react-qr-code';
type Props = {
    bill:number;
    
}

export function OrderBill({bill}:Props) {
    const {colors} = useTheme();
    const pix = 'b614e194-4dde-42e0-8043-067ca2ecb9b1'
    return(    
    <VStack borderWidth={1} borderColor = {colors.cyan[400]} bg={'gray.800'} p={5} mt={5} rounded={'sm'}>
        <VStack alignItems={'center'} mb={4}>

            <Box>
                <Text color={colors.cyan[400]} fontSize={'xl'} alignItems={'center'}>
                    {`Valor Total: R$ ${bill.toFixed(2)}`.replace(".",",")}                   
                </Text>
            </Box>            
            <Box borderTopWidth={3} borderTopColor={colors.cyan[400]} alignItems={'center'}>
                <Text color={colors.cyan[400]} fontSize={'sm'} alignItems={'center'} mt={3} mb={7}>
                    {`Pix: ${pix}`}                   
                </Text>
                <QRCode value={pix} />
            </Box>       
        </VStack>
    </VStack>
  );
}