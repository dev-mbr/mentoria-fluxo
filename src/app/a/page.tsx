import React, { Suspense } from "react";
import PageA from ".";

function Home() {
  return (
    <Suspense>
      <PageA />
    </Suspense>
  );
}

export default Home;
