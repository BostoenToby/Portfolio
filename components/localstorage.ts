export const setStorage = (key, value) => {
    if(typeof window !== "undefined"){ 
        return window.localStorage.setItem(key, value)
    }
}

export const getStorage = (key) => {
    if(typeof window !== "undefined"){
        return window.localStorage.getItem(key)
    }
}