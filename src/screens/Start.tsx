import React from 'react';
import { HStack, VStack, Text, Button, Heading} from 'native-base';
import Logo from '../assets/logo_secondary2.svg'
export function Start() {
  
  return (
    <VStack flex={1} alignItems={'center'} bg={'gray.900'}>
        <VStack mt={100} alignItems='center'>
            <Logo  height={350} width={350} />            
        </VStack>
        <Button
             mt={70}
             w={256}
             h={85}                         
             bg={'pink.600'}             
             alignItems={'center'}
             rounded={10}
             _pressed = {{bg:'pink.900'}}
             onPress = {()=>console.log('go to home page')}                                    
             >             
                <Heading fontSize={'xl'}color = 'white'>Começar</Heading>
            </Button>        
                      
               
        
    </VStack>
  );
}