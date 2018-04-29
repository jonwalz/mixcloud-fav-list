export interface FetchFavoritesAction {
    readonly type: 'FETCH_FAVORITES',
}

export interface ReceiveFavoritesAction {
    readonly type: 'RECEIVE_FAVORITES',
    readonly favorites: any,
}

export type ACTION = FetchFavoritesAction
|    ReceiveFavoritesAction

export const fetchFavorites = () => ({
    type: 'FETCH_FAVORITES'
})

export const receiveFavorites = (favorites) => ({
    type: 'RECEIVE_FAVORITES',
    favorites,
})