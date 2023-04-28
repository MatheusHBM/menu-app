import { useState, useEffect } from 'react';
import { VStack, Text, HStack, IconButton, useTheme, Heading, FlatList, View, Button } from 'native-base';
import Logo from '../assets/logo_secondary2.svg'
import { ArrowSquareLeft } from 'phosphor-react-native';
import { Filter } from '../components/Filter';
import { Option, OptionProps} from '../components/Option';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';




export function Home() {
    const { colors } = useTheme()
    const [itemList,setItemList] = useState<Array<number>>([0])
    const [bill, setBill] = useState<number>(0)
    const [drinkType, setDrinkType] = useState<'nonAlcoholic' | 'alcoholic'>('alcoholic')
    const [drinks, setDrinks]= useState<OptionProps[]>([])
    const navigation = useNavigation();

    function backToStart(){
        navigation.goBack()
    }

    function openDetails(drink:any){
        navigation.navigate('details', {drink})
    }

    function goToCloseOrder(){
        navigation.navigate('closeOrder',{bill})
    }

    function getDrinks(){
        try {
            axios.get('http://164.152.39.244:3000/drinks').then((res)=>{
            setDrinks(res.data)            
        })            
        } catch (err) {
            console.log('erro: '+err)            
        }
        
    }
    
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
        getDrinks();            
    },[drinkType])

    return (
        <>                
        <VStack flex={1} bg={'gray.900'}>            
            <VStack mr={30}>
                <HStack justifyContent={'space-between'}>
                    <IconButton ml={15} width={20} mt={50} height={20} onPress={backToStart} icon={<ArrowSquareLeft size={40} color={colors.pink[400]} />} />
                    <Logo height={200} width={200} />
                </HStack>                
                    <HStack space={4} w='full' ml={3} mb={4} justifyContent={'space-between'} alignItems={'center'}>
                        <Filter type='alcoholic' title='Alcoolicos' onPress={() => setDrinkType('alcoholic')} isActive={drinkType === 'alcoholic'} />
                        <Filter type='nonAlcoholic' title='Não Alcoolicos' onPress={() => setDrinkType('nonAlcoholic')} isActive={drinkType === 'nonAlcoholic'}/>
                    </HStack>                
                    <FlatList                    
                    data={drinks}
                    keyExtractor = {item=>item.uuid}
                    renderItem={({item})=> <Option itemList={itemList} setItemList={setItemList} data= {item} drinkType={drinkType} handleList={sumBill} onPress={()=>openDetails(item)}/>}
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
                onPress={goToCloseOrder}
                disabled = {bill === 0}                                           
             >             
                <Heading fontSize={'xl'}color = 'white'>{`Fechar Pedido R$ ${bill.toFixed(2)}`.replace(".",",")}</Heading>
            </Button>        
        </View>    
        </>   
    );
}