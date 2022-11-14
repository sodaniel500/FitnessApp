import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, ScrollView, Text, View, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import OnboardItem from '../../Component/OnboardItem';

export default function OnBoardScreen({ navigation }) {

  return (
      <ImageBackground
        source={require('../../assets/hd.jpg')}
        resizeMode= 'cover'
         style={styles.image}>
          <OnboardItem />
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
  },
});
