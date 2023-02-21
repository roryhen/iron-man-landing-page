import { fadeInFlyUp, fadeInSlow } from '@/utils/animations'
import { animated, useInView } from '@react-spring/web'
import styles from './Features.module.css'

type Props = {
  heading: string
  image: React.ReactNode
  featureList: Feature[]
}

type Feature = {
  icon: React.ReactNode
  heading: string
  snippet: string
}

function Feature({ icon, heading, snippet }: Feature) {
  const [ref, springs] = useInView(() => fadeInFlyUp, {
    once: true,
    rootMargin: '-20% 0%',
  })

  return (
    <animated.li className={styles.feature} ref={ref} style={springs}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.subheading}>{heading}</h3>
      <p className={styles.snippet}>{snippet}</p>
    </animated.li>
  )
}

export default function Features({ heading, image, featureList = [] }: Props) {
  const [ref, springs] = useInView(() => fadeInSlow, {
    once: true,
    rootMargin: '-20% 0%',
  })

  return (
    <section className={styles.root}>
      <h2 className={styles.heading}>{heading}</h2>
      <animated.div className={styles.image} ref={ref} style={springs}>
        {image}
      </animated.div>
      <ul className={styles.features}>
        {featureList.map((feature, i) => (
          <Feature
            key={i}
            icon={feature.icon}
            heading={feature.heading}
            snippet={feature.snippet}
          />
        ))}
      </ul>
    </section>
  )
}
