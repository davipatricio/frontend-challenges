'use client';

import ProductInfo from '@/components/product/product-info';
import { ProductList } from '@/data/products';
import { notFound } from 'next/navigation';

interface HomeProps {
  params: {
    brandName: string;
    productName: string;
  };
}

export default function Home({ params }: HomeProps) {
  const decodedBrandName = decodeURIComponent(params.brandName);
  const decodedProductName = decodeURIComponent(params.productName);

  const product = ProductList.find(
    (product) => product.brand === decodedBrandName && product.name === decodedProductName,
  );

  if (!product) notFound();

  return (
    <>
      <ProductInfo product={product} />
    </>
  );
}
