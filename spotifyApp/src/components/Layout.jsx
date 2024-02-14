import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import layoutStyles from "../css/layoutStyles.module.css";
import { Box } from "@mui/material";

export default function Layout() {
  return (
    <>
      {/* // <Header /> // TODO: add a header */}
      <Box className={layoutStyles.homePageContainer}>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </Box>
      {/* // <Footer /> // TODO: add a footer */}
    </>
  );
}
