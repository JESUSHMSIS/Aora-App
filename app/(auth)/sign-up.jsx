import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
const SignUp = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {};
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Registrate en Aora
          </Text>

          <FormField
            title="Nombre de Usuario"
            value={form.userName}
            handleChangeText={(e) =>
              setForm({
                ...form,
                userName: e,
              })
            }
            otherStyles="mt-7"
            keyboardType="Username"
            placeholder="Ingresa un nombre de usuario"
          />
          <FormField
            title="Correo"
            value={form.email}
            handleChangeText={(e) =>
              setForm({
                ...form,
                email: e,
              })
            }
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder="Ingresa tu correo"
          />
          <FormField
            title="Contraseña"
            value={form.password}
            handleChangeText={(e) =>
              setForm({
                ...form,
                password: e,
              })
            }
            otherStyles="mt-7"
            placeholder="Ingresa una contraseña"
          />
          <CustomButton
            title="Registrate"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Ya tienes una cuenta??
            </Text>
            <Link
              href="/sign-in"
              className="text-secondary text-lg font-psemibold"
            >
              Inicia Sesion
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
