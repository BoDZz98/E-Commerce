
import { useState } from "react";
import { AddToCartForm } from "./AddToCartForm";

export function Details() {
 
  return (
    <div className="flex flex-col gap-y-1">
      <h3 className="font-extrabold"> Colorfull stylish shirt</h3>
      <p>Stars</p>
      <h2>$150.00</h2>
      <p className="mt-2">
        Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam
        stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna
        lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est
        lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum
        kasd rebum.
      </p>
      <AddToCartForm />
      <div className="flex gap-x-2 mt-2 font-semibold">
        <p>Share on:</p>
      </div>
    </div>
  );
}
