import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getImageById, getImages} from '../redux/actions';
import {Image} from '../interfaces/Image';

interface UseImages {
  images: Image[];
  image?: Image;
  isLoading: boolean;
}

export const useImages = (imageId: string = ''): UseImages => {
  const dispatch = useDispatch();
  const {images, image, isLoading} = useSelector((state: any) => state.images);

  useEffect(() => {
    imageId ? dispatch(getImageById(imageId)) : dispatch(getImages());
  }, [imageId]);

  return {images, image, isLoading};
};
