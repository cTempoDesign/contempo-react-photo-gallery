import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Gallery, { GalleryProps } from "./Gallery";
// import image1 from "../../../images/image-0354.jpg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Gallery",
  component: Gallery,
} as ComponentMeta<typeof Gallery>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Gallery> = (args: GalleryProps) => (
  <Gallery {...args} />
);

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  images: [
    {
      path: "https://www.gstatic.com/webp/gallery/4.sm.jpg",
      alt: "alt demo 1",
    },
    {
      path: "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=",
      alt: "alt demo 2",
    },
  ],
};

// export const ClickMe = Template.bind({});
// ClickMe.args = {
//   label: "Click me!",
// };
