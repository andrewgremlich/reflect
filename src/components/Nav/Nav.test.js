import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import { Nav } from "./index";

test("renders Nav", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
