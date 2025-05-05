import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  const goToAddRoutineForm = () => {
    router.push('../routineForm');
  };
  const handlerDeleteItem = (id: string) => {
    Alert.alert(
      '¿Estás seguro?',
      'Esta acción eliminará el elemento permanentemente.',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            console.log('Delete item with id:', id);
            // Aquí llamás a tu lógica real de eliminación
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handlerEditItem = (id: string) => {
    console.log('Edit item with id:', id);
  };
  const userRoutines = [
    { id: '1', title: 'Gimnasio - Lunes 7am' },
    { id: '2', title: 'Estudio - Martes 9am' },
    { id: '3', title: 'Yoga - Miércoles 6pm' },
    { id: '1', title: 'Gimnasio - Lunes 7am' },
    { id: '2', title: 'Estudio - Martes 9am' },
    { id: '3', title: 'Yoga - Miércoles 6pm' },
    { id: '1', title: 'Gimnasio - Lunes 7am' },
    { id: '2', title: 'Estudio - Martes 9am' },
    { id: '3', title: 'Yoga - Miércoles 6pm' },
    { id: '1', title: 'Gimnasio - Lunes 7am' },
    { id: '2', title: 'Estudio - Martes 9am' },
    { id: '3', title: 'Yoga - Miércoles 6pm' },
    { id: '1', title: 'Gimnasio - Lunes 7am' },
    { id: '2', title: 'Estudio - Martes 9am' },
    { id: '3', title: 'Yoga - Miércoles 6pm' },
    { id: '1', title: 'Gimnasio - Lunes 7am' },
    { id: '2', title: 'Estudio - Martes 9am' },
    { id: '3', title: 'Yoga - Miércoles 6pm' },
    { id: '1', title: 'Gimnasio - Lunes 7am' },
    { id: '2', title: 'Estudio - Martes 9am' },
    { id: '3', title: 'Yoga - Miércoles 6pm' },
    { id: '1', title: 'Gimnasio - Lunes 7am' },
    { id: '2', title: 'Estudio - Martes 9am' },
    { id: '3', title: 'Yoga - Miércoles 6pm' },
  ];
  return (
    <View style={styles.container}>
      <Pressable onPress={() => goToAddRoutineForm()}>
        <Ionicons name="add-circle-outline" size={50} color="#007AFF" />
      </Pressable>
      <ScrollView style={{ width: '100%' }}>
        {userRoutines.map((item, index) => (
          <View key={index} style={styles.routineItem}>
            <Text style={styles.routineText}>{item.title}</Text>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            >
              <Pressable onPress={() => handlerEditItem(item.id)}>
                <Ionicons name="pencil-outline" size={24} color="#007AFF" />
              </Pressable>
              <Pressable onPress={() => handlerDeleteItem(item.id)}>
                <Ionicons name="trash-outline" size={24} color="#ff3b30" />
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  userEmail: {
    fontSize: 16,
    marginBottom: 30,
    color: '#666',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ff3b30',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    marginTop: 20,
    color: '#007AFF',
    fontSize: 14,
  },
  routineItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    width: '100%',
    elevation: 2,
  },
  routineText: {
    fontSize: 16,
    color: '#333',
  },
});
