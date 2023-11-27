import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, openModal }) => {
  const handleClick = e => {
    openModal(image);
  };

  return (
    <li onClick={handleClick} className={css.imageGalleryItem}>
      <img
        className={css.imageGalleryItemImage}
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  );
};
