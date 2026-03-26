import { View, Text, TextInput, StyleSheet } from 'react-native';
import Botao from '../components/Botao'; // seu componente Botao
import { useState } from 'react';

const ResetSenha = () => {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarLink = () => {
    if (!email) {
      setMensagem('Digite um e-mail válido.');
      return;
    }

    setMensagem('Link enviado para o seu e-mail!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redefinir Senha</Text>

      <TextInput
        placeholder="Digite seu e-mail"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Botao texto="Enviar" onPress={enviarLink} />

      {mensagem ? <Text style={styles.message}>{mensagem}</Text> : null}
    </View>
  );
};

export default ResetSenha;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20,
   backgroundColor: '#ffffff' },
  title: { fontSize: 26,
  marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1,
  padding: 12, 
  marginBottom: 15, 
  borderRadius: 8, backgroundColor: '#ffffff' },
  message: { marginTop: 15, 
  textAlign: 'center', 
  color: 'green', 
  fontWeight: 'bold' }
});