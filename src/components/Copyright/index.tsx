import styles from './Copyright.module.css'

type Props = { html: string }

export default function Copyright({ html }: Props) {
  return (
    <p className={styles.root} dangerouslySetInnerHTML={{ __html: html }} />
  )
}
