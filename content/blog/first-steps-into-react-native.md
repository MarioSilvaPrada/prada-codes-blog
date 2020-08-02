---
path: react native tutorial
date: 2020-07-31T21:47:56.002Z
title: First steps into React Native
description: Write your first mobile app with React Native
---
In this tutorial, we are going through the basics so you can start developing your own mobile apps and also understand what makes React Native such a powerful framework.

### Prerequisites 
In order to make the most out of this tutorial, you must be knowledgeable about React and JavaScript. Even though the code that you'll see here is nothing too complex, it's important to have some basic understandings with Javascript language.

Regarding hardware, you can use any laptop/PC that runs rather IOS, Windows or Linux, but be aware that if you want to see your mobile app coming to life in your iPhone (physical or virtual) you really need to run your code on a Mac.

Choose your favorite IDE (mine is [VSCode](https://code.visualstudio.com/)) and you are ready to go!

### Why React Native?
Well, I think that's a fair question. What makes React Native such a famous framework for developing mobile applications? Why some developers/companies use React Native instead of native languages like [Swift](https://developer.apple.com/swift/) or [Java](https://docs.oracle.com/javase/7/docs/technotes/guides/language/)?

Let's see some benefits:
1. #### Is Cross-Platform

With React Native you can 
2. #### Reusable code

If you worked with React before, all the expertise that you gained can be applied in React Native as well.

> Learn once, write anywhere.

React and React Native share the same logic, where you build your app by creating smaller components and use them the way you want it. The only difference (is a big difference I know) is that while in React you are running your code in the browser, in React Native you will run it in a completely different environment: Mobile. 

Because of this environment difference, you are not able to manipulate the DOM because (guess what) there is no DOM! So instead of writing:

```jsx
import React from 'react';

const Greetings = () => {
  return(
   <div>
      <p>Hello there! 👋</p>
   </div>
  )
}

export default Greetings
```

You must use tags that our mobile environment can understand:

```jsx
import React from 'react';
import { View, Text } from 'react-native';

const Greetings = () => {
  return(
   <View>
      <Text>Hello there! 👋</Text>
   </View>
  )
}

export default Greetings
```

In the example above `<View>` creates a new division on your screen while `<Text>` is used when you want to render text [^1].

[^1]: In React Native there is no header tags like h1, h2, h3... so what you can do is to render your content in a Text tag and styling it accordingly.

If you are curious about all components that you can use in React Native, [take a look](https://reactnative.dev/docs/components-and-apis).

 
3. #### Big community


### Environment Setup

### Folder structure

### Styling

### Navigation

### Animation


