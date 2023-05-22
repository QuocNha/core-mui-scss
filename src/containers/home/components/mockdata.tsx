import { ICardItem } from './CategoryByGrid';

export interface IProduct {
  name?: string;
  code?: string;
  price?: string;
  createAt?: string;
  src?: string;
  description?: string;
  id?: string;
  no?: any;
}
const iphoneSrc =
  'https://chamsocdidong.com/uploads/2020/01/thay-kinh-lung-iphone-xr.png';
export const listProduct: IProduct[] = [
  {
    name: 'Product 1',
    code: 'Pr1',
    id: 'Pr1',
    price: ' 6000',
    createAt: '18-09-2023',
    src: iphoneSrc,
    description: `On September 14, Apple released the latest flagship iPhone Phones, the iPhone 13 series which consists of the iPhone 13 mini, the iPhone 13, iPhone 13 Pro, and iPhone 13 Pro Max, with new features which include a brighter display, longer battery life, more storage space, and an upgraded camera.If you just purchased one of these devices. Congratulations, operating an iPhone is easy and straightforward because you have to follow the directives on your screen. However, if you are completely new, you will not be able to understand everything. Dont be afraid Whether you re a new iPhone user or you have an old iPhone that you are replacing, this clear, easy, and practical guide has been created to aid you into the new and interesting world of the iPhone 13 series so that you can make the most out of this device`,
  },
  {
    name: 'Product 2',
    code: 'Pr2',
    id: 'Pr2',
    price: ' 6000',
    createAt: '18-09-2023',
    src: iphoneSrc,
    description: `On September 14, Apple released the latest flagship iPhone Phones, the iPhone 13 series which consists of the iPhone 13 mini, the iPhone 13, iPhone 13 Pro, and iPhone 13 Pro Max, with new features which include a brighter display, longer battery life, more storage space, and an upgraded camera.If you just purchased one of these devices. Congratulations, operating an iPhone is easy and straightforward because you have to follow the directives on your screen. However, if you are completely new, you will not be able to understand everything. Don't be afraid! Whether you’re a new iPhone user or you have an old iPhone that you are replacing, this clear, easy, and practical guide has been created to aid you into the new and interesting world of the iPhone 13 series so that you can make the most out of this device`,
  },
  {
    name: 'Product 3',
    code: 'Pr3',
    id: 'Pr3',
    price: ' 6000',
    createAt: '18-09-2023',
    src: iphoneSrc,
    description: 'Description Product',
  },
  {
    name: 'Product 4',
    code: 'Pr4',
    id: 'Pr4',
    price: ' 6000',
    createAt: '18-09-2023',
    src: iphoneSrc,
    description: 'Description Product',
  },
  {
    name: 'Product 5',
    code: 'Pr5',
    id: 'Pr5',
    price: ' 6000',
    createAt: '18-09-2023',
    src: iphoneSrc,
    description: 'Description Product',
  },
  {
    name: 'Product 6',
    code: 'Pr6',
    id: 'Pr6',
    price: ' 6000',
    createAt: '18-09-2023',
    src: iphoneSrc,
    description: 'Description Product',
  },
  {
    name: 'Product 7',
    code: 'Pr7',
    id: 'Pr7',
    price: ' 6000',
    createAt: '18-09-2023',
    src: iphoneSrc,
    description: 'Description Product',
  },
  {
    name: 'Product 8',
    code: 'Pr8',
    id: 'Pr8',
    price: ' 6000',
    createAt: '18-09-2023',
    src: iphoneSrc,
    description: 'Description Product',
  },
];
