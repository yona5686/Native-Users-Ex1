import { View, StyleSheet, Text, ScrollView, Button } from "react-native";
import TextAvatar from "react-native-text-avatar";
import { useAccContext } from "../AccContext";

export default function AllAcc({ navigation }) {
  function colorHash(inputString) {
    var sum = 0;

    for (var i in inputString) {
      sum += inputString.charCodeAt(i);
    }

    r = ~~(
      ("0." +
        Math.sin(sum + 1)
          .toString()
          .substr(6)) *
      256
    );
    g = ~~(
      ("0." +
        Math.sin(sum + 2)
          .toString()
          .substr(6)) *
      256
    );
    b = ~~(
      ("0." +
        Math.sin(sum + 3)
          .toString()
          .substr(6)) *
      256
    );

    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";

    var hex = "#";

    hex += ("00" + r.toString(16)).substr(-2, 2).toUpperCase();
    hex += ("00" + g.toString(18)).substr(-2, 2).toUpperCase();
    hex += ("00" + b.toString(20)).substr(-2, 2).toUpperCase();

    return {
      r: r,
      g: g,
      b: b,
      rgb: rgb,
      hex: hex,
    };
  }

  const { accounts } = useAccContext();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {accounts.map((acc, index) => (
        <View style={styles.accContainer} key={index}>
          <Text
            style={styles.textCon}
          >{`${acc.firstName} ${acc.lastName}`}</Text>

          <TextAvatar
            backgroundColor={colorHash(acc.firstName + acc.lastName).hex}
            textColor={"#0000ff"}
            size={60}
            type={"circle"}
          >{`${acc.firstName} ${acc.lastName}`}</TextAvatar>

          <View style={styles.btnContainer}><Button
            title="More info"
            onPress={() =>
              navigation.navigate("More information", { acc })
            }
          ></Button></View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#E9F1FA",
    alignItems: "center",
    justifyContent: "center",
  },
  accContainer: {
    backgroundColor: "#00ABE4",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 25,
    width: "90%",
    height: 70,
  },
  textCon: {
    fontSize: 20,
    margin: 10,
  },
  btnContainer: {
    marginLeft: 10
  }

});
