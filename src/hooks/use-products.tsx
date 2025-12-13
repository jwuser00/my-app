import { useEffect, useState } from "react";

export default function useProducts({ saleOnly }: { saleOnly: boolean }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(undefined);
        const url = saleOnly ? 'data/sale_products.json' : 'data/products.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, [saleOnly]);

    return { loading, error, products };
} 