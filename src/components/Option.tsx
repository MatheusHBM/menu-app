import React, {useEffect} from 'react';
import {VStack, HStack, Text, useTheme, Pressable,IPressableProps, Button, IconButton} from 'native-base';
import {Plus} from 'phosphor-react-native';

export type OptionProps = {
    uuid: string;
    name: string;    
    description: string;
    price: number
    type: 'alcoholic'|'nonAlcoholic';

}

type Props =  IPressableProps & {
    data: OptionProps;
    itemList: Array<number>;
    setItemList: Function;
    drinkType: string
    handleList: Function
}

export function Option({data, itemList, setItemList, drinkType, handleList, ...rest}: Props) {
    const {colors} = useTheme();

  return (
    <Pressable {...rest}>
       {data.type===drinkType && <HStack
    bg='gray.800'
    mb={4}
    ml={7}
    pl={1}    
    alignItems={'center'}    
    justifyContent='space-between'    
    overflow='hidden'
    rounded='sm'
    borderWidth={1} 
    borderColor = {data.type==='alcoholic'? colors.pink[400] : colors.cyan[400]}
    >
    <Text color={data.type==='alcoholic'? colors.pink[400] : colors.cyan[400]} fontSize={'md'}>{data.name}</Text>
    <IconButton     
     h={'full'}
     w={10}
     icon={<Plus size={35} color={data.type==='alcoholic'? colors.pink[400] : colors.cyan[400]}  />}
     onPress={()=>handleList(data.price)}     
     >
     </IconButton>
        
        

    </HStack>}

    </Pressable>
   
  );
}