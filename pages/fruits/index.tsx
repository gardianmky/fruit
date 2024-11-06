import Layout from '@/components/layout'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'

// Add proper data fetching
export default function FruitsIndex() {
  const [isLoading, setIsLoading] = useState(true)
  const [fruits, setFruits] = useState<Fruit[]>([])

  return (
    <Layout>
      <div className="space-y-4">
        <nav aria-label="Breadcrumb">
          <ul className="text-sm breadcrumbs">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li aria-current="page">Fruits</li>
          </ul>
        </nav>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {fruits.map(fruit => (
              <Link 
                href={`/fruits/${fruit.id}`} 
                key={fruit.id}
                className="transition-transform hover:scale-105"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{fruit.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Price: ${fruit.price}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
} 