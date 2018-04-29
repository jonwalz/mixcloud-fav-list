import { Favorites } from '../core'

export namespace Store {
    // tslint:disable-next-line
    export interface INITIAL_STATE {
    }

    export interface All {
        readonly favorites: Favorites,
    }

    export interface State {
    }
}