import { useState } from 'react'
import Layout from '@/components/layout'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Fruit {
  id: string
  name: string
  price: number
  category: string
  image?: string
  inStock: boolean
}

const fruits: Fruit[] = [
  { id: '1', name: 'Apple', price: 1.99, category: 'Fresh', inStock: true },
  { id: '2', name: 'Banana', price: 0.99, category: 'Fresh', inStock: true },
  // Add more fruits as needed
]

export default function Home() {
  const [filter, setFilter] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const filteredFruits = fruits.filter(fruit =>
    fruit.name.toLowerCase().includes(filter.toLowerCase()) ||
    fruit.category.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <Layout>
      <div className="space-y-6">
        <Input
          placeholder="Search fruits..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          aria-label="Search fruits"
        />
        
        {error && <p className="text-red-500">{error}</p>}
        
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredFruits.map(fruit => (
              <Card key={fruit.id}>
                <CardHeader>
                  <CardTitle>{fruit.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">Price: ${fruit.price.toFixed(2)}</p>
                  <p>Category: {fruit.category}</p>
                  {!fruit.inStock && (
                    <p className="text-red-500">Out of Stock</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
} 