import React, { useEffect } from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import HeaderHome from "../component/HeaderHome"; 

import { useState, useRef } from "react";
import TermCard from "../component/TermCard";
import FolderCard from "../component/FolderCard";
import TermScreen from "./TermScreen";
const { width: screenWidth } = Dimensions.get("window");
const HomeScreen =  ({ navigation }) => {
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const handleScroll = (event) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    if (yOffset > 100) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
  };
  // console.log(currentPage)
  // useEffect(()=>{
  //   const xOffset = currentPage * (screenWidth * 0.4);
  //     scrollViewRef.current.scrollTo({ x: xOffset, animated: true });
  // },[currentPage])
  // const handleScrollNext = (event) => {
  //   const xOffset = event.nativeEvent.contentOffset.x;
  //   const newPage = Math.round(xOffset / screenWidth);

  //   // if (newPage !== currentPage) {
  //   //   setCurrentPage(newPage);
  //   // }
  //   scrollViewRef.current.scrollTo({ x: 2 * (screenWidth), animated: true });
  // }
  // const scrollViewRef = useRef(null);
  const flatListRef = useRef(null);
  const handleScrollNext = ()=>{
setCurrentPage((currentPage)=> currentPage + 1)
  }
  const handleTermCardPress = () => {
    // Sử dụng navigation để điều hướng đến TermScreen
    navigation.navigate('Term');
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
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.term_title}>
          <Text style={styles.text}>Term</Text>
          <Text style={[styles.text, { color: "#B0B4F3" }]}>See all</Text>
        </View>
        <FlatList
          data={[...Array(20)]}
          renderItem={({ item }) => <TermCard onPress={handleTermCardPress} />}
          pagingEnabled={true}
          onScroll={handleScrollNext}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true} 
        />
        <View style={[styles.term_title, { marginTop: 30 }]}>
          <Text style={styles.text}>Folder</Text>
          <Text style={[styles.text, { color: "#B0B4F3" }]}>See all</Text>
        </View>
        <ScrollView
          horizontal={true}
          style={styles.term_cards}
          showsHorizontalScrollIndicator={false}
        >
          {[...Array(20)].map(() => (
            <FolderCard />
          ))}
        </ScrollView>
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
  body_container: {},
  text: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800",
  },
  term_title: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
  },
  term_cards: {
    flexDirection: "row",
  },
});

export default HomeScreen;
