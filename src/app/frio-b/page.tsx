import React, { Suspense } from "react";
import PageB from ".";

function Home() {
  return (
    <Suspense>
      <PageB />
    </Suspense>
  );
}

export default Home;
