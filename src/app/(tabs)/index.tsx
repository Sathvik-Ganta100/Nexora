import { Link } from "expo-router";
import { Text, View } from "react-native";

import { styles } from "../../style/auth.style";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Link href={"/(tabs)/notifications"}>visit notification screen</Link>
    </View>
  );
}
