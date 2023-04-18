import { Component, For } from 'solid-js'
import { IconComponent } from '../../ui/icon/icon'
import './reviews.css'

type ReviewsSectionComponent = Component

export const ReviewsSectionComponent: ReviewsSectionComponent = () => {
  const reviews = [
    {
      title: 'Михайло Гнездов',
      content: `
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled
      `,
      score: 5,
    },
    {
      title: 'Сергей Головач',
      content: `
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled
      `,
      score: 5,
    },
    {
      title: 'Сергей Пират',
      content: `
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled
      `,
      score: 5,
    },
    {
      title: 'Василий Уткин',
      content: `
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled
      `,
      score: 5,
    },
  ]

  return (
    <section class="reviews-section">
      <h2 class="reviews-section__title">Отзывы</h2>
      <div class="reviews-section__reviews">
        <For each={reviews}>
          {review => (
            <div class="reviews-section__reviews__bubble">
              <strong class="reviews-section__reviews__bubble__title">
                {review.title}
              </strong>
              <p class="reviews-section__reviews__bubble__content">
                {review.content}
              </p>
              <div class="reviews-section__reviews__bubble__score">
                <For each={Array.from(Array(review.score).keys())}>
                  {() => <IconComponent name="star" width={18} height={18} />}
                </For>
              </div>
            </div>
          )}
        </For>
      </div>
    </section>
  )
}
