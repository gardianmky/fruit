import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'

const fruits = {
  '1': {
    id: '1',
    name: 'Apple',
    price: 1.99,
    description: 'Fresh and crispy apple',
    nutrition: {
      calories: 95,
      sugar: '19g',
      fiber: '4g'
    }
  },
  // Add more fruits as needed
}

export default function FruitSpecifications() {
  const router = useRouter()
  const { id } = router.query
  const [fruit, setFruit] = useState<Fruit | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  if (error) return (
    <Layout>
      <div className="text-red-500">{error}</div>
    </Layout>
  )

  if (isLoading) return (
    <Layout>
      <div>Loading...</div>
    </Layout>
  )

  if (!fruit) return (
    <Layout>
      <div>Fruit not found</div>
    </Layout>
  )

  return (
    <Layout>
      <div className="space-y-4">
        <nav aria-label="Breadcrumb">
          <ul className="text-sm breadcrumbs">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/fruits" className="hover:underline">Fruits</Link></li>
            <li aria-current="page">{fruit.name}</li>
          </ul>
        </nav>

        <Card>
          <CardHeader>
            <CardTitle>{fruit.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium">Price: ${fruit.price.toFixed(2)}</p>
            <p className="mt-2">{fruit.description}</p>
            <h3 className="mt-4 font-bold">Nutrition Facts</h3>
            <dl className="grid grid-cols-2 gap-2 mt-2">
              <dt>Calories:</dt>
              <dd>{fruit.nutrition.calories}</dd>
              <dt>Sugar:</dt>
              <dd>{fruit.nutrition.sugar}</dd>
              <dt>Fiber:</dt>
              <dd>{fruit.nutrition.fiber}</dd>
            </dl>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
} 