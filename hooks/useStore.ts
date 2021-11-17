import create from "zustand";
import { Product } from "../constants";

export type State = {
  cart: Product[];
  addToCart: (product: Product) => void;
};
export const useStore = create<State>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
}));
