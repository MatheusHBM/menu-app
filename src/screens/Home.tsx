import { useState } from 'react';
import { VStack, Text, HStack, Button, IconButton, useTheme, Heading, FlatList } from 'native-base';
import Logo from '../assets/logo_secondary2.svg'
import { ArrowSquareLeft } from 'phosphor-react-native';
import { Filter } from '../components/Filter';

export function Home() {
    const { colors } = useTheme()
    const [drinkType, setDrinkType] = useState<'nonAlcoholic' | 'alcoholic'>('alcoholic')
    const [drinks, setDrinks]= useState([{
        uuid:'123',
        name:'Soda de Maçã Verde',
        type:'nonAlcoholic',
        description:'Uma deliciosa bebida com muito gelo, água com gás e xarope sabor maçã verde.'
    }])
    return (
        <VStack flex={1} bg={'gray.900'}>
            <VStack mr={30}>
                <HStack justifyContent={'space-between'}>
                    <IconButton ml={15} width={20} mt={50} height={20} icon={<ArrowSquareLeft size={40} color={colors.pink[400]} />} />
                    <Logo height={200} width={200} />
                </HStack>                
                    <HStack space={4} w='full' ml={3} mb={4} justifyContent={'space-between'} alignItems={'center'}>
                        <Filter type='alcoholic' title='Bebidas Alcoolicas' onPress={() => setDrinkType('alcoholic')} isActive={drinkType === 'alcoholic'} />
                        <Filter type='nonAlcoholic' title='Bebidas Não Alcoolicas' onPress={() => setDrinkType('nonAlcoholic')} isActive={drinkType === 'nonAlcoholic'}/>
                    </HStack>                
                <FlatList
                    data={drinks}
                    keyExtractor = {item=>item.uuid}
                    renderItem={({item})=><Text color={'white'}>{item.description}</Text>}
                />
            </VStack>

        </VStack>
    );
}