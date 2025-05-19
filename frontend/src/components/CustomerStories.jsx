import { lazy, Suspense } from "react";
// import Connect from "./Connect";
import Reviews from "./Reviews";
import Loader from "./ui/Loader";

export default function CustomerStories() {

  const Connect = lazy(()=> import("./Connect"));

  return (
    <section>
      <Reviews />
      <Suspense fallback={<Loader />}>
        <Connect />
      </Suspense>
    </section>
  )
}
