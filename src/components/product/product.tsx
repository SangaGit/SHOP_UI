import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined
} from '@material-ui/icons';
import styled from 'styled-components';

const InfoContainer = styled.div`
	opacity: 0;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0px;
	bottom: 0px;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 3;
	background-color: rgba(0, 0, 0, 0.2);
	transition: 0.5s all ease;
	cursor: pointer;
`;

const Container = styled.div`
	flex: 1;
	margin: 5px;
	position: relative;
	width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	&:hover ${InfoContainer} {
		opacity: 1;
	}
`;
const Circle = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-color: white;
	position: absolute;
`;
const Image = styled.img`
	height: 75%;
	object-fit: contain;
	z-index: 2;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
		transition: 0.5s all ease;
	}
`;

const Product = ({ item }: any) => {
	return (
		<Container>
			<Circle></Circle>
			<Image src={`assets/${item.imageFile}`} />
			<InfoContainer>
				<Icon>
					<ShoppingCartOutlined />
				</Icon>
				<Icon>
					<SearchOutlined />
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</InfoContainer>
		</Container>
	);
};

export default Product;
