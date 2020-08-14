export function storage(key) {

    function get(){
        return localStorage.getItem(key)
    }

    function set(item) {
        localStorage.setItem(key, item)
    }

    function getObject() {
        return JSON.parse(get())
    }

    function setObject(item) {
        set(JSON.stringify(item))
    }


    return {
        get,
        set,
        getObject,
        setObject,
    }
}

export const jwtStorage = storage("jwt")


