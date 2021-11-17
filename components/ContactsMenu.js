import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contactsMenuButton = [
  {
    type: "starred",
    name: "Starred",
  },
  {
    type: "contact",
    name: "Harshil Sarariya",
    photo: require("../assets/dp.jpg"),
  },
  {
    type: "contact",
    name: "Utsav Sarariya",
    photo: require("../assets/dp.jpg"),
  },
  {
    type: "contact",
    name: "Pratik Sarariya",
    photo: require("../assets/dp.jpg"),
  },
];

const ContactsMenu = () => {
  return (
    <View style={styles.container}>
      {contactsMenuButton.map((contact, index) => (
        <View style={styles.row} key={index}>
          {contact.type == "starred" ? (
            <View style={styles.starredIcon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <Image source={contact.photo} style={styles.image} />
            // <Text style={styles.text}>Starred</Text>
          )}
          <Text style={styles.text}>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default ContactsMenu;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
