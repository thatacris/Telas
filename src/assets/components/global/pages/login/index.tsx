import React, { useState } from "react";
import { Text, View, Image, Alert, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MaterialIcons, Octicons } from "@expo/vector-icons";

import { style } from "./styles";
const Logo = require('../../../../logo.png');
import { Input } from "../../../Input";
import { Button } from "../../../Button";

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);

      if (!email || !password) {
        return Alert.alert('Atenção', 'Informe os campos obrigatórios!');
      }

      if (email === 'th@gmail.com' && password === '12345') {
        return navigation.reset({ routes: [{ name: 'BottomRoutes' }] });
      }

      Alert.alert('Atenção', 'E-mail ou senha inválida!');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image 
          source={Logo} 
          style={style.logo} 
          resizeMode="contain"
        />
        <Text style={style.text}>Bem vindo de volta!</Text>
      </View>

      <View style={style.boxMid}>
        <Input 
          title="ENDEREÇO E-MAIL"
          value={email}
          onChangeText={setEmail}
          IconRigth={MaterialIcons}
          iconRightName="email"
        />

        <Input 
          title="SENHA"
          value={password}
          onChangeText={setPassword}
          IconRigth={Octicons}
          iconRightName={showPassword ? "eye-closed" : "eye"}
          onIconRigthPress={() => setShowPassword(!showPassword)}
          secureTextEntry={true}
        />
      </View>

      <View style={style.boxBottom}>
        <Button text="ENTRAR" loading={loading} onPress={getLogin} />
        <Text style={style.textBottom}>
          Não tem conta? <TouchableOpacity onPress={() => Alert.alert('Funcionalidade em desenvolvimento')}><Text style={style.textBottomCreate}>Crie agora</Text></TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}