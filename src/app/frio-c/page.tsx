import React, { Suspense } from "react";

import PageC from ".";

function Home() {
  return (
    <Suspense>
      <PageC />
    </Suspense>
  );
}

export default Home;
