import { View, Text, Button } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { logoutUser } from '@/firebase/auth';

export default function ProfileScreen() {
  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <View>
      <Text>Perfil del Usuario</Text>
      <Button title="Cerrar Sesión" onPress={() => handleLogout()} />
    </View>
  );
}
