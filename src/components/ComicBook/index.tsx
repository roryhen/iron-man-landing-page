import styles from './ComicBook.module.css'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  url: string
  alt: string
  image: string
}

export default function ComicBook({ url, alt, image }: Props) {
  return (
    <Link href={url}>
      <Image
        className={styles.image}
        alt={alt}
        src={image}
        width={220}
        height={330}
      />
    </Link>
  )
}
