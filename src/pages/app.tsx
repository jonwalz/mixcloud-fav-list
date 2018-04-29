import * as React from 'react'
import * as redux from 'redux'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Store } from '../redux/reducers'
import * as actions from '../redux/actions'

interface ReduxState {}

interface ReduxActions {
    readonly fetchFavorites: () => void,
}
interface AppProps {}

interface AppState {}

const mapStateToProps = (state: Store.All): ReduxState => ({
})

const mapDispatchToProps = (dispatch: redux.Dispatch<any>): any => ({
    fetchFavorites: () => dispatch( actions.fetchFavorites() ),
})

const AppContainer = styled.div`
    display: flex;
`

export class App extends React.Component<AppProps & ReduxState & ReduxActions, AppState> {

    render() {
        return (
            <AppContainer>
                <h2>This is the first page</h2>
            </AppContainer>
        )
    }
}

const ConnectedApp: React.ComponentClass<AppProps>
    = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp