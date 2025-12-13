import { useState } from 'react';
import useProducts from '../hooks/use-products';

export default function Products() {

    const [checked, setChecked] = useState(false);
    const { loading, error, products } = useProducts({ saleOnly: checked });
    const handleCheck = () => {
        setChecked((prev) => !prev);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

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