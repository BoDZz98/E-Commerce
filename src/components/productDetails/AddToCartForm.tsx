import { Form, useNavigate } from "react-router-dom";
import { MyButtonsGroup } from "../ui/MyButtonsGroup";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { MyRadioButton } from "../formComponents/MyRadioButton";

type AddToCartFormProps = {
  id: string;
  name: string;
  price: number;
  api_featured_image: string;
  quantity: number;
};
export function AddToCartForm({ details }: { details: AddToCartFormProps }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let number = 1;
  const changeNumber = (numberGot: number) => (number = numberGot);

  const addToCartHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(
      cartActions.addItemToCart({
        id: details.id,
        title: details.name,
        price: details.price,
        image: details.api_featured_image,
        quantity: number,
      })
    );
  };
  return (
    <>
      {/* <div className="flex gap-x-5">
        <p className="font-bold">Sizes :</p>
        <MyRadioButton id="size1" name="size" text="XS" />
        <MyRadioButton id="size2" name="size" text="S" />
        <MyRadioButton id="size3" name="size" text="M" />
        <MyRadioButton id="size4" name="size" text="L" />
        <MyRadioButton id="size5" name="size" text="XL" />
      </div>
      <div className="flex gap-x-5">
        <p className="font-bold">Colors :</p>
        <MyRadioButton id="color1" name="color" text="Black" />
        <MyRadioButton id="color2" name="color" text="White" />
        <MyRadioButton id="color3" name="color" text="Red" />
        <MyRadioButton id="color4" name="color" text="Blue" />
        <MyRadioButton id="color5" name="color" text="Green" />
      </div> */}
      <div className="w-fit flex">
        <MyButtonsGroup
          productDetails={details}
          inCart={false}
          onChange={changeNumber}
        />
        <button
          className="bg-red-300 ml-8 p-2 w-40 flex gap-x-3 hover:bg-red-400 hover:shadow-lg hover:text-white transition ease-in-out delay-150 hover:scale-110 duration-300 rounded-md"
          onClick={addToCartHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="black"
            className="bi bi-cart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          Add To Cart
        </button>
      </div>
    </>
  );
}
