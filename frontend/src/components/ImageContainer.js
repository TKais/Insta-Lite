import React, { useState, useEffect } from 'react';
import Image from './Image';
import Loader from './Loader';

function ph(res) {
  return Object.keys(res).map(item => res[item]);
}

function ImageContainer(props) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoadingState] = useState(false);
  const [page, setPage] = useState(0);
  const [prevY, setPrevY] = useState(0);

  function getPhotos() {
    setLoadingState(true);
    fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setPhotos(prevPhotos => [...prevPhotos, ...ph(res)]);
        setLoadingState(false);
      })
      .catch((err) => {
        console.error('Error:', err);
      });
  }

  useEffect(() => {
    getPhotos(page);
  }, [page]);

  return (
    <div>
      <h2>PHOTO CONTAINER</h2>
      { loading ? <Loader /> : photos.length && photos.map(photo => <Image source={photo.url}/>) }
    </div>
  )
}

export default ImageContainer;
