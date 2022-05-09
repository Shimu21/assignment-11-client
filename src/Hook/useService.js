import { useEffect, useState } from 'react';

const useService = (id) => {
    const [service, setService] = useState([]);

    useEffect(() => {
        const url = `https://blooming-mountain-38206.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])
    return [service, setService];
};

export default useService;