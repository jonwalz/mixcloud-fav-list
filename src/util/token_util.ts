export const isLoggedIn = (key: string  = 'access-token'): boolean => {
    const result: string | null = localStorage.getItem(key)
    return result !== null
}

export const getAccessToken = (): string => {
    const accessToken = localStorage.getItem('access-token')
    return accessToken ? accessToken : ''
}

export const deleteAccessToken = (): void => {
    localStorage.removeItem('access-token')
}

export const setAccessToken = (token: string): void => {
     localStorage.setItem('access-token', token)
}
