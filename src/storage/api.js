export function storageApi(key) {

    function get() {
        return localStorage.getItem(key)
    }

    function getMapping(mapper) {
        return mapper(get())
    }

    function set(item) {
        localStorage.setItem(key, item)
    }

    function setMapping(mapper, item) {
        set(mapper(item))
    }

    return {
        get,
        getMapping,
        set,
        setMapping
    }
}