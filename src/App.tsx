import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/One.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type ImageBoxProps = PropsWithChildren<{
  image: ImageSourcePropType;
}>;

const ImageBox = ({image}: ImageBoxProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.imageContainer} source={image} />
    </View>
  );
};

const App = (): JSX.Element => {
  const [diceImage, setDiceImage] = useState(DiceOne);

  const onRollTheDice = () => {
    const randomNumber = Math.floor(Math.random() * 7);
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.headerText}>Roll The Dice</Text>
        <ImageBox image={diceImage} />
        <TouchableOpacity style={styles.rollDiceButton} onPress={onRollTheDice}>
          <Text style={styles.rollDiceButtonText}>Roll Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  imageContainer: {
    height: 200,
    width: 200,
    marginBottom: 40,
  },
  rollDiceButton: {
    alignSelf: 'center',
    backgroundColor: 'lightblue',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  rollDiceButtonText: {
    fontSize: 20,
  },
});
