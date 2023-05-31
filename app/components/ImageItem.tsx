import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

interface ImageItemProps {
  srcSmall: string;
  description?: string;
  author: string;
}

export const ImageItem: React.FC<ImageItemProps> = ({
  srcSmall,
  description,
  author,
}): JSX.Element => {
  return (
    <View style={styles.imageItem}>
      <Image
        style={styles.image}
        source={{
          uri: srcSmall,
        }}
      />
      <Text style={styles.description}>{description}</Text>
      <Text>Author: {author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageItem: {
    alignItems: 'center',
    gap: 10,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  image: {
    width: '100%',
    height: 300,
  },
  description: {
    textAlign: 'center',
  },
});
