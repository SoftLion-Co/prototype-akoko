import React, { FC, useEffect, useState } from "react";
import { Pagination } from "@mantine/core";

interface PaginationProps {
  totalItems: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
}

const PaginationComponent: FC<PaginationProps> = ({
  totalItems,
  currentPage,
  setCurrentPage,
  itemsPerPage,
}) => {
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [paginationSize, setPaginationSize] = useState("md");

  useEffect(() => {
    const handleResize = () => {
      let size;
      if (window.innerWidth < 320) {
        size = "sm";
      } else if (window.innerWidth < 420) {
        size = "md";
      } else if (window.innerWidth < 600) {
        size = "lg";
      } else {
        size = "xl";
      }
      setPaginationSize(size);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isPaginationNeeded = totalItems > itemsPerPage;

  return (
    <>
      {isPaginationNeeded && (
        <Pagination
          size={paginationSize}
          withControls={false}
          total={Math.ceil(totalItems / itemsPerPage)}
          onChange={handlePageChange}
          value={currentPage}
          color="white"
          styles={{
            control: {
              border: "none",
              backgroundColor: "transparent",
              "&[data-active]": {
                color: "black",
                fontWeight: 700,
                border: "1px solid #CECECE",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "#f8f9fa !important",
                },
              },
            },
            dots: {
              color: "#8B8B8B",
            },
          }}
        />
      )}
    </>
  );
};

export default PaginationComponent;
