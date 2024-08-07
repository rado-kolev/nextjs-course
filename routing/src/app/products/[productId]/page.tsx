import { Metadata } from 'next';

type Props = {
  params: {
    productId: string
  }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`
  }
}

export default function ProductDetails({
  params
}: Props) {
  return <h1>Details about product {params.productId}</h1>;
}
