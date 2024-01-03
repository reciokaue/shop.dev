export default function Product({ params }: { params: { id: string } }) {
  return <div className="flex">Product: {JSON.stringify(params)}</div>
}
