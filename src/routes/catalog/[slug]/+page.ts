import type { PageLoad } from './$types';
import { getProductBySlug, getAllProducts } from '$lib/data/products';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
    const product = getProductBySlug(params.slug);

    if (!product) {
        throw error(404, 'Product not found');
    }

    // Get related products (exclude current)
    const allProducts = getAllProducts();
    const relatedProducts = allProducts
        .filter(p => p.id !== product.id)
        .slice(0, 3);

    return {
        product,
        relatedProducts
    };
};
