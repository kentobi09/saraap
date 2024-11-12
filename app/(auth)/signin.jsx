import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import googleLogo from "@/assets/images/google.png";
import facebookLogo from "@/assets/images/facebook.png";
import { useFonts } from "expo-font";

const SignInScreen = () => {
  const [customFonts] = useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Light": require("@/assets/fonts/Poppins-Light.ttf"),
    "Poppins-Thin": require("@/assets/fonts/Poppins-Thin.ttf"),
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsFocused, setEmailToFocused] = useState(false);
  const [passwordIsFocused, setPasswordToFocused] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaContainer}>
        {/*  Sign in Title and description */}
        <View style={styles.upperContainer}>
          <Text style={styles.signInStyle}>Sign In</Text>
          <Text style={styles.signInDesc}>Find your best ever meal</Text>
        </View>
        {/* Sign in forms and buttons */}
        <View style={styles.FormContainerStyle}>
          <Text style={styles.formTitleStyle}>Email Address</Text>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Type your email address"
            placeholderTextColor={"#9ca5b5"}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            style={[
              styles.formInputStyle,
              emailIsFocused && styles.formIsActive,
            ]}
            onFocus={() => setEmailToFocused(true)}
            onBlur={() => setEmailToFocused(false)}
          />

          <Text style={styles.formTitleStyle}>Password</Text>
          <TextInput
            onChangeText={setPassword}
            value={password}
            placeholder="Type your password"
            placeholderTextColor={"#9ca5b5"}
            autoCapitalize="none"
            autoComplete="current-password"
            secureTextEntry={true}
            style={[
              styles.formInputStyle,
              passwordIsFocused && styles.formIsActive,
            ]}
            onFocus={() => setPasswordToFocused(true)}
            onBlur={() => setPasswordToFocused(false)}
          />
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.signInButtonStyle}
              onPress={() => console.log("Sign in Button Pressed!")}
            >
              <Text style={styles.signInTextStyle}>Sign In</Text>
            </Pressable>
            <Link href="/signin" style={styles.forgotPasswordStyle}>
              Forgot Password
            </Link>
          </View>

          {/* Alternative Sign in Option */}
          <View style={styles.alternativeSignInStyle}>
            <Text style={styles.continueWithStyle}>- OR Continue with -</Text>
            <View style={styles.alternativeAccountStyle}>
              <TouchableOpacity style={styles.logoStyle}>
                <Image
                  source={googleLogo}
                  style={{ width: 35, height: 35 }}
                ></Image>
                <Text style={styles.altAccountText}> Google </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.logoStyle}>
                <Image
                  source={facebookLogo}
                  style={{ width: 35, height: 35 }}
                ></Image>
                <Text style={styles.altAccountText}>Facebook</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.createAccountStyle}>
            <Text style={styles.createAccountTextStyle}>
              Create an Account{" "}
              <Link href={"/signup"} style={styles.createAccountLinkStyle}>
                Sign Up
              </Link>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    padding: 25,
    flex: 1,
    justifyContent: "flex-start",
  },
  upperContainer: {
    gap: 2,
    marginVertical: 15,
  },
  signInStyle: {
    fontFamily: "Poppins-Regular",
    fontSize: 30,
  },
  signInDesc: {
    fontFamily: "Poppins-Light",
    color: "gray",
    fontSize: 15,
  },
  FormContainerStyle: {
    marginTop: 70,
  },
  formTitleStyle: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
  },
  formInputStyle: {
    marginVertical: 10,
    height: 45,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 2,
    padding: 10,
  },
  formIsActive: {
    borderWidth: 0,
  },
  buttonContainer: {
    marginVertical: 10,
    flex: 1,
    justifyContent: "center",
  },
  signInButtonStyle: {
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#020452",
  },
  signInTextStyle: {
    color: "white",
    fontSize: 17,
    fontFamily: "Poppins-Regular",
  },
  forgotPasswordStyle: {
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "Poppins-Regular",
    textDecorationLine: "underline",
    color: "red",
  },
  alternativeSignInStyle: {
    alignItems: "center",
  },
  alternativeAccountStyle: {
    flexDirection: "row",
    gap: 15,
    marginVertical: 25,
  },
  logoStyle: {
    flex: "auto",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 35,
    borderCurve: "continuous",
    backgroundColor: "rgba(235, 0, 41, 0.1)",
  },
  altAccountText: {
    fontFamily: "Poppins-Regular",
    color: "#575757",
  },
  continueWithStyle: {
    fontFamily: "Poppins-Light",
    color: "#6b6b6b",
  },
  createAccountStyle: {
    alignItems: "center",
  },
  createAccountTextStyle: {
    fontFamily: "Poppins-Light",
    color: "#575757",
    fontSize: 16,
  },
  createAccountLinkStyle: {
    marginLeft: 5,
    fontFamily: "Poppins-Medium",
    color: "#130E40",
  },
});

export default SignInScreen;
