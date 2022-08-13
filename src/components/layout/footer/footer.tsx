import React from 'react';
import { ReactNode } from 'react';

export class Footer extends React.Component {
	currentDate = new Date().toDateString();
	name = 'ACME Mobile';
	render(): ReactNode {
		return (
			<small
				className='fixed-bottom text-muted'
				style={{ marginLeft: '120px' }}
			>
				&copy; {this.name} {this.currentDate}
			</small>
		);
	}
}
