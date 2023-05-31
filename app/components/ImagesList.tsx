import React from 'react';
import {
  FlatList,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ListRenderItem,
} from 'react-native';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import {getImages} from '../redux/actions';
import {setImageIdAction} from '../redux/reducers';
import {ImageItem} from './ImageItem';
import {useImages} from '../hooks';
import {Loader} from './Loader';
import {Image} from '../interfaces/Image';

export const ImagesList: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const {images, isLoading} = useImages();

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const renderItem: ListRenderItem<Image> = ({item}): JSX.Element => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(setImageIdAction(item.id));
          navigation.navigate('Image');
        }}>
        <ImageItem
          srcSmall={item.urls.small}
          description={item.description || item.alt_description}
          author={item.user.name}
        />
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!images.length) {
    return (
      <View style={styles.imagesList}>
        <Text>No images yet</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => dispatch(getImages())}
          />
        }
        data={images}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagesList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
