import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "shirt",
  },
  {
    _id: uuid(),
    categoryName: "jeans",
  },
  {
    _id: uuid(),
    categoryName: "sherwani",
  },
  {
    _id: uuid(),
    categoryName: "tshirt",
  },
  {
    _id: uuid(),
    categoryName: "shoes",
  },
];
