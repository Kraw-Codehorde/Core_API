import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export default function Layout() {
  return (
    <>
      {/* // <Header /> // TODO: add a header */}
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {/* // <Footer /> // TODO: add a footer */}
    </>
  );
}
