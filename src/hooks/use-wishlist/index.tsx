import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem, setStorageItem } from 'utils/localStorage'

const WISHLIST_KEY = 'wishlistItems'

// export type WishlistItem = {
//   name: string
// }

export type WishlistContextData = {
  items: string[]
  isInWishlist: (name: string) => boolean
  addToWishlist: (name: string) => void
  removeFromWishlist: (name: string) => void
}

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [wishlistItems, setWishlistItem] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(WISHLIST_KEY)

    if (data) {
      setWishlistItem(data)
    }
  }, [])

  const isInWishlist = (name: string) =>
    name ? wishlistItems.includes(name) : false

  const saveWishlist = (wishlistItems: string[]) => {
    setWishlistItem(wishlistItems)
    setStorageItem(WISHLIST_KEY, wishlistItems)
  }

  const addToWishlist = (name: string) => {
    saveWishlist([...wishlistItems, name])
  }

  const removeFromWishlist = (name: string) => {
    const newWishlistItems = wishlistItems.filter(
      (itemName: string) => itemName !== name
    )

    saveWishlist(newWishlistItems)
  }

  return (
    <WishlistContext.Provider
      value={{
        items: getStorageItem(WISHLIST_KEY),
        isInWishlist,
        addToWishlist,
        removeFromWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
