import React from 'react'
import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/lingvist">
      <a>Language App</a>
    </Link>
    <Link href="/levels">
      <a>Levels</a>
    </Link>
  </div>
);

export default Index;
