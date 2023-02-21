import Carousel from '@/components/Carousel'
import ComicBook from '@/components/ComicBook'
import Copyright from '@/components/Copyright'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Businessman from '@/components/Icons/Businessman'
import Engineer from '@/components/Icons/Engineer'
import Genius from '@/components/Icons/Genius'
import Tactician from '@/components/Icons/Tactician'
import Layout from '@/components/Layout'
import { IRON_MAN_ID } from '@/utils/constants'
import { getResource } from '@/utils/fetch'
import { imageSrc } from '@/utils/misc'
import { Character, Comic } from '@/utils/types'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import ironManImage from 'public/iron-man-char.png'
import ironManLogo from 'public/iron-man-logo.png'

type Props = {
  character: Character
  attribution: string
  comics: Comic[]
}

export default function Home({ character, attribution, comics }: Props) {
  return (
    <Layout logo={<Image alt={character.name} src={ironManLogo} width={420} />}>
      <Hero
        title={character.name}
        image={
          <Image
            alt="Iron Man Chibi floating and shooting from right arm"
            src={ironManImage}
            width={330}
          />
        }
        background={'var(--gradient-1)'}
        description={character.description}
      />
      <Features
        heading={
          "Contrary to popular belief, he knows exactly what he's doing."
        }
        image={
          <Image
            alt="Iron Man comic image"
            width={470}
            height={470}
            src={imageSrc(character.thumbnail)}
          />
        }
        featureList={[
          {
            icon: <Genius />,
            heading: 'Super-Genius Intelligence',
            snippet:
              'Tony Stark is far more than a mechanical engineering prodigy who graduated from the Massachusetts Institute of Technology with honors at the age of 17.',
          },
          {
            icon: <Engineer />,
            heading: 'Master Engineer',
            snippet:
              'He is an excellent engineer and mechanic capable of fixing almost any, if not all machinery.',
          },
          {
            icon: <Businessman />,
            heading: 'Master Businessman',
            snippet:
              "Stark is extremely well-respected in the business world, able to command people's attentions when he speaks on economic matters.  He has built up several multi-million dollar companies from virtually nothing.",
          },
          {
            icon: <Tactician />,
            heading: 'Expert Tactician',
            snippet:
              'He is a brilliant tactician capable of quickly formulating battle strategies and new plans if the situation changes, like being able to elaborate complex plans in order to defeat different enemies.',
          },
        ]}
      />
      <Carousel options={{ align: 'start', skipSnaps: true, loop: true }}>
        {comics.map(
          (comic, i) =>
            comic.images[0] && (
              <ComicBook
                key={i}
                url={comic.urls[0].url}
                alt={comic.title}
                image={imageSrc(comic.images[0], 'portrait_incredible')}
              />
            )
        )}
      </Carousel>
      <Copyright html={attribution} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const characterResponse = await getResource(IRON_MAN_ID, 'character')
  const comicResponse = await getResource(IRON_MAN_ID, 'comic')

  return {
    props: {
      character: characterResponse?.data.results[0],
      attribution: characterResponse?.attributionHTML,
      comics: comicResponse?.data.results,
    },
  }
}
