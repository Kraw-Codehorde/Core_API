import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import homeStyles from "../css/homeStyles.module.css";
import { Box } from "@mui/material";

export default function Layout() {
  return (
    <>
      {/* // <Header /> // TODO: add a header */}
      <Box className={homeStyles.homePageContainer}>
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
