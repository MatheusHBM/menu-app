import { useState, useEffect } from 'react';
import { VStack, Text, HStack, IconButton, useTheme, Heading, FlatList, View, Button } from 'native-base';
import Logo from '../assets/logo_secondary2.svg'
import { ArrowSquareLeft } from 'phosphor-react-native';
import { Filter } from '../components/Filter';
import { Option, OptionProps} from '../components/Option';


export function Home() {
    const { colors } = useTheme()
    const [itemList,setItemList] = useState<Array<number>>([0])
    const [bill, setBill] = useState<number>(0)
    const [drinkType, setDrinkType] = useState<'nonAlcoholic' | 'alcoholic'>('alcoholic')
    const [drinks, setDrinks]= useState<OptionProps[]>([
        {uuid:'1',name:'Soda de Maçã Verde',type:'nonAlcoholic',description:'Uma deliciosa bebida com muito gelo, água com gás e xarope sabor Maçã Verde.',price: 17},
        {uuid:'3',name:'Soda de Limão',type:'nonAlcoholic',description:'Uma deliciosa bebida com muito gelo, água com gás e xarope sabor Limão.',price: 17},
        {uuid:'2',name:'Soda de Morango',type:'nonAlcoholic',description:'Uma deliciosa bebida com muito gelo, água com gás e xarope sabor Morango.',price: 17},
        {uuid:'4',name:'Soda de Uva',type:'nonAlcoholic',description:'Uma deliciosa bebida com muito gelo, água com gás e xarope sabor Uva.',price: 17},
        {uuid:'5',name:'Soda de Maçã Verde com Gin',type:'alcoholic',description:'Uma deliciosa bebida com muito gelo, água com gás, uma dose de gin e xarope sabor Maçã Verde.',price: 23},
        {uuid:'6',name:'Soda de Limão com Gin',type:'alcoholic',description:'Uma deliciosa bebida com muito gelo, água com gás, uma dose de gin e xarope sabor Limão.',price: 23},
        {uuid:'7',name:'Soda de Morango com Gin',type:'alcoholic',description:'Uma deliciosa bebida com muito gelo, água com gás, uma dose de gin e xarope sabor Morango.',price: 23},
        {uuid:'8',name:'Soda de Maçã Verde com Vodka',type:'alcoholic',description:'Uma deliciosa bebida com muito gelo, água com gás, uma dose de vodka e xarope sabor Maçã Verde.',price: 23}, 


    
])

function sumBill(value:number){
    let list = itemList;
      list.push(value);
      let sum = list.reduce(function(stck, val) {
        return stck + val;
    });
      setItemList(list);
      setBill(sum)    
}

useEffect(()=>{
        
},[drinkType])

    return (
        <>                
        <VStack flex={1} bg={'gray.900'}>            
            <VStack mr={30}>
                <HStack justifyContent={'space-between'}>
                    <IconButton ml={15} width={20} mt={50} height={20} onPress={()=>console.log('return to start')} icon={<ArrowSquareLeft size={40} color={colors.pink[400]} />} />
                    <Logo height={200} width={200} />
                </HStack>                
                    <HStack space={4} w='full' ml={3} mb={4} justifyContent={'space-between'} alignItems={'center'}>
                        <Filter type='alcoholic' title='Alcoolicos' onPress={() => setDrinkType('alcoholic')} isActive={drinkType === 'alcoholic'} />
                        <Filter type='nonAlcoholic' title='Não Alcoolicos' onPress={() => setDrinkType('nonAlcoholic')} isActive={drinkType === 'nonAlcoholic'}/>
                    </HStack>                
                    <FlatList                    
                    data={drinks}
                    keyExtractor = {item=>item.uuid}
                    renderItem={({item})=> <Option itemList={itemList} setItemList={setItemList} data= {item} drinkType={drinkType} handleList={sumBill} />}
                    contentContainerStyle = {{paddingBottom:350}}
                />           
            
            </VStack>
        </VStack>
        <View bg={'gray.900'} alignItems={'center'}>
            <Button
                w={300}
                h={20}                         
                bg={drinkType === 'alcoholic'? 'pink.600':'cyan.600'}             
                alignItems={'center'}
                rounded={10}
                _pressed = {{bg:'pink.900'}}
                onPress={()=>console.log('go to payment method')}
                disabled = {bill === 0}                                           
             >             
                <Heading fontSize={'xl'}color = 'white'>{'Fechar Pedido R$ ' + bill}</Heading>
            </Button>        
        </View>    
        </>   
    );
}