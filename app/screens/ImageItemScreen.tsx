import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useImages} from '../hooks';
import {useSelector} from 'react-redux';
import {Loader} from '../components';

export const ImageItemScreen = () => {
  const {imageId} = useSelector((state: any) => state.images);
  const {image, isLoading} = useImages(imageId);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.imageItemScreen}>
      <Image
        style={styles.image}
        source={{
          uri: image?.urls.regular,
        }}
      />

      <Text style={styles.imageDescription}>
        {image?.description || image?.alt_description}
      </Text>

      <View style={styles.test}>
        <Text>{image?.likes} Likes</Text>

        <View style={styles.userWrapper}>
          {image?.user.profile_image?.medium && (
            <Image
              style={styles.userImage}
              source={{
                uri: image?.user.profile_image.medium,
              }}
            />
          )}
          <Text>{image?.user.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageItemScreen: {
    gap: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  imageDescription: {
    padding: 10,
    textAlign: 'center',
  },
  test: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  userWrapper: {
    alignItems: 'center',
    gap: 5,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
