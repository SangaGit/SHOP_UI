import axios from 'axios';
import { useEffect, useState } from 'react';

const About = ({ name, age }: any) => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:8000/api/v1/Catalog').then((res: any) => {
			setProducts(res.data);
			console.log(products);
		});
	}, []);
	return (
		<div>
			About function component Name: {name} & Age : {age}
		</div>
	);
};
export default About;
