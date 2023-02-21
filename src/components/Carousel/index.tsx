import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import styles from './Carousel.module.css'

type Props = {
  children: React.ReactNode
  options?: EmblaOptionsType
}

export default function Carousel({ children, options }: Props) {
  const [carouselRef] = useEmblaCarousel(options)

  return (
    <div className={styles.root} ref={carouselRef}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}
