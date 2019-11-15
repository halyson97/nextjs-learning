import React, { FunctionComponent } from 'react';

import Header from '../Header';


type Props = {
	children: object
}

const layoutStyle = {
	margin: 20,
	padding: 20,
	border: '1px solid #DDD'
};

const Layout: FunctionComponent<Props> = ({children}) => (
	<div style={layoutStyle}>
		<Header />
		{children}
	</div>
);

export default Layout;