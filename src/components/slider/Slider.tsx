import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import styled from 'styled-components';
import { products } from '../../data/data';
/* tslint:disable */
const Container = styled.div`
	display: flex;
	height: 100vh;
	width: 100%;
	position: relative;
	overflow: hidden;
`;

const Arrow = styled.div<any>`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	left: ${props => props.direction === 'left' && '10px'};
	right: ${props => props.direction === 'right' && '10px'};
	z-index: 2;
	opacity: 0.5;
`;

const Wrapper = styled.div<any>`
	display: flex;
	height: 100%;
	transform: translateX(${props => props.slideIndex * -100}vw);
	transition: 1.5s ease all;
`;

const Slide = styled.div<any>`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: ${props => props.bg};
`;
const ImageContainer = styled.div`
	height: 80%;
	flex: 1;
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: contain;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 20px;
`;

const Title = styled.h1`
	font-size: 70px;
`;
const Description = styled.p`
	margin: 50px 0px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`;
const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction: any) => {
		if (direction === 'left') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : products.length - 1);
		} else {
			setSlideIndex(slideIndex < products.length - 1 ? slideIndex + 1 : 0);
		}
	};
	return (
		<Container>
			<Arrow direction='left' onClick={() => handleClick('left')}>
				<ArrowLeftOutlined />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{products.map(item => (
					<Slide bg='white' key={item.id}>
						<ImageContainer>
							<Image src={'assets/' + item.imageFile} />
						</ImageContainer>
						<InfoContainer>
							<Title>{item.name}</Title>
							<Description>{item.summary}</Description>
							<Button>SHOW NOW</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow direction='right' onClick={() => handleClick('right')}>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;
