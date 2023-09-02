import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
} from "react-native";
import HeaderHome from "../component/HeaderHome";
import { TextInput } from "@react-native-material/core";
import { useState } from "react";
import TermCard from "../component/TermCard";

const HomeScreen = () => {

  const [isHeaderVisible, setHeaderVisible] = useState(true);

  const handleScroll = (event) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    if (yOffset > 100) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#0A092B" }}>
      <View style={styles.header_container}>
        <HeaderHome isHeaderVisible={isHeaderVisible} />
      </View>
      <ScrollView
        style={styles.body_container}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.term}>
          <Text style={styles.text}>Term</Text>
          <Text style={[styles.text, { color: "#B0B4F3" }]}>See all</Text>
        </View>
       { [...Array(20)].map(()=><TermCard/>)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header_container: {
    backgroundColor: "#313853",
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  body_container: {
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  term: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default HomeScreen;
