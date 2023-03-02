import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Home } from './src/components/screens/home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7dd3fc',

  },
});
