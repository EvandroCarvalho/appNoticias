import { REQUEST_NEWS, LOADING } from './types'
import requestApi from '../service/requestApi';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';

export const requestNews = (source) => {
    return dispatch => {
        dispatch({ type: LOADING, payload: true })
        const request = requestApi(source);
        request 
            .then(result => onSucess ( result.data.articles, source, dispatch ))
            .catch( error => onError( dispatch, error ) )
    }
}

onSucess = (articles, source, dispatch) => {
    dispatch({type: REQUEST_NEWS, payload: articles})
    Actions.newsPage({ title: source })
}

onError = (dispatch, error) => (
    dispatch({ type: LOADING, payload: false  }),
    Alert.alert(
        title = 'O servidor não respondeu',
        'Verifique sua conexão de internet'
    )
)

export const stopLoading = () => (
    { type: LOADING, payload: false }
)