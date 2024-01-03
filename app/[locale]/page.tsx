import CollectionSlider from "@/sections/home_page/CollectionSlider/CollectionSlider";
import MainTitleComponent from "@/components/MainTitleComponent";

export default function Home() {
  return (
    <>
      <MainTitleComponent title="New Collection" levelTitle={1} />
      <CollectionSlider />
    </>
  );
}
