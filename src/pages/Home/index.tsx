import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AnimatedCircularProgress from 'react-native-conical-gradient-progress';

import api from '../../services/api';

import avatar from '../../assets/profile.png';

import { styles } from './styles';

const Home: React.FC = () => {
  const [token, setToken] = useState('');
  const name = 'Alexandre Zanchet';
  const email = 'alexandrezanchet@gmail.com';

  const { navigate } = useNavigation();

  // useEffect(() => {
  //   api.get(`/GenerateToken?nome=${name}&email=${email}`).then(response => {
  //     console.log(response);
  //     console.log(response.data);
  //     setToken(response.data);
  //   });
  // }, []);

  return (
    <LinearGradient colors={['#282C38', '#175081']} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={avatar} />
            <AnimatedCircularProgress
              useNativeDriver
              size={130}
              width={5}
              fill={100}
              prefill={100}
              beginColor="#283450"
              endColor="#00FEC5"
              segments={100}
              backgroundColor="rgba(255, 255, 255, 0.2)"
              linecap="round"
            />
          </View>

          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('SendMoney')}
        >
          <Text style={styles.buttonText}>ENVIAR DINHEIRO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('TransferHistory')}
        >
          <Text style={styles.buttonText}>HISTÓRICO DE ENVIOS</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
