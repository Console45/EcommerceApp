export interface Product {
  id: number;
  title: string;
  descriptionTitle: string;
  description: string;
  image: NodeRequire;
  category: string;
  price: string;
}

export const Product: Product[] = [
  {
    id: Math.floor(Math.random() * 100),
    title: "Apple Ipad Air",
    descriptionTitle: "Get Apple TV+ free for a year",
    description:
      "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, £4.99/month after free trial.",
    image: require("../assets/images/ipad air.png"),
    category: "tablets",
    price: "579",
  },
  {
    id: Math.floor(Math.random() * 100),
    title: "Iwatch Series 6",
    descriptionTitle: "Get Apple TV+ free for a year",
    description:
      "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, £4.99/month after free trial.",
    image: require("../assets/images/iwatch 6.png"),
    category: "wearables",
    price: "359",
  },
  {
    id: Math.floor(Math.random() * 100),
    title: "Samsung Galaxy Watch",
    descriptionTitle: "Get Apple TV+ free for a year",
    description:
      "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, £4.99/month after free trial.",
    image: require("../assets/images/samsung watch.png"),
    category: "wearables",
    price: "159",
  },
  {
    id: Math.floor(Math.random() * 100),
    title: "Iwatch Series 5",
    descriptionTitle: "Get Apple TV+ free for a year",
    description:
      "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, £4.99/month after free trial.",
    image: require("../assets/images/iwatch.png"),
    category: "wearables",
    price: "",
  },
  {
    id: Math.floor(Math.random() * 100),
    title: "Apple Macbook",
    descriptionTitle: "Get Apple TV+ free for a year",
    description:
      "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, £4.99/month after free trial.",
    image: require("../assets/images/macbook.png"),
    category: "laptops",
    price: "245",
  },
  {
    id: Math.floor(Math.random() * 100),
    title: "Apple Ipad",
    descriptionTitle: "Get Apple TV+ free for a year",
    description:
      "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, £4.99/month after free trial.",
    image: require("../assets/images/ipad.png"),
    category: "tablets",
    price: "325",
  },
  {
    id: Math.floor(Math.random() * 100),
    title: "Apple Iphone 13 Pro",
    descriptionTitle: "Get Apple TV+ free for a year",
    description:
      "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, £4.99/month after free trial.",
    image: require("../assets/images/iphone 13.png"),
    category: "phones",
    price: "879",
  },
  {
    id: Math.floor(Math.random() * 100),
    title: "Apple Airpods Pro",
    descriptionTitle: "Get Apple TV+ free for a year",
    description:
      "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, £4.99/month after free trial.",
    image: require("../assets/images/iphone 13.png"),
    category: "wearables",
    price: "375",
  },
];
