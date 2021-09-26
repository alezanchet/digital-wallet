import React, { useCallback, useState } from 'react';
import {
  SafeAreaView,
  Image,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../../components/Header';

import SendOverlay from './components/SendOverlay';

import { styles } from './styles';

const SendMoney: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState();

  const contacts = [
    {
      id: 0,
      name: 'Júlio Barcelos',
      phone: '(11) 96847-3251',
      avatarUrl: 'https://i.pravatar.cc/200?img=51',
    },
    {
      id: 1,
      name: 'Anderson Santos',
      phone: '(11) 98456-8745',
      avatarUrl: 'https://i.pravatar.cc/200?img=8',
    },
    {
      id: 2,
      name: 'Bianca Gente Fina',
      phone: '(11) 98654-7852',
      avatarUrl: 'https://i.pravatar.cc/200?img=1',
    },
    {
      id: 3,
      name: 'Débora Pomposa',
      phone: '(11) 96847-3251',
      avatarUrl: 'https://i.pravatar.cc/200?img=5',
    },
    {
      id: 4,
      name: 'Derlene da Terra',
      phone: '(11) 96871-8523',
      avatarUrl: 'https://i.pravatar.cc/200?img=9',
    },
    {
      id: 5,
      name: 'Fabiana Casca Grossa da Santa Maria de Lourdes',
      phone: '(19) 96871-8523',
      avatarUrl: 'https://i.pravatar.cc/200?img=10',
    },
    {
      id: 6,
      name: 'Francisca Sabida',
      phone: '(19) 96871-8523',
      avatarUrl: 'https://i.pravatar.cc/200?img=16',
    },
    {
      id: 7,
      name: 'Gerson Mariano',
      phone: '(11) 96847-3251',
      avatarUrl: 'https://i.pravatar.cc/200?img=3',
    },
    {
      id: 8,
      name: 'Olívio Pinhares',
      phone: '(11) 96847-3251',
      avatarUrl: 'https://i.pravatar.cc/200?img=11',
    },
    {
      id: 9,
      name: 'Pedro Martin da Silva',
      phone: '(11) 96847-3251',
      avatarUrl: 'https://i.pravatar.cc/200?img=12',
    },
    {
      id: 10,
      name: 'Oscar Oliveira Júnior',
      phone: '(11) 96847-3251',
      avatarUrl: 'https://i.pravatar.cc/200?img=14',
    },
    {
      id: 11,
      name: 'Evandro Lopes',
      phone: '(11) 96847-3251',
      avatarUrl: 'https://i.pravatar.cc/200?img=17',
    },
    {
      id: 12,
      name: 'Bruna Sanchez',
      phone: '(11) 96847-3251',
      avatarUrl: 'https://i.pravatar.cc/200?img=19',
    },
    {
      id: 13,
      name: 'Lúcia Figueiredo',
      phone: '(11) 96847-3251',
      avatarUrl: 'https://i.pravatar.cc/200?img=21',
    },
    {
      id: 14,
      name: 'Danielle Machado',
      phone: '(11) 96847-3251',
      avatarUrl: 'https://i.pravatar.cc/200?img=28',
    },
  ];

  const handleSelectedContact = useCallback(contact => {
    setSelectedContact(contact);
  }, []);

  return (
    <>
      <LinearGradient colors={['#282C38', '#175081']} style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <Header title="ENVIAR DINHEIRO" />
          <FlatList
            style={styles.list}
            data={contacts}
            keyExtractor={contact => contact.id.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item: contact }) => (
              <TouchableOpacity
                onPress={() => {
                  handleSelectedContact(contact);
                }}
                style={styles.itemContainer}
              >
                <Image
                  source={{ uri: contact.avatarUrl }}
                  style={styles.avatar}
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>{contact.name}</Text>
                  <Text style={styles.phone}>{contact.phone}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </LinearGradient>

      <SendOverlay
        setSelectedContact={handleSelectedContact}
        contact={selectedContact}
      />
    </>
  );
};

export default SendMoney;
