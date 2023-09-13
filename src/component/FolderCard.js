import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { Avatar } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Chip } from "react-native-paper";
const windowWidth = Dimensions.get("window").width;
const FolderCard = () => {
  return (
    <View>
      <TouchableOpacity style={styles.card}>
        <View style={styles.title}>
          <Ionicons
            style={{ marginRight: 10 }}
            color="#4B526C"
            size={25}
            name="folder-outline"
          />
          <Text style={styles.text}>kanji</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Text
              style={[
                styles.text,
                { fontWeight: "700", fontSize: 10, marginRight: 10 },
              ]}
            >
              21 hoc phan
            </Text>
          </View>

          <Avatar.Image
            style={{ marginRight: 5 }}
            size={25}
            source={require("../../assets/images.jpeg")}
          />
          <Text style={{ color: "#fff", fontWeight: "700", fontSize: 10 }}>
            Tai tai
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    height: windowWidth * 0.25,
    width: windowWidth * 0.8,
    marginLeft: 15,
    borderColor: "#4B526C",
    borderWidth: 2,
    borderRadius: "20",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 15,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default FolderCard;
