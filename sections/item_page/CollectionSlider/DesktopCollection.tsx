import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import React, { FC, useState } from "react";

const DesktopCollection: FC = () => {
  const images = [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
  ];

  const NextArrow = () => {
    return (
      <div className="cursor-pointer z-10 tablet:w-[30px] tablet:h-[45px] laptop:w-[40px] laptop:h-[60px] desktop:w-[50px] desktop:h-[70px]">
        <Image
          className="w-full h-full"
          width={50}
          height={50}
          src={"https://www.svgrepo.com/show/257704/right-chevron-chevron.svg"}
          alt=">"
        ></Image>
      </div>
    );
  };
  const PrevArrow = () => {
    return (
      <div className="cursor-pointer z-10 tablet:w-[30px] tablet:h-[45px] laptop:w-[40px] laptop:h-[60px] desktop:w-[50px] desktop:h-[70px] ">
        <Image
          className="w-full h-full"
          width={50}
          height={50}
          src={"https://www.svgrepo.com/show/257668/left-chevron-chevron.svg"}
          alt=">"
        ></Image>
      </div>
    );
  };

  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="container mobile:hidden">
      <Carousel
        withIndicators
        draggable
        className="mb-[35px] laptop:mb-[50px] tablet:text-[7px] laptop:text-[9px] desktop:text-[10px]"
        styles={{
          indicators: {
            fontSize: "1em",
            alignItems: "center",
            bottom: "-10%",
            gap: 0,
          },
          indicator: {
            zIndex: 10,
            fontSize: "1em",
            height: "1em",
            width: "3em",
            laptop: { height: "100px" },
            backgroundColor: "#0000006e !important",
            borderRadius: 0,
          },
          controls: {
            width: "55%",
            left: "22.5%",
            top: 0,
            bottom: 0,
          },
          control: {
            background: "none",
            border: "none",
            boxShadow: "none",
          },
          container: {
            alignItems: "center",
          },
        }}
        slideSize="39%"
        loop
        align="center"
        onSlideChange={(index) => setCurrentImage(index)}
        nextControlIcon={<NextArrow />}
        previousControlIcon={<PrevArrow />}
      >
        {images.map((item, id) =>
          id === currentImage ? (
            <Carousel.Slide
              key={id}
              className="flex items-center justify-center tablet:h-[170px] laptop:h-[260px]  desktop:h-[330px]"
            >
              <Image
                className="w-full object-cover duration-300 tablet:h-[170px] laptop:h-[260px]  desktop:h-[330px]"
                src={item}
                alt="Image"
                width={200}
                height={200}
              ></Image>
            </Carousel.Slide>
          ) : (
            <Carousel.Slide
              className="flex items-center justify-center tablet:h-[170px] laptop:h-[260px]  desktop:h-[330px]"
              key={id}
            >
              <Image
                className="object-cover duration-300 tablet:h-[105px] tablet:w-[140px] laptop:h-[160px] laptop:w-[205px]  desktop:h-[200px] desktop:w-[260px]"
                src={item}
                alt="Image"
                width={200}
                height={200}
              ></Image>
            </Carousel.Slide>
          )
        )}
      </Carousel>
    </div>
  );
};

export default DesktopCollection;
