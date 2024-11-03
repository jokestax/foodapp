

import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ProductDetailsScreen() {

  const {id} = useLocalSearchParams();
  return (
    <View>
        <Text>ProductDetailsScreen for id: {id}</Text>
    </View>
  );
}
