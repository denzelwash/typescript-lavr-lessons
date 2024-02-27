type TProduct = {
  id: number
  title: string
  price: number
  rest: number
}

type TSuccess<T> = {
  res: true
  data: T
}

type TError = {
  res: false
  data: Error
}

async function getJSON<T>(url: string): Promise<TSuccess<T> | TError> {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(await res.text())
    }
    const data = await res.json()
    return {
      res: true,
      data
    }
  } catch (error) {
    return {
      res: false,
      data: error as Error
    }
  }
}

;(async () => {
  const products = await getJSON<TProduct[]>('https://faceprog.ru/reactcourseapi/products/index.php')
  if (products.res) {
  }
})()

export {}
