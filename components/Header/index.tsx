import React, { FunctionComponent } from 'react';
import Link from 'next/link';

type Props = {}

const linkStyle = {
  marginRight: 15
};

const Header: FunctionComponent<Props> = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;