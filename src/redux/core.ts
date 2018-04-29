export interface BaseRepository<T> {
    readonly items: Map<string, T>,
    readonly sort: ReadonlyArray<string>,
}

export interface Favorites extends BaseRepository<any> {
}

export interface AppState {
    readonly favorites: Favorites,
}

export const defaultAppState: AppState = {
    favorites: {
        items: new Map<string, any>(),
        sort: [],
    }
}

export const INITIAL_STATE = defaultAppState