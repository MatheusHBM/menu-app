import React from 'react';
import { HStack, VStack, Text, Button, Heading} from 'native-base';
import Logo from '../assets/logo_secondary2.svg'
export function Start() {
  function handleClick(){
    console.log('clicked')
  }
  return (
    <VStack flex={1} alignItems={'center'} bg={'gray.900'}>
        <VStack mt={100} alignItems='center'>
            <Logo  height={400} width={400} />            
        </VStack>
        <Button
             mt={100}
             w={256}
             h={85}                         
             bg={'pink.600'}             
             alignItems={'center'}
             rounded={35}
             _pressed = {{bg:'pink.900'}}
             onPress = {handleClick}                                    
             >             
                <Heading fontSize={'xl'}color = 'white'>Fazer Pedido</Heading>
            </Button>        
                      
               
        
    </VStack>
  );
}