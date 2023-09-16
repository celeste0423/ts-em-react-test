import React from "react";
import Header from "../components/Header";

import { Button, Code, Text, Title } from "@mantine/core";
import HeaderAction from "../components/Header";

const linksData = [
  {
    link: "/home",
    label: "Home",
    links: [
      { link: "/about", label: "About" },
      { link: "/contact", label: "Contact" },
    ],
  },
  {
    link: "/products",
    label: "Products",
    links: [
      { link: "/product1", label: "Product 1" },
      { link: "/product2", label: "Product 2" },
    ],
  },
];

function HomePage() {
  return (
    <div>
      <HeaderAction links={linksData} />
      <Title order={2}>반가워요</Title>
      <Text color="dimmed" weight="bold">
        You're logged in!
      </Text>
      <Code block mt={12}>
        반가워요
      </Code>
      <Button>Sign Out</Button>
    </div>
  );
}

export default HomePage;
