import { View, Text, StyleSheet } from "react-native";

export default function ShowInfo({ route, navigation }) {
  const { acc } = route.params;

  return (
    <View style={styles.container}>
        <View style={styles.dataContainer}>
            <Text style={styles.Text}>{acc.firstName} {acc.lastName}({acc.age})</Text>
            <Text style={styles.Text}>{acc.email}</Text>
            <Text style={styles.Text}>{acc.gender}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E9F1FA",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    fontSize: 20,
  },
  dataContainer: {
    backgroundColor: "#00ABE4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    width: "90%",
    height: "30%",
  }
});
