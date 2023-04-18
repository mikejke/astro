import type { Component } from 'solid-js'
import './hero.css'
import { ButtonComponent } from '../../ui/button/button'
import { IconComponent } from '../../ui/icon/icon'

type HeroSectionProps = {
  image: string
}
type HeroSectionComponent = Component<HeroSectionProps>

export const HeroSectionComponent: HeroSectionComponent = props => {
  return (
    <section class="hero-section">
      <img class="hero-section__image" src={props.image} alt="Хлеб&Печь" />
      <div class="hero-section__logo">
        <a class="hero-section__logo__content" href="#">
          <IconComponent
            name="logo"
            width={52}
            height={52}
            class="hero-section__logo__content__icon"
          />
          <h1 class="hero-section__logo__content__name">Хлеб & Печь</h1>
        </a>
      </div>
      <div class="hero-section__block">
        <h2 class="hero-section__title">Свежая выпечка</h2>
        <p class="hero-section__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
        <div class="hero-section__actions">
          <ButtonComponent
            content="Подробнее"
            onClick={() => {
              console.log('test')
            }}
          />
        </div>
      </div>
      <div class="hero-section__contacts__wrapper">
        <div class="hero-section__contacts">
          <div class="hero-section__contacts__socials">
            <a href="#">
              <IconComponent name="social-vk" width={24} height={24} />
            </a>
            <a href="#">
              <IconComponent name="social-vk" width={24} height={24} />
            </a>
            <a href="#">
              <IconComponent name="social-vk" width={24} height={24} />
            </a>
            <a href="#">
              <IconComponent name="social-vk" width={24} height={24} />
            </a>
          </div>
          <div class="hero-section__contacts__info">
            <ul class="hero-section__contacts__info__list">
              <li>Адрес: г. Ярославль, Московский проспект, 88</li>
              <li>
                Телефон: <a href="tel:8 (800) 555-35-35">8 (800) 555-35-35</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
