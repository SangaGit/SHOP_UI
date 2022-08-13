import axios from 'axios';
import React, { ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductService } from './product.service';

export function withRouter(Details: any) {
	return (props: any) => {
		const match = { params: useParams() };
		return <Details {...props} params={match.params} />;
	};
}

class Details extends React.Component {
	constructor(props: any) {
		super(props);
	}
	state = {
		product: {
			id: '',
			name: '',
			category: '',
			summary: '',
			description: '',
			imageFile: '',
			price: 0
		}
	};

	props = {
		params: {
			productId: ''
		}
	};
	componentDidMount() {
		this.getData();
	}

	componentDidUpdate(prevProps: any) {
		if (this.props.params.productId !== prevProps.params.productId) {
			this.getData();
		}
	}

	private getData() {
		ProductService.getProductData(this.props.params.productId)
			.then((res: any) => {
				const product = res.data;
				this.setState({ product });
			})
			.catch(err => {
				alert(err);
			});
	}
	render(): ReactNode {
		return (
			<div className='card col-3 m-2' style={{ width: '18rem' }}>
				<img
					src={`/assets/${this.state.product.imageFile}`}
					style={{ width: '100%', height: '18rem' }}
					className='card-img-top img-thumbnail'
					alt='...'
				/>
				<div className='card-body'>
					<h5 className='card-title'>{this.state.product.name}</h5>
					<p className='card-text'>
						{this.state.product.description || this.state.product.summary}
					</p>
				</div>
				<div className='card-footer'>
					<Link
						className='nav-link active btn btn-success'
						to={`/products/${this.state.product.id}/checkout`}
					>
						Add to cart
					</Link>
				</div>
			</div>
		);
	}
}

export default withRouter(Details);
