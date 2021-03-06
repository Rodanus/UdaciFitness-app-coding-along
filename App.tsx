import React from "react";
import { Text, View } from "react-native";
import AddEntry from "./components/AddEntry.js";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

const store = createStore(reducer);
export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <AddEntry />
      </View>
    </Provider>
  );
}
