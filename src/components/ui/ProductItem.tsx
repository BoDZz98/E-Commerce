const ProductItem = ({ item, cardSize, imgSize, textSize }: any) => {
  return (
    <div
      className={`border-4 rounded-xl p-3 flex flex-col shadow  ${cardSize} transition transform duration-500 ease-in-out  hover:-translate-y-1 hover:scale-110 `}
      id={item.id}
    >
      <img
        className={`rounded place-self-center ${imgSize}`}
        src={item.api_featured_image}
      ></img>
      <h6 className={textSize}>{item.name}</h6>
      <h6 className=" place-self-end">${item.price}</h6>
    </div>
  );
};

export default ProductItem;
