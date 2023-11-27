import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Audio } from 'react-loader-spinner';
import { Button } from './Button/Button';
import { api } from '../services/api';
import { Modal } from './Modal/Modal';
import { Text } from './Text/Text';
import { useEffect, useState } from 'react';
export const App = () => {
  const [page, setPage] = useState('');
  const [value, setValue] = useState('');
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    // if (!value) return alert('Enter something!');
    // setError(null);

    api(value)
      .then(data => {
        console.log(data);
        if (data.hits.length === 0) {
          setIsEmpty(true);
        }
        setImage(prevState => [...prevState, ...data.hits]);

        const loadEnd = totalHits => {
          const perPage = 12;
          setIsVisible(page < Math.ceil(totalHits / perPage));
          console.log(page);
        };
        loadEnd(data.totalHits);
      })

      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [value, page]);

  useEffect(page => {});
  const handleSearchFormSubmit = value => {
    if (!value) {
      alert('Enter something!');
      return;
    }
    setValue(value);
    setPage(1);
    setImage([]);
    setIsEmpty(false);
  };
  const openModal = image => {
    setIsShowModal(true);
    setSelectedImage(image);
  };
  const closeModal = () => {
    setIsShowModal(false);
    setSelectedImage(null);
  };

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div
      style={{
        // height: '100vh',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Searchbar onSubmit={handleSearchFormSubmit} />
      {isEmpty && <Text />}
      {/* {error && <h1>{ }</h1>} */}
      {loading && <Audio />}
      <ImageGallery openModal={openModal} value={value} image={image} />
      {isVisible && <Button onLoadMore={onLoadMore} />}

      {isShowModal && <Modal onClose={closeModal} image={selectedImage} />}
    </div>
  );
};
