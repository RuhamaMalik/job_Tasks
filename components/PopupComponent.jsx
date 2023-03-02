import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const PopupComponent = ({ visible, onClose }) => {

  let fields = ["Bank", "Client", "Date", "Ref No.", 'Consignment', 'Item', 'Description', 'Quantiy', 'Amount'];
  let answers = ["Bank1", "Buyer1", "28-11-2023", "PR-1", "CN-1", "Cotton", " Egyption Cotton", "1000 Meters", "PKR 30,000"]
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.popup}>
          <View style={styles.parent}>
            {/* <View>
              {fields.map((item, key) => (

                <Text key={key}> {item} </Text>
                
                )
              )}

            </View> */}
            <View>
              {fields.map((item, key) => (
                <Text
                  key={key}
                  style={[
                    styles.item,
                    key % 2 === 0 ? styles.evenItem : styles.oddItem,
                  ]}
                >
                  {item}
                </Text>
              ))}
            </View>
            <View>
              {answers.map((item, key) => (
                <Text
                  key={key}
                  style={[
                    styles.item2,
                    key % 2 === 0 ? styles.evenItem : styles.oddItem,
                  ]}
                >
                  {item}
                </Text>
              ))}

            </View>

          </View>

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Deliver</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    height: '70vh',
    borderWidth: 1,
    borderColor: 'grey',
  },
  parent: {
    borderWidth: 0.1,
    borderColor: 'grey',
    flex: 1,
    flexDirection: 'row',
    height: 50

  },
  item: {
    flex: 1,
    padding: 5,
    color: '#03963e',
    borderWidth: 1,
    borderColor: 'grey',
    width: 100,

  },
  item2: {
    flex: 1,
    paddingVertical:6,
    paddingHorizontal:2,
        color: '#094e80',
    borderWidth: 1,
    borderColor: 'grey',
    width: 100,
    fontSize: 12.5

  },

  evenItem: {
    backgroundColor: '#e0e0e0',
  },

  oddItem: {
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#03963e',
    borderRadius: 10,
    padding: 4,
    margin: 5,
    textAlign: 'center',
    alignSelf: 'flex-end',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    width: 110,
    height: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',

  },
});

export default PopupComponent;
