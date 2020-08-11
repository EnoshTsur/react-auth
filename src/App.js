import React from 'react';
import { storageApi, } from './storage/api'

function App() {

    const { get, set, setMapping, getMapping, } = storageApi('person')

    set("enosh")

    console.log(get())

    return (
        <div>
        </div>
    );
}

export default App;
