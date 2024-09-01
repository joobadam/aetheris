import { type SchemaTypeDefinition } from "sanity";
import product from "./product";
import banner from "./banner";
import section from "./section";
import monthly from "./monthly";
import mid from "./mid";
import presentation from "./presentation";
import popular from "./popular";
import brand from "./brand";
import navBrands from "./navBrands";
import navCategory from "./navCategory";
import about from "./about";
import category from "./category";
import order from "./order";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    product,
    banner,
    section,
    monthly,
    mid,
    presentation,
    popular,
    brand,
    navBrands,
    navCategory,
    about,
    category,
    order
  ],
};
