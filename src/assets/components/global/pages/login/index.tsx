import React, { useState } from "react";
import { Text, View, Image, Alert, TouchableOpacity, Modal, TextInput } from "react-native";
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
  const [showRecoveryModal, setShowRecoveryModal] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [recoveryPhone, setRecoveryPhone] = useState('');
  const [recoveryType, setRecoveryType] = useState<'email' | 'phone'>('email');
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPhone, setSignUpPhone] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
  const [signUpShowPassword, setSignUpShowPassword] = useState(true);
  const [signUpShowConfirmPassword, setSignUpShowConfirmPassword] = useState(true);

  async function handleRecovery() {
    if (recoveryType === 'email' && !recoveryEmail) {
      return Alert.alert('Atenção', 'Digite seu email para recuperar a senha!');
    }
    
    if (recoveryType === 'phone' && !recoveryPhone) {
      return Alert.alert('Atenção', 'Digite seu telefone para recuperar a senha!');
    }
    
    try {
      const method = recoveryType === 'email' ? recoveryEmail : recoveryPhone;
      Alert.alert('Sucesso', `Email/SMS de recuperação enviado para ${method}!`);
      setRecoveryEmail('');
      setRecoveryPhone('');
      setShowRecoveryModal(false);
    } catch (error) {
      Alert.alert('Erro', 'Erro ao enviar recuperação');
    }
  }

  async function handleSignUp() {
    if (!signUpEmail || !signUpPhone || !signUpPassword || !signUpConfirmPassword) {
      return Alert.alert('Atenção', 'Preencha todos os campos!');
    }

    if (signUpPassword !== signUpConfirmPassword) {
      return Alert.alert('Atenção', 'As senhas não conferem!');
    }

    if (signUpPassword.length < 6) {
      return Alert.alert('Atenção', 'A senha deve ter no mínimo 6 caracteres!');
    }

    try {
      Alert.alert('Sucesso', 'Conta criada com sucesso! Faça login agora.');
      setSignUpEmail('');
      setSignUpPhone('');
      setSignUpPassword('');
      setSignUpConfirmPassword('');
      setShowSignUpModal(false);
    } catch (error) {
      Alert.alert('Erro', 'Erro ao criar conta');
    }
  }

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
        
        <TouchableOpacity onPress={() => setShowRecoveryModal(true)}>
          <Text style={style.textRecovery}>Recuperar Senha</Text>
        </TouchableOpacity>
        
        <Text style={style.textBottom}>
          Não tem conta? <TouchableOpacity onPress={() => setShowSignUpModal(true)}><Text style={style.textBottomCreate}>Crie agora</Text></TouchableOpacity>
        </Text>
      </View>

      <Modal
        visible={showRecoveryModal}
        transparent={true}
        animationType="slide"
      >
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <View style={style.modalHeader}>
              <Text style={style.modalTitle}>Recuperar Senha</Text>
              <TouchableOpacity onPress={() => setShowRecoveryModal(false)}>
                <MaterialIcons name="close" size={28} color="#333" />
              </TouchableOpacity>
            </View>

            <View style={style.recoveryTypeContainer}>
              <TouchableOpacity
                style={[style.recoveryTypeButton, recoveryType === 'email' && style.recoveryTypeActive]}
                onPress={() => setRecoveryType('email')}
              >
                <Text style={[style.recoveryTypeText, recoveryType === 'email' && style.recoveryTypeTextActive]}>
                  Email
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[style.recoveryTypeButton, recoveryType === 'phone' && style.recoveryTypeActive]}
                onPress={() => setRecoveryType('phone')}
              >
                <Text style={[style.recoveryTypeText, recoveryType === 'phone' && style.recoveryTypeTextActive]}>
                  Telefone
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={style.modalSubtitle}>
              {recoveryType === 'email' 
                ? 'Digite seu email para receber instruções de recuperação.'
                : 'Digite seu telefone para receber SMS de recuperação.'}
            </Text>

            {recoveryType === 'email' ? (
              <TextInput
                style={style.modalInput}
                placeholder="Digite seu email"
                value={recoveryEmail}
                onChangeText={setRecoveryEmail}
                keyboardType="email-address"
                placeholderTextColor="#999"
              />
            ) : (
              <TextInput
                style={style.modalInput}
                placeholder="Digite seu telefone (11 99999-9999)"
                value={recoveryPhone}
                onChangeText={setRecoveryPhone}
                keyboardType="phone-pad"
                placeholderTextColor="#999"
              />
            )}

            <Button 
              text="ENVIAR" 
              onPress={handleRecovery}
              style={style.modalButton}
            />

            <TouchableOpacity onPress={() => setShowRecoveryModal(false)}>
              <Text style={style.modalCancel}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={showSignUpModal}
        transparent={true}
        animationType="slide"
      >
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <View style={style.modalHeader}>
              <Text style={style.modalTitle}>Criar Conta</Text>
              <TouchableOpacity onPress={() => setShowSignUpModal(false)}>
                <MaterialIcons name="close" size={28} color="#333" />
              </TouchableOpacity>
            </View>

            <Text style={style.modalSubtitle}>
              Preencha os dados abaixo para criar sua conta.
            </Text>

            <TextInput
              style={style.modalInput}
              placeholder="Email"
              value={signUpEmail}
              onChangeText={setSignUpEmail}
              keyboardType="email-address"
              placeholderTextColor="#999"
            />

            <TextInput
              style={style.modalInput}
              placeholder="Telefone (11 99999-9999)"
              value={signUpPhone}
              onChangeText={setSignUpPhone}
              keyboardType="phone-pad"
              placeholderTextColor="#999"
            />

            <View style={style.passwordInputContainer}>
              <TextInput
                style={style.modalInput}
                placeholder="Senha"
                value={signUpPassword}
                onChangeText={setSignUpPassword}
                secureTextEntry={signUpShowPassword}
                placeholderTextColor="#999"
              />
              <TouchableOpacity 
                style={style.passwordToggle}
                onPress={() => setSignUpShowPassword(!signUpShowPassword)}
              >
                <Octicons 
                  name={signUpShowPassword ? "eye-closed" : "eye"} 
                  size={20} 
                  color="#666" 
                />
              </TouchableOpacity>
            </View>

            <View style={style.passwordInputContainer}>
              <TextInput
                style={style.modalInput}
                placeholder="Confirmar Senha"
                value={signUpConfirmPassword}
                onChangeText={setSignUpConfirmPassword}
                secureTextEntry={signUpShowConfirmPassword}
                placeholderTextColor="#999"
              />
              <TouchableOpacity 
                style={style.passwordToggle}
                onPress={() => setSignUpShowConfirmPassword(!signUpShowConfirmPassword)}
              >
                <Octicons 
                  name={signUpShowConfirmPassword ? "eye-closed" : "eye"} 
                  size={20} 
                  color="#666" 
                />
              </TouchableOpacity>
            </View>

            <Button 
              text="CRIAR CONTA" 
              onPress={handleSignUp}
              style={style.modalButton}
            />

            <TouchableOpacity onPress={() => setShowSignUpModal(false)}>
              <Text style={style.modalCancel}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}