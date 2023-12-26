import Adidas from '@/app/assets/products/adidas.png';
import Nike from '@/app/assets/products/nike.png';
import Nike2 from '@/app/assets/products/nike2.png';
import Offwhite from '@/app/assets/products/offwhite.png';
import { StaticImageData } from 'next/image';

export interface ProductData {
  brand: string;
  name: string;
  price: number;
  image: StaticImageData;
}

export const ProductList = [
  {
    brand: 'Off-White',
    name: 'Out Of Office "Ooo" Sneakers',
    price: 775,
    image: Offwhite,
  },
  {
    brand: 'Nike',
    name: 'Nike Air Force Premium',
    price: 200,
    image: Nike,
  },
  {
    brand: 'Nike',
    name: 'Nike Air Force Premium 2',
    price: 98.23,
    image: Nike2,
  },
  {
    brand: 'adidas',
    name: 'DAILY 3.0 SHOES',
    price: 98.99,
    image: Adidas,
  },
] as ProductData[];
