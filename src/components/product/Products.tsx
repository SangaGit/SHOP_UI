import styled from 'styled-components';
import { products } from '../../data/data';
import Product from './product';

const Container = styled.div`
	display: flex;
	padding: 20px;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Products = () => {
	return (
		<Container>
			{products.map(item => (
				<Product item={item} key={item.id} />
			))}
		</Container>
	);
};

export default Products;
