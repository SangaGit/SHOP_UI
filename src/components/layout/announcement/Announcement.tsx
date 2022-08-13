import styled from 'styled-components';

const Container = styled.div`
	font-size: 14px;
	height: 30px;
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: teal;
	color: white;
`;

const Announcement = () => {
	return <Container>Super deal! Free Shipping on Orders Over $500</Container>;
};

export default Announcement;
