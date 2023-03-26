# About FullyPacks 🐘🎁

### one of a [_curated collection of Github templates_](https://github.com/orgs/acmcsufoss/repositories?q=fullypack_&type=all&sort=stargazers) designed to kickstart your project and help you get up and running in no time!

# About FullyPack-React-Native ⚛️

### This is a simple mobile project to help you create your first mobile application with React Native (Expo), and the project is called **FullyFAQs** - A mobile app that displays all FAQs from [Fullyhacks website](https://fullyhacks.acmcsuf.com/)
 
# Screenshots 📸

<img src="https://user-images.githubusercontent.com/58461444/227767873-47ad166b-a29b-4ecf-9e1e-7669efcabd9f.png" width=240/>
<img src="https://user-images.githubusercontent.com/58461444/227767878-cbe50398-e629-42d2-b50b-bc6a368c0b73.png" width=240/>

# Project Goals 🥅
- Set up React Native
- Run it on your mobile phone using Expo App
- Learn about React Native basics: ```<View/>```, ```<Text/>```, StyleSheet,...
- Screen Navigation with ```useRouter()```
- Calling API using Axios to get data from https://fullyhacks.acmcsuf.com/api/faqs
- Learn about ```useState()```, ```useEffect()``` hooks
- Show it to your mom

# How to use 🚀

1. Use this template by clicking "Use this template" button above or [click here](https://github.com/acmcsufoss/fullypack_react_native/generate)
2. In your terminal, type ```npm install``` to install packages (You'll have to install [Node.js](https://nodejs.org/en/download) in order to use this
command)
3. In your terminal, type ```npm start``` to run the project, it'll display something like this:

<img width="480" alt="Screen Shot 2023-03-26 at 2 54 28 AM" src="https://user-images.githubusercontent.com/58461444/227768160-6cadbc61-5d0a-4905-8733-bdb231d94ff5.png">

- If you scan the QR Code (recommended), you'll have to download the Expo app on your phone to view your application (search it in App Store, Google Play,...)
- If you press "w", it'll open a web browser
- If you press "a" or "i", it'll open a built-in simulator that you already have in your desktop (Xcode IOS simulator, Android Studio,...)
4. Make any changes to the code, and you'll see the change right away on your phone if you use the Expo app
5. Have fun with it

## React Native? Expo? 🤔 

React Native is a popular framework for building mobile applications that allows developers to use the same codebase for both iOS and Android apps. It uses JavaScript and React, a popular web framework, to create mobile applications that can access device-specific APIs and run natively on mobile devices.

Here are some key concepts to keep in mind when working with React Native:

    Components: React Native uses a component-based architecture, which means that you build your application out of reusable building blocks called components. Components can be anything from simple buttons to complex layouts.

    JSX: React Native uses a syntax called JSX (JavaScript XML) to define components. JSX allows you to write HTML-like markup inside your JavaScript code, making it easier to understand and work with.

    Styles: React Native uses a style system similar to CSS to define the look and feel of your application. Styles are defined using JavaScript objects, which makes it easy to modify them dynamically.

    React Native APIs: React Native provides a set of APIs that allow you to access device-specific features such as the camera, accelerometer, and geolocation. You can use these APIs to create a rich, interactive user experience in your app.

    Cross-platform development: One of the biggest advantages of React Native is that it allows you to write code once and use it on both iOS and Android devices. This can save you a lot of time and effort compared to building separate apps for each platform.

Overall, React Native is a powerful tool for building mobile applications, especially if you're already familiar with React and JavaScript. With React Native, you can create high-quality, cross-platform apps that provide a great user experience on both iOS and Android devices.

Expo is a set of tools and services built on top of React Native that makes it easier to develop, build, and deploy mobile applications. It provides a variety of pre-built components, APIs, and development tools that make it faster and easier to create React Native applications, especially for beginners who have little experience with mobile app development.

## Requirements 🥹
You only know HTML,CSS? THAT'S FINEEE, LET ME SHOW YOU HOW EASY REACT NATIVE IS

In HTML, we have
```html
<div style="background-color:blue; text-align:center;">
 <p> This is a text </p>
</div>
```
In React Native, we have
```js
import { View, Text } from "react-native";
<View style={{
        textAlign:"center",
        backgroundColor: "blue"
      }}>
 <Text> This is a text </Text>
</View>
```

And if you know a bit of React, it'll be even better since React Native is just like React (useState, useEffect,...)

## About this project ℹ️
For this project, I used [Expo Router](https://expo.github.io/router/docs/) to make routing between screens easier, ***HOW IS IT EASIER YOU MAY ASK?***
In Expo Router, each file in the ```/app``` directory is a screen, for example:
- Home screen will be ```/app/home.js```
- FAQ screen will be ```/app/faq.js```

Moreover, Expo Router API provides many cool things such as the ```useRouter()``` hook that allow you to go to another screen by simply do:
```js
import { useRouter } from "expo-router";
const router = useRouter();
const buttonPressed = () => {
 router.push("nextscreen")
}
```
You can read more about it here: https://expo.github.io/router/docs/


## About this project structures ℹ️
```/app```: App directory contains all of screens in your application

```/assets```: Assets directory stores all of your images, fonts (You can download from [Google Fonts](https://fonts.google.com/)

```/components```: Components directory stores components that made up each screen, for example the Home screen can have <Welcome/>, <Body/> components

```/constants```: Constants directory stores constant variables to help you create style easier (font sizes, font family,...) such that you can use it anywhere, for example:

```js
import { FONT, SIZES } from "../../constants";
const styles = StyleSheet.create({
 welcomeMsg: {
    fontFamily: FONT.light,
    fontSize: SIZES.xxxLarge,
  }
})
```

## 📝 References

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
- [React Native Icons](https://oblador.github.io/react-native-vector-icons/)
