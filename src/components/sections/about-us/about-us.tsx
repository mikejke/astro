import { Component, For } from "solid-js";
import "./about-us.css";
import { ButtonComponent } from "../../ui/button/button";
import { getImage } from "astro:assets";
import aboutUsImage from "../../../assets/images/about-us-image.png";

type AboutUsSectionProps<P = {}> = P & {};
type AboutUsSectionComponent<P = {}> = Component<AboutUsSectionProps<P>>;

const { src } = await getImage({
  src: aboutUsImage,
  alt: "Хлеб&Печь",
  format: "webp",
});

export const AboutUsSectionComponent: AboutUsSectionComponent = () => {
  const text = [
    'Мы рады приветствовать вас в пекарне "Хлеб&Печь"! \n\nНаша компания была основана несколько лет назад с целью предоставить нашим клиентам лучшие хлебобулочные изделия высочайшего качества. Мы гордимся тем, что каждый день мы используем только лучшие ингредиенты, чтобы создавать наши уникальные рецепты.',
    'Посетите нашу пекарню "Хлеб&Печь", чтобы насладиться непревзойденным вкусом нашего хлеба и других продуктов. Мы гарантируем, что каждый кусочек нашей выпечки будет свежим, ароматным и полным вкуса. Мы ждем вас с нетерпением!',
  ];

  return (
    <section class="about-us-section">
      <div class="about-us-section__content">
        <h2 class="about-us-section__content__title">О нас</h2>
        <For each={text}>
          {(paragraph) => (
            <p class="about-us-section__content__paragraph">{paragraph}</p>
          )}
        </For>
        <ButtonComponent content="Связаться с нами" />
      </div>
      <div class="about-us-section__background">
        <img
          class="about-us-section__background__image"
          src={src || ""}
          alt="Хлеб&Печь"
        />
      </div>
    </section>
  );
};
