import qs from 'query-string'

interface urlQueryParams {
    params: string,
    key: string,
    value: string,
}

export const formUrlQuery = ({ params, key, value }: urlQueryParams) => {

    const queryString = qs.parse(params)
    //"category=phones&page=2&query=samsung" يحول هذه النص 
    //{category: "phones",page: "2",query: "samsung"} الى 

    queryString[key] = value
    // queryString[query] =للقيمه التي ستعبر هنا  samsung سيقوم بتغيير قيمه 

    return qs.stringifyUrl({
        url: window.location.pathname,
        query: queryString
    })

}
interface RemoveUrlQueryParams {
    params: string,
    keysToRemove: string[],
}

export const removeKeysFromQuery = ({ params, keysToRemove }: RemoveUrlQueryParams) => {

    const queryString = qs.parse(params)

    keysToRemove.forEach((key) => {
        delete queryString[key]
    })

    return qs.stringifyUrl({
        url: window.location.pathname,
        query: queryString
    }, { skipNull: true })
}