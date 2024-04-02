import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import { useAccContext } from "../AccContext";

export default function CreateAcc() {
  const [account, setAccount] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    gender: "",
  });

  function randomValues() {
    setAccount({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: String(Math.floor(Math.random() * 120)),
      email: faker.internet.email(),
      gender: faker.person.sexType(),
    });
  }

  function saveAccount() {
    if (
      account.firstName == "" ||
      account.lastName == "" ||
      account.age == "" ||
      account.email == "" ||
      account.gender == "" ||
      account.firstName == null ||
      account.lastName == null ||
      account.age == null ||
      account.email == null ||
      account.gender == null
    ) {
      alert("Must fill all of the following fields");
    } else {
      setAccounts((prevAccounts) => [...prevAccounts, account]);
      alert("Account added");
    }
  }

  const { setAccounts } = useAccContext();

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.Text}>First name: </Text>
        <TextInput
          style={styles.TextInput}
          value={account.firstName}
          onChangeText={(text) => setAccount({ ...account, firstName: text })}
        ></TextInput>
        <Text style={styles.Text}>Last name: </Text>
        <TextInput
          style={styles.TextInput}
          value={account.lastName}
          onChangeText={(text) => setAccount({ ...account, lastName: text })}
        ></TextInput>
        <Text style={styles.Text}>Age: </Text>
        <TextInput
          style={styles.TextInput}
          value={account.age}
          onChangeText={(text) => setAccount({ ...account, age: text })}
        ></TextInput>
        <Text style={styles.Text}>Email: </Text>
        <TextInput
          style={styles.TextInput}
          value={account.email}
          onChangeText={(text) => setAccount({ ...account, email: text })}
        ></TextInput>
        <Text style={styles.Text}>Gender: </Text>
        <TextInput
          style={styles.TextInput}
          value={account.gender}
          onChangeText={(text) => setAccount({ ...account, gender: text })}
        ></TextInput>

        <View style={styles.ButtonContainer}>
          <Button title="Random Values" onPress={() => randomValues()}></Button>
        </View>

        <View style={styles.ButtonContainer}>
          <Button title="Add Account" onPress={() => saveAccount()}></Button>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#E9F1FA",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    fontSize: 20,
  },
  TextInput: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: "#FFFFFF",
    width: 200,
  },
  ButtonContainer: {
    marginTop: 20,
  },
});
