function MyImage(props) {
  const classes= ` ${props.width} ${props.height} ${props.padding} rounded-lg`
  const src=props.link || "https://publish.purewow.net/wp-content/uploads/sites/2/2023/04/summer-fashion-trends-2023-UNI.jpg?fit=1025%2C550" 
  return (
    
    <div className={classes}>
      <img className="w-fit h-fit rounded-lg transition ease-in-out delay-150 hover:scale-125 duration-300" src={src}  />
    </div>
  );
}

export default MyImage;
