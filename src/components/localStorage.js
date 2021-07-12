import { useState } from 'react'

function useLocalState(localItem) {

    const [local, setState] = useState(localStorage.getItem(localItem));

    function setLocal(newItem) {
        localStorage.setItem(localItem, newItem);
        setState(newItem);
        console.log(newItem);
    }

    return [local, setLocal];
}

export default useLocalState