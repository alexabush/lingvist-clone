import React from 'react';
import Link from 'next/link';

const Index = () => (
  <div className="snowflake-root--container">
    <Link href="/fitness">
      <a>Exercise Card</a>
    </Link>
    <Link href="/addEquipment">
      <a>Equipment (Add Workout Screen 1)</a>
    </Link>
    <Link href="/addVariations">
      <a>Variations (Add Workout Screen 2)</a>
    </Link>
    <Link href="/addWorkoutSchema">
      <a>Schema (Add Workout Screen 3)</a>
    </Link>

    <Link href="/lingvist">
      <a>Language App</a>
    </Link>
    <Link href="/levels">
      <a>Levels</a>
    </Link>
    <style jsx>{`
      .snowflake-root--container {
        display: flex;
        flex-direction: column;
      }
      .snowflake-root--container a {
        margin: 5px;
      }
    `}</style>
  </div>
);

export default Index;
