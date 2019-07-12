import React from 'react';
import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/fitness">
      <a>Fitness App</a>
    </Link>
    <Link href="/addWorkout">
      <a>Add Workout Screen</a>
    </Link>
    <Link href="/lingvist">
      <a>Language App</a>
    </Link>
    <Link href="/levels">
      <a>Levels</a>
    </Link>
    <Link href="/addWorkout3">
      <a>madlib</a>
    </Link>
  </div>
);

export default Index;
