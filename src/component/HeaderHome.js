import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Stack, TextInput, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
const HeaderHome = ({ isHeaderVisible }) => {
  return (
    <SafeAreaView>
      <Stack spacing={20}>
        <Animatable.View
          animation={isHeaderVisible ? "fadeIn" : "fadeOut"}
          duration={1000}
          style={isHeaderVisible ? styles.header_title : { display: "none" }}
        >
          <Text style={styles.text}>
            Quizlet
          </Text>
          <Ionicons name="notifications-outline" size={25} color="#ffff" />
        </Animatable.View>
        <View style={styles.search}>
          <TextInput
           
            variant="outlined"
            leading={(props) => <Ionicons name="search-outline" {...props} />}
            trailing={(props) => (
              <IconButton
                icon={(props) => <Icon name="camera-outline" {...props} />}
                {...props}
              />
            )}
          />
        </View>
      </Stack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header_title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  text:{ color: "#fff", fontSize: 30,  fontWeight: 'bold'},
  search:{ marginLeft: 30, marginRight: 30, marginBottom: 60 }
});

export default HeaderHome;
