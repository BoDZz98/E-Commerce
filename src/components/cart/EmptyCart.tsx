import emptyCart from "../../imgs/emptyCart.jpg";

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-96 rounded-lg ">
      <img src={emptyCart} className=" h-3/5" />
      <p className="font-bold text-3xl">Your Cart Is Empty</p>
      <p className="font-semibold text-lg">
        Looks like you have not added anything to your cart
      </p>
      <button className="rounded p-3 text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 transition duration-500 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transform hover:-translate-y-1 hover:scale-110 ">
        Shop Now!
      </button>
    </div>
  );
};

export default EmptyCart;
