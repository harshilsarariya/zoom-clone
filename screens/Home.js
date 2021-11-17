import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import ContactsMenu from "../components/ContactsMenu";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";
import Searchbar from "../components/Searchbar";

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        <Header />
        <Searchbar />
        <MenuButtons />
        <ContactsMenu />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#1c1c1c",
    padding: 15,
  },
});
