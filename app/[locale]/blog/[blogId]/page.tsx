import React from "react";

type Props = {};

const page = ({ params }: { params: any }) => {
  return <h1 className="p-10">Blog :{params.blogId}</h1>;
};

export default page;
