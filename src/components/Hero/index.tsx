import { fadeInFlyUp, fadeInSlow } from '@/utils/animations'
import { animated, useInView } from '@react-spring/web'
import Link from 'next/link'
import styles from './Hero.module.css'

type Props = {
  title: string
  image: React.ReactNode
  description: string
  background?: string
}

export default function Hero({ title, image, description, background }: Props) {
  const [descRef, descSprings] = useInView(() => fadeInFlyUp, {
    once: true,
    rootMargin: '-20% 0%',
  })

  const [buttonRef, buttonSprings] = useInView(() => fadeInSlow, {
    once: true,
    rootMargin: '-20% 0%',
  })

  return (
    <header
      className={styles.root}
      style={{ '--header-bg': background } as React.CSSProperties}
    >
      <div className={styles.wrapper}>
        <h1 className="sr-only">{title}</h1>
        <div className={`${styles.image} animation-float`}>{image}</div>
        <animated.p
          className={styles.description}
          ref={descRef}
          style={descSprings}
        >
          {description}
        </animated.p>
        <animated.div ref={buttonRef} style={buttonSprings}>
          <Link className={`button ${styles.button}`} href="#get-started">
            Get Started
          </Link>
        </animated.div>
      </div>
    </header>
  )
}
