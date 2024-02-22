import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import ItemDetail from "../screens/ItemDetail";
import ItemListCategories from "../screens/ItemListCategories";
import Header from "../components/Header";

const Navigator = () => {
    const Stack = createNativeStackNavigator();
  
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ navigation }) => ({
            header: () => (
                <Header 
                title={"RETRO GAMING"} 
                navigation={navigation}
                />
            ),
          })}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ItemDetail" component={ItemDetail} />
          <Stack.Screen name="ItemListCategories" component={ItemListCategories} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default Navigator;