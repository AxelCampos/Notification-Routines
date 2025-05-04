import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@react-navigation/native';

export default function ProfileScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  return (
    <View>
      <Text style={{ color: colors.text }}>Perfil del Usuario</Text>
      <Button title="Cerrar Sesión" onPress={() => router.push('/')} />
    </View>
  );
}
