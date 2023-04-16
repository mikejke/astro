import { Component, For } from 'solid-js'
import './how-we-work.css'
import { ButtonComponent } from '../../ui/button/button'

type HowWeWorkProps = {
  images: string[]
}
type HowWeWorkSectionComponent = Component<HowWeWorkProps>

export const HowWeWorkSectionComponent: HowWeWorkSectionComponent = props => {
  return (
    <section class="how-we-work-section">
      <div class="how-we-work-section__inner">
        <div class="how-we-work-section__title-wrapper">
          <h2 class="how-we-work-section__title">Наши работы</h2>
        </div>
      </div>
      <div class="how-we-work-section__showcase">
        <div class="how-we-work-section__showcase__image-list">
          <For each={props.images}>
            {src => (
              <img
                class="how-we-work-section__showcase__image"
                src={src}
                alt="Хлеб&Печь"
              />
            )}
          </For>
        </div>
        <ButtonComponent content="Связаться с нами" />
      </div>
    </section>
  )
}
