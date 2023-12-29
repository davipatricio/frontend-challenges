interface MetadataProps {
  params: {
    brandName: string;
    productName: string;
  };
}

export async function generateMetadata({ params }: MetadataProps) {
  const decodedProductName = decodeURIComponent(params.productName);

  return {
    title: `${decodedProductName} - Sun Co.`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
