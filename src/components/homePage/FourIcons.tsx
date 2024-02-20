const DATA = [
  {
    title: "Easy return Policy",
    desc: "Provide 30 days easy return policy for all of our cusomers",
  },
  {
    title: "Free Shipping",
    desc: "Buy products over $ 100 will get free shipping on the same day.",
  },
  {
    title: "Secure Payment",
    desc: "We conforn you that payment system is totally secure",
  },
  {
    title: "Best Quality",
    desc: "We never compromise about our quality and always concern abour our customer",
  },
];

function FourIcons() {
  return (
    <div className="h-fit rounded-xl px-10 py-6 flex gap-x-3 items-center justify-center bg-gradient-to-r from-cyan-300 to-blue-300"> {/* bg-gradient-to-r from-cyan-400 to-blue-400 */}
      {DATA.map((item, index) => (
        <>
          <div className="flex flex-col w-1/4 p-6 hover:bg-cyan-200 rounded-lg transition duration-1000 ease-in-out">
            <h2>{item.title}</h2>
            <p className="font-semibold text-xl">{item.desc} </p>
          </div>
          {index !== DATA.length - 1 && <div className="border-r-2 h-32"></div>}
        </>
      ))}
    </div>
  );
}

export default FourIcons;

/* <Col >
        <div className="flex border p-3 w-fit mt-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 fill-red-400"
            width="60"
            height="60"
            fill="red"
            class="bi bi-truck"
            viewBox="0 0 16 16"
          >
            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
          <p className="mx-3 my-3 text-2xl font-bold">Free Shipping</p>
        </div>
      </Col> */
