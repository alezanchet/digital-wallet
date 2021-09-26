import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import SendMoney from '../pages/SendMoney';
import TransferHistory from '../pages/TransferHistory';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="SendMoney" component={SendMoney} />
    <App.Screen name="TransferHistory" component={TransferHistory} />
  </App.Navigator>
);

export default AppRoutes;
