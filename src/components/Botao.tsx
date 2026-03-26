import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Botao({ texto, onPress }: any) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#5b4ddc', // cor do botão
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },
  texto: {
    color: '#fff', // cor da palavra "Enviar"
    fontWeight: 'bold'
  }
});