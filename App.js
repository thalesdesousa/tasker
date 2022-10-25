import { View } from 'react-native';
import { Task } from './src/view/Task';


export default function App() {
  const TASKS = [
    {id: 1, description: "Ler a biblia", complete: false},
    {id: 2, description: "Estudar", complete: false},
    {id: 3, description: "Fazer algo na casa", complete: false},
    {id: 4, description: "Fazer algo pelo Jardim Doce Vida", complete: false},
    {id: 5, description: "Fazer algo diferênte", complete: false},
  ]

  return (
    <View className={styles.container}>
      { TASKS.map((t) => ( <Task key={t.id} description={t.description}/>)) }
    </View>
  );
}
