import React, { useState, useRef, useCallback } from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

interface ISendOverlayProps {
  contact:
    | {
        id: string;
        name: string;
        phone: string;
        avatarUrl?: string;
      }
    | undefined;
  setSelectedContact: (contact: any) => void;
}

const SendOverlay: React.FC<ISendOverlayProps> = ({
  contact,
  setSelectedContact,
}) => {
  const [mount, setMount] = useState();

  const inputRef = useRef(null);

  const handleClosePress = useCallback(() => {
    setSelectedContact(undefined);
  }, [setSelectedContact]);

  // const numberValue = inputRef.getRawValue();

  return (
    <>
      {contact && (
        <View style={styles.container}>
          <View style={styles.overlay}>
            <Image style={styles.avatar} source={{ uri: contact.avatarUrl }} />

            <Text style={styles.name}>{contact.name}</Text>
            <Text style={styles.phone}>{contact.phone}</Text>

            <Text style={styles.smallText}>Valor a enviar:</Text>
            <View style={styles.inputBackground}>
              <TextInputMask
                textAlign="center"
                type="money"
                options={{
                  precision: 2,
                  separator: ',',
                  delimiter: '.',
                  unit: 'R$ ',
                  suffixUnit: '',
                }}
                style={styles.input}
                placeholder="R$ 0,00"
                placeholderTextColor="#00A6A8"
                value={mount}
                onChangeText={text => setMount(text)}
                ref={inputRef}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>ENVIAR</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.close}>
              <TouchableOpacity
                onPress={handleClosePress}
                style={styles.button}
              >
                <AntDesign name="close" size={28} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default SendOverlay;
