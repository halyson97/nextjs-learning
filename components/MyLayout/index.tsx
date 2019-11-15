import React, { FunctionComponent } from 'react';

import Head from 'next/head';

import Header from '../Header';


type Props = {
	children: object,
	title?: string
}

const layoutStyle = {
	margin: 20,
	padding: 20,
	border: '1px solid #DDD'
};

const Layout: FunctionComponent<Props> = ({children, title = "Halyson now"}) => (
	<div style={layoutStyle}>
		<Head>
			<title>{title}</title>
			{/* <link rel='icon' href='/favicon.ico' /> */}
		</Head>
		<Header />
		{children}
	</div>
);

export default Layout;