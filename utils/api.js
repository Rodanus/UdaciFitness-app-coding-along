import { AsyncStorage } from "react-native";
import { CALENDAR_STORAGE_KEY } from "./_calendar";

export function submitEntry({ key, entry }) {
  return AsyncStorage.mergeItem(
    CALENDAR_STORAGE_KEY,
    JSON.stringify({
      [key]: entry
    })
  );
}

export function removeEntry(key) {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then(result => {
    const data = JSON.stringify(result);
    delete data[key];
    AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
  });
}
