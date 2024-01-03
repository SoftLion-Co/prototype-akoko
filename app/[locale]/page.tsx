import BlogSection from "@/sections/home_page/BlogSection";
import CollectionSlider from "@/sections/home_page/CollectionSlider/CollectionSlider";
import { StyleSection } from "@/sections/home_page/StyleSection";

export default function Home() {
  return (
    <>
      <CollectionSlider />
      <StyleSection />
      <BlogSection />
    </>
  );
}
