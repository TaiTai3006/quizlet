import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { Avatar } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Chip } from "react-native-paper";
const windowWidth = Dimensions.get("window").width;
const TermCard = () => {
  return (
    <View>
      <TouchableOpacity style={styles.card}>
          <View>
            <Text style={styles.text}>Tai Tai ne</Text>
            <View style={[styles.chip_container]}>
              <Chip
                style={[styles.chip_border, { marginRight: 5 }]}
                textStyle={styles.chip_text}
              >
                21 Terms
              </Chip>
              <Chip
                icon={() => <Ionicons name="image" color="#CACEE4" />}
                style={[styles.chip_border]}
                textStyle={styles.chip_text}
              >
                Images
              </Chip>
            </View>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Avatar.Image style={{marginRight: 5}} size={25} source={require('../../assets/images.jpeg')} />
            <Text style={{color:'#fff', fontWeight:'700', fontSize: 10}}>Tai tai</Text>
          </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: windowWidth * 0.4,
    width: windowWidth * 0.8,
    marginLeft: 15,
    borderColor: "#4B526C",
    borderWidth: 2,
    borderRadius: "20",
    flexDirection:'column',
    justifyContent:'space-between',
    padding: 15
  },
  card_container: {
    margin: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10,
  },
  chip_container: {
    flexDirection: "row",
  },
  chip_text: {
    color: "#CACEE4",
    fontSize: 10,
    fontWeight: "800",
  },
  chip_border: {
    backgroundColor: "#303855",
    borderRadius: "30",
  },
});

export default TermCard;
