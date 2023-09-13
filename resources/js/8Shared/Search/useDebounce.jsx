import { useState, useEffect } from "react"

const useDebounce = (value, offset = 600) => {
    const [debouncedVal, setDebouncedVal] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedVal(value);

        }, offset);
        return () => {
            clearTimeout(timeout);
        }

    }, [value]);

    return debouncedVal;


}
export default useDebounce;