import {Image} from '../interfaces/Image';

const SET_IMAGES = 'SET_IMAGES';
const IS_LOADING = 'IS_LOADING';
const SET_IMAGE_ID = 'SET_IMAGE_ID';
const SET_IMAGE = 'SET_IMAGE';

interface ImagesState {
  images: Image[];
  isLoading: boolean;
  imageId: '';
  image: Image;
}

const initialState: ImagesState = {
  images: [],
  isLoading: true,
  imageId: '',
  image: {
    id: '',
    description: '',
    alt_description: '',
    likes: 0,
    urls: {
      raw: '',
      full: '',
      regular: '',
      small: '',
      thumb: '',
    },
    user: {
      id: '',
      name: '',
      profile_image: {
        medium: '',
      },
    },
  },
};

export const imagesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_IMAGES: {
      return {...state, images: action.payload};
    }
    case IS_LOADING: {
      return {...state, isLoading: action.payload};
    }
    case SET_IMAGE_ID: {
      return {...state, imageId: action.payload};
    }
    case SET_IMAGE: {
      return {...state, image: action.payload};
    }
    default:
      return state;
  }
};

export const setImagesAction = (payload: any) => ({type: SET_IMAGES, payload});
export const isLoadingAction = (payload: any) => ({type: IS_LOADING, payload});
export const setImageIdAction = (payload: any) => ({
  type: SET_IMAGE_ID,
  payload,
});
export const setImageAction = (payload: any) => ({type: SET_IMAGE, payload});
