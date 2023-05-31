export interface Image {
  id: string;
  description?: string;
  alt_description?: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    id: string;
    name: string;
    profile_image: {
      medium: string;
    };
  };
  likes: number;
}
