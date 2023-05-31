import axios from 'axios/index';
import {Image} from '../interfaces/Image';
import {Alert} from 'react-native';
import {isLoadingAction, setImageAction, setImagesAction} from './reducers';

export const getImages = (): any => {
  const url =
    'https://api.unsplash.com/photos/?client_id=qOEn7VclxXze3OHSZQTPNZdI5r5GkGKt7aJ4ZBt6Waw';

  return (dispatch: any) => {
    dispatch(isLoadingAction(true));
    axios
      .get<Image[]>(url)
      .then(response => {
        dispatch(setImagesAction(response.data));
      })
      .catch(error => {
        Alert.alert(error);
      })
      .finally(() => {
        dispatch(isLoadingAction(false));
      });
  };
};

export const getImageById = (imageId: string): any => {
  const url = `https://api.unsplash.com/photos/${imageId}/?client_id=qOEn7VclxXze3OHSZQTPNZdI5r5GkGKt7aJ4ZBt6Waw`;

  return (dispatch: any) => {
    axios
      .get<Image>(url)
      .then(response => {
        dispatch(setImageAction(response.data));
      })
      .catch(error => {
        Alert.alert(error);
      });
  };
};
