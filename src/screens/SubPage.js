import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
  Dimensions,
  Linking,
} from 'react-native';
import STYLES from '../utils/styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Button} from '../components';
import ImagePicker from 'react-native-image-crop-picker';
import RNLocation from 'react-native-location';

const {width} = Dimensions.get('screen');
export default class SubPage extends Component {
  state = {
    images: [],
  };

  pickImage = () => {
    ImagePicker.openPicker({
      multiple: true,
    })
      .then(images => {
        console.log(images);
        this.setState({
          images,
        });
      })
      .catch(error => {
        console.log(error.code);
        if (error.code !== 'E_PICKER_CANCELLED') Linking.openSettings();
      });

    // // launchImageLibrary(
    // //   {
    // //     selectionLimit: 5,
    // //     saveToPhotos: true,
    // //   },
    // //   data => {
    // //     console.log('data => ', data);
    // //     if (data.didCancel) alert('User Cancelled');
    // //     else {
    // //       this.setState({
    // //         images: data.assets || [],
    // //       });
    // //     }
    // //   },
    // );
  };

  getLocation = () => {
    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    })
      .then(granted => {
        console.log('granted => ', granted);

        if (granted)
          RNLocation.getLatestLocation().then(location => {
            console.log('location => ', location);
            this.setState({
              location,
            });
          });
      })
      .catch(error => {
        console.log('error => ', error);
      });
  };

  render() {
    const {images, location} = this.state;
    return (
      <ScrollView style={[STYLES.main, styles.main]}>
        <Button title="Pick Image" onPress={this.pickImage} />
        <View style={styles.imageUpper}>
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                style={styles.image}
                source={{uri: image.sourceURL}}
              />
            );
          })}
        </View>
        <Button title="Get My Location" onPress={this.getLocation} />
        {location && <Text>{JSON.stringify(location)}</Text>}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    alignContent: 'center',
    margin: 20,
  },
  image: {
    height: (width - 60) / 2,
    width: (width - 60) / 2,
    margin: 5,
  },
  imageUpper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
