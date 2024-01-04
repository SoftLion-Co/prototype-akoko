import React from "react";
import NavigationComponent from "@/components/NavigationComponent";

const page = () => {
  const links = [{ title: "Головна", href: "/page" }];

  return (
    <div className="container">
      <NavigationComponent links={links} />
    </div>
  );
};

export default page;
