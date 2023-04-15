import { Component, For } from 'solid-js'
import './how-we-work.css'
import { ButtonComponent } from '../../ui/button/button'
import { getImage } from 'astro:assets'
import slideImage1 from '../../../assets/images/slide-image-1.png'
import slideImage2 from '../../../assets/images/slide-image-2.png'
import slideImage3 from '../../../assets/images/slide-image-3.png'
import slideImage4 from '../../../assets/images/slide-image-4.png'

type HowWeWorkProps<P = Record<never, never>> = P & Record<never, never>
type HowWeWorkSectionComponent<P = Record<never, never>> = Component<
  HowWeWorkProps<P>
>

const images = await Promise.all(
  [slideImage1, slideImage2, slideImage3, slideImage4].map(async img => {
    const { src } = await getImage({
      src: img,
      alt: 'Хлеб&Печь',
      format: 'webp',
    })

    return src ? `${import.meta.env.BASE_URL}${src.slice(1)}` : ''
  }),
)

export const HowWeWorkSectionComponent: HowWeWorkSectionComponent = () => {
  return (
    <section class="how-we-work-section">
      <div class="how-we-work-section__inner">
        <div class="how-we-work-section__title-wrapper">
          <h2 class="how-we-work-section__title">Наши работы</h2>
        </div>
      </div>
      <div class="how-we-work-section__showcase">
        <div class="how-we-work-section__showcase__image-list">
          <For each={images}>
            {src => (
              <img
                class="how-we-work-section__showcase__image"
                src={src || ''}
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
