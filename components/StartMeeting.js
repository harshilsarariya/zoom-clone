import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const StartMeeting = ({ name, setName, roomId, setRoomId, joinRoom }) => {
  return (
    <View>
      <View style={styles.startMeetingContainer}>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Enter Name"
            placeholderTextColor="#767476"
          />
        </View>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={roomId}
            onChangeText={(text) => setRoomId(text)}
            placeholder="Enter room id"
            placeholderTextColor="#767476"
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => joinRoom()}
            style={styles.startMeetingButton}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Start Meeting
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StartMeeting;

const styles = StyleSheet.create({
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
  },
  textInput: {
    color: "white",
    fontSize: 18,
  },
  startMeetingButton: {
    width: 300,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0470dc",
    height: 50,
    borderRadius: 15,
  },
});
