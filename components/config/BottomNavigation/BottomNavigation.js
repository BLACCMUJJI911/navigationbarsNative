import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Search from "../../../screens/Search/Search"
import { NavigationContainer } from "@react-navigation/native"

export default function BottomNavigation() {

    const Bottom = createBottomTabNavigator()

    return (
        <>

          

                <Bottom.Navigator>
                    
                <Bottom.Screen name="HOME" component={Search} options={{headerShown:false,tabBarLabel:"Home"}}></Bottom.Screen>
                <Bottom.Screen name="Search" component={Search} options={{headerShown:false}}></Bottom.Screen>

                </Bottom.Navigator>

       

        </>
    )
}