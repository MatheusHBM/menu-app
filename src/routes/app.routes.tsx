import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Start } from "../screens/Start";
import { Details } from "../screens/Details";
import { CloseOrder } from "../screens/CloseOrder";

const {Navigator,  Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name='start' component={Start}/>   
            <Screen name='home' component={Home}/>
            <Screen name='details' component={Details}/> 
            <Screen name='closeOrder' component={CloseOrder}/>                           

        </Navigator>
    )
}