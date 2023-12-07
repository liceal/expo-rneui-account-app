import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native';

import Test from '@/Test';
import My from '@/My';
import Home from '@/Home';
import BillList from '@/billList';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

function withScrollView(Component) {
  return function WithScrollView(props) {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Component {...props} />
      </ScrollView>
    );
  };
}
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="BillList" component={withScrollView(BillList)}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            iconName = focused
              ? 'reader-sharp'
              : 'reader-outline';

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen name="Home" component={withScrollView(Home)}
        options={{
          tabBarIcon: () => <Icons name="stepforward" size={50} color='pink' />,
        }}
      />
      <Tab.Screen name="My" component={withScrollView(My)} />
      <Tab.Screen name="Test" component={withScrollView(Test)} />
    </Tab.Navigator>
  )
}

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
