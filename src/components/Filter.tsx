import React from 'react';
import { VStack, Text, Button, IButtonProps, useTheme} from 'native-base';

type Props =  IButtonProps &{
    title:string;
    isActive?:boolean;
    type:'alcoholic'|'nonAlcoholic'

}

export function Filter({title, isActive = false, type, ...rest}:Props) {
    const {colors} = useTheme();
  return (
    <Button
    variant={'outline'}
    borderWidth={isActive? 1:0} 
    borderColor = {type==='alcoholic'? colors.pink[400] : colors.cyan[400]}
    bgColor='gray.800'
    flex={1}
    {...rest}
    >
        <Text color={isActive? (type==='alcoholic'? colors.pink[400] : colors.cyan[400]) : colors.gray[400] }>{title}</Text>        

    </Button>
  );
}