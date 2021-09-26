import React from 'react';
import { SafeAreaView, FlatList, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TextMask } from 'react-native-masked-text';

import Header from '../../components/Header';

import { styles } from './styles';

const TransferHistory: React.FC = () => {
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

  const transfers = [
    {
      Id: 0,
      ClienteId: 10,
      Valor: 60.4,
      Token: '1d40d305-c836-43a2-b4db-acc56bcc1393',
      Data: '2016-08-02T14:25:37.55',
    },
    {
      Id: 1,
      ClienteId: 11,
      Valor: 24,
      Token: '1d40d305-c836-43a2-b4db-acc56bcc1393',
      Data: '2016-08-02T14:25:37.55',
    },
    {
      Id: 2,
      ClienteId: 3,
      Valor: 28,
      Token: '1d40d305-c836-43a2-b4db-acc56bcc1393',
      Data: '2016-08-02T14:25:37.55',
    },
    {
      Id: 3,
      ClienteId: 4,
      Valor: 21,
      Token: '1d40d305-c836-43a2-b4db-acc56bcc1393',
      Data: '2016-08-02T14:25:37.55',
    },
    {
      Id: 4,
      ClienteId: 5,
      Valor: 29,
      Token: '1d40d305-c836-43a2-b4db-acc56bcc1393',
      Data: '2016-08-02T14:25:37.55',
    },
    {
      Id: 5,
      ClienteId: 5,
      Valor: 20,
      Token: '1d40d305-c836-43a2-b4db-acc56bcc1393',
      Data: '2016-08-02T14:25:37.55',
    },
    {
      Id: 6,
      ClienteId: 6,
      Valor: 22,
      Token: '1d40d305-c836-43a2-b4db-acc56bcc1393',
      Data: '2016-08-02T14:25:37.55',
    },
    {
      Id: 7,
      ClienteId: 11,
      Valor: 25,
      Token: '1d40d305-c836-43a2-b4db-acc56bcc1393',
      Data: '2016-08-02T14:25:37.55',
    },
    {
      Id: 8,
      ClienteId: 2,
      Valor: 20,
      Token: '1d40d305-c836-43a2-b4db-acc56bcc1393',
      Data: '2016-08-02T14:25:37.55',
    },
    {
      Id: 9,
      ClienteId: 8,
      Valor: 29,
      Token: '1d40d305-c836-43a2-b4db-acc56bcc1393',
      Data: '2016-08-02T14:25:37.55',
    },
    {
      Id: 10,
      ClienteId: 7,
      Valor: 23,
      Token: '1d40d305-c836-43a2-b4db-acc56bcc1393',
      Data: '2016-08-02T14:25:37.55',
    },
    {
      Id: 11,
      ClienteId: 6,
      Valor: 22,
      Token: '1d40d305-c836-43a2-b4db-acc56bcc1393',
      Data: '2016-08-02T14:25:37.55',
    },
    {
      Id: 12,
      ClienteId: 13,
      Valor: 22,
      Token: '1d40d305-c836-43a2-b4db-acc56bcc1393',
      Data: '2016-08-02T14:25:37.55',
    },
    {
      Id: 13,
      ClienteId: 1,
      Valor: 25,
      Token: '1d40d305-c836-43a2-b4db-acc56bcc1393',
      Data: '2016-08-02T14:25:37.55',
    },
    {
      Id: 14,
      ClienteId: 2,
      Valor: 27,
      Token: '1d40d305-c836-43a2-b4db-acc56bcc1393',
      Data: '2016-08-02T14:25:37.55',
    },
  ];

  const graphData = transfers
    .reduce((r, { ClienteId, Valor }) => {
      const temp = r.find(o => o.ClienteId === ClienteId);
      if (!temp) {
        r.push({ ClienteId, Valor });
      } else {
        temp.Valor += Valor;
      }
      return r;
    }, [])
    .sort((a, b) => parseFloat(b.Valor) - parseFloat(a.Valor));

  return (
    <LinearGradient colors={['#282C38', '#175081']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header title="HISTÓRICO DE ENVIOS" />

        <View style={styles.backgroundLinesContainer}>
          <View style={styles.backgroundLines} />
          <View style={styles.backgroundLines} />
          <View style={styles.backgroundLines} />
          <View style={styles.backgroundLines} />
          <View style={styles.backgroundLines} />
          <View style={styles.backgroundLines} />
          <View style={styles.backgroundLines} />
          <View style={styles.backgroundLines} />
          <View style={styles.backgroundLines} />
          <View style={styles.backgroundLines} />
          <View style={styles.backgroundLines} />
          <View style={styles.backgroundLines} />
          <View style={styles.backgroundLines} />
          <View style={styles.backgroundLines} />
          <View style={styles.backgroundLines} />
          <View style={styles.backgroundLines} />
        </View>

        <FlatList
          style={styles.graphList}
          contentContainerStyle={{ alignItems: 'flex-end' }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={graphData}
          keyExtractor={item => item.ClienteId.toString()}
          renderItem={({ item }) => {
            const contact = contacts.filter(
              contactItem => contactItem.id === item.ClienteId,
            );

            const ratio = item.Valor / graphData[0].Valor;

            const lineItemHeight = 140 * ratio;

            return (
              <View style={styles.graphItemContainer}>
                <TextMask
                  type="money"
                  options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: '',
                    suffixUnit: '',
                  }}
                  style={styles.graphMountItem}
                  value={item.Valor}
                />
                <View style={styles.graphSmallBall} />
                <LinearGradient
                  colors={['#165182', '#00A6A8']}
                  style={[styles.graphLineItem, { height: lineItemHeight }]}
                />
                <Image
                  source={{ uri: contact[0].avatarUrl }}
                  style={styles.graphAvatar}
                />
              </View>
            );
          }}
        />

        <FlatList
          style={styles.list}
          data={transfers}
          keyExtractor={item => item.Id.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => {
            const contact = contacts.filter(
              contactItem => contactItem.id === item.ClienteId,
            );

            return (
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: contact[0].avatarUrl }}
                  style={styles.avatar}
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>{contact[0].name}</Text>
                  <Text style={styles.phone}>{contact[0].phone}</Text>
                  <TextMask
                    type="money"
                    options={{
                      precision: 2,
                      separator: ',',
                      delimiter: '.',
                      unit: 'R$ ',
                      suffixUnit: '',
                    }}
                    style={styles.mount}
                    value={item.Valor}
                  />
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default TransferHistory;
