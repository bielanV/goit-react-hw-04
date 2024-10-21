const ImageCard = ({ item }) => {
  return (
    <img
      src={item.urls.small}
      alt={item.alt_description}
      width={300}
      height={175}
    />
  );
};

export default ImageCard;
