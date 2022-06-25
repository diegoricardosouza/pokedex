import { createContext } from 'react'

const WISHLIST_KEY = 'wishlistItems'

export type WishlistItem = {
  name: string
}

export type WishlistContextData = {
  items: WishlistItem[]
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
  return (
    <WishlistContext.Provider value={{ items }}>
      {children}
    </WishlistContext.Provider>
  )
}

export { WishlistProvider }
