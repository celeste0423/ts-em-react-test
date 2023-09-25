import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main
      css={css`
        margin-top: 90px;
      `}
    >
      {children}
      <Outlet />
    </main>
  );
};

export default RootLayout;
