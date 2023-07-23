import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Gallery, { GalleryProps } from "./Gallery";
// import image1 from "../../../images/image-0354.jpg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Contempo/Gallery",
  component: Gallery,
} as ComponentMeta<typeof Gallery>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Gallery> = (args: GalleryProps) => (
  <Gallery {...args} />
);

export const ResponsiveGallery = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ResponsiveGallery.args = {
  lazy: false,
  images: [
    {
      path: "https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=612x612&w=0&k=20&c=Ssi0UDmtNGF89mSpq_t7f-XChvV0_RO8xO5p5xvz35Y=",
      alt: "alt demo 1",
    },
    {
      path: "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=",
      alt: "alt demo 2",
    },
    {
      path: "https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=612x612&w=0&k=20&c=Ssi0UDmtNGF89mSpq_t7f-XChvV0_RO8xO5p5xvz35Y=",
      alt: "alt demo 1",
    },
    {
      path: "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=",
      alt: "alt demo 2",
    },
    {
      path: "https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=612x612&w=0&k=20&c=Ssi0UDmtNGF89mSpq_t7f-XChvV0_RO8xO5p5xvz35Y=",
      alt: "alt demo 1",
    },
    {
      path: "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=",
      alt: "alt demo 2",
    },
    {
      path: "https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=612x612&w=0&k=20&c=Ssi0UDmtNGF89mSpq_t7f-XChvV0_RO8xO5p5xvz35Y=",
      alt: "alt demo 1",
    },
    {
      path: "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=",
      alt: "alt demo 2",
    },
    {
      path: "https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=612x612&w=0&k=20&c=Ssi0UDmtNGF89mSpq_t7f-XChvV0_RO8xO5p5xvz35Y=",
      alt: "alt demo 1",
    },
    {
      path: "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=",
      alt: "alt demo 2",
    },
    {
      path: "https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=612x612&w=0&k=20&c=Ssi0UDmtNGF89mSpq_t7f-XChvV0_RO8xO5p5xvz35Y=",
      alt: "alt demo 1",
    },
    {
      path: "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=",
      alt: "alt demo 2",
    },
    {
      path: "https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=612x612&w=0&k=20&c=Ssi0UDmtNGF89mSpq_t7f-XChvV0_RO8xO5p5xvz35Y=",
      alt: "alt demo 1",
    },
    {
      path: "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=",
      alt: "alt demo 2",
    },
    {
      path: "https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=612x612&w=0&k=20&c=Ssi0UDmtNGF89mSpq_t7f-XChvV0_RO8xO5p5xvz35Y=",
      alt: "alt demo 1",
    },
    {
      path: "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=",
      alt: "alt demo 2",
    },
    {
      path: "https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=612x612&w=0&k=20&c=Ssi0UDmtNGF89mSpq_t7f-XChvV0_RO8xO5p5xvz35Y=",
      alt: "alt demo 1",
    },
    {
      path: "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=",
      alt: "alt demo 2",
    },
    {
      path: "https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=612x612&w=0&k=20&c=Ssi0UDmtNGF89mSpq_t7f-XChvV0_RO8xO5p5xvz35Y=",
      alt: "alt demo 1",
    },
    {
      path: "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=",
      alt: "alt demo 2",
    },
    {
      path: "https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=612x612&w=0&k=20&c=Ssi0UDmtNGF89mSpq_t7f-XChvV0_RO8xO5p5xvz35Y=",
      alt: "alt demo 1",
    },
    {
      path: "https://media.istockphoto.com/id/470604022/photo/apple-tree-without-flowers-or-fruit-isolated-on-white.jpg?s=612x612&w=0&k=20&c=hIQ0YlXwNsaRW4empl_lK2roR2tKX7Rq7pjFqPJR3QA=",
      alt: "alt demo 2",
    },
    {
      path: "https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=612x612&w=0&k=20&c=Ssi0UDmtNGF89mSpq_t7f-XChvV0_RO8xO5p5xvz35Y=",
      alt: "alt demo 1",
    },
    {
      path: "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=",
      alt: "alt demo 2",
    },
    {
      path: "https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=612x612&w=0&k=20&c=Ssi0UDmtNGF89mSpq_t7f-XChvV0_RO8xO5p5xvz35Y=",
      alt: "alt demo 1",
    },
    {
      path: "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=",
      alt: "alt demo 2",
    },
  ],
};
