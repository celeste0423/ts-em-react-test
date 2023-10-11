import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main
      css={css`
        overflow-x: hidden;
      `}
    >
      {children}
      <Outlet />
    </main>
  );
};

export default RootLayout;
