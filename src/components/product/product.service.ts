import axios from 'axios';

export abstract class ProductService {
	static getProductData(productId: any) {
		return axios.get(`http://localhost:8000/api/v1/Catalog/${productId}`);
	}
}
