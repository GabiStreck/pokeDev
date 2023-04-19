export const API_URL = typeof window !== undefined ?
    process.env.NEXT_PUBLIC_API_URL : process.env.API_URL

export const getApiUrl = (path: string) => `${API_URL}/${path}`
