export enum Screens {
  HOME = "Home",
  ONBOARDING = "Onboarding",
  CART = "Cart",
  LOGIN = "Login",
  PRODUCTDETAIL = "ProductDetail",
  FAVORITES = "Favorites",
  SHOP = "Shop",
  HISTORY = "History",
}
export type NativeStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Shop: undefined;
  ProductDetail: "";
};

export type TabNavigatorParamList = {
  Home: undefined;
  Cart: undefined;
  Favorites: undefined;
  History: undefined;
};
