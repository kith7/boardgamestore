import DirectoryItem from "../directory-item/directory-item.component";
import "./categories.componen.styles.scss";

const productList = [
  {
    id: 1,
    title: "economic",
    imageUrl:
      "'https://cf.geekdo-images.com/3jaB6k2WzvSJNbLroR42Yg__imagepage/img/cPYzxGIwFC1Vnh0BtI9zQv1PmOc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6405644.jpg'",
    route: "shop/economic",
  },
  {
    id: 2,
    title: "family",
    imageUrl:
      "'https://cf.geekdo-images.com/9b-1NpgmQj4Pr7BDpzU33g__imagepage/img/UYB8jxRmUncke2cviUAvD3NfbgM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6409122.jpg'",
    route: "shop/family",
  },
  {
    id: 3,
    title: "wargame",
    imageUrl:
      "'https://cf.geekdo-images.com/eFJekwq3lXs4R1xPIDr7OQ__imagepage/img/WiKgKLLFg3sD-X8ldXgN-3dUfd0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5821042.jpg'",
    route: "shop/wargame",
  },
  {
    id: 4,
    title: "strategy",
    imageUrl:
      "'https://cf.geekdo-images.com/oCQmyq8sHlTdWFiAJ-i8hQ__imagepage/img/b75M8VMABp5B54jG14P-u417pmQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2707928.jpg'",
    route: "shop/strategy",
  },
  {
    id: 5,
    title: "trains",
    imageUrl:
      "'https://cf.geekdo-images.com/_9ndmsF8IIUMQihii-cIyw__imagepage/img/4iwZZfQF0tL_Joa7AYYpUXbyTBI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic708209.jpg'",
    route: "shop/trains",
  },
];

const Categories = (props) => {
  return (
    <div className='categories-container'>
      {productList.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
