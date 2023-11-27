import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ image, openModal }) => {
  return (
    <ul className={css.image_gallery}>
      {image.map(item => (
        <ImageGalleryItem key={item.id} image={item} openModal={openModal} />
      ))}
    </ul>
  );
};
