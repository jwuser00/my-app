import { useState } from 'react';
import { useEffect } from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleCheck = () => {
        setChecked((prev) => !prev);
    };

    useEffect(() => {
        const url = checked ? 'data/sale_products.json' : 'data/products.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [checked]);

    return (
        <div>
            <input type="checkbox" checked={checked} onChange={handleCheck} />
            <label htmlFor="checkbox">{checked ? "Sale" : "Not Sale"}</label>
            <ul>
                {products.map((product: { id: number; name: string }) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}