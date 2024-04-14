'use client'
import 'linkify-plugin-hashtag'
import 'linkify-plugin-mention'
import Linkify from 'linkify-react'
import * as linkify from 'linkifyjs'
import Link from 'next/link'
import { Fragment, useMemo } from 'react'

const stopPropagation = (e: React.MouseEvent) => {
  e.stopPropagation()
}

const ExternalLink = (props: React.ComponentProps<'a'>) => (
  <a
    {...props}
    className='text-secondary-p1'
    target='_blank'
    rel='noreferrer noopener nofollow'
  />
)

const HighlightLink = (props: React.ComponentProps<typeof Link>) => (
  <Link {...props} className='font-semibold text-label-l1' />
)

interface IParsedText {
  text: string
  parseHashtag?: boolean
  parseMention?: boolean
  parseHyperlink?: boolean
}
const ParsedText = (props: IParsedText) => {
  const { text, parseHashtag, parseMention, parseHyperlink } = props

  const options: linkify.Opts = useMemo(() => {
    return {
      ignoreTags: ['script', 'style'],
      render: {
        hashtag: ({ content }) => {
          if (parseHashtag) {
            return (
              <HighlightLink
                title={content}
                href={`/hashtag/${content.substring(1)}`}
              >
                {content}
              </HighlightLink>
            )
          }
          return <Fragment>{content}</Fragment>
        },
        mention: ({ content }) => {
          if (parseMention) {
            return (
              <HighlightLink title={content} href={`/${content.substring(1)}`}>
                {content}
              </HighlightLink>
            )
          }
          return <Fragment>{content}</Fragment>
        },
        url: ({ content, attributes }) => {
          if (parseHyperlink) {
            return (
              <ExternalLink
                title={content}
                href={attributes.href}
                onClick={stopPropagation}
              >
                {content}
              </ExternalLink>
            )
          }
          return <Fragment>{content}</Fragment>
        }
      }
    }
  }, [parseHashtag, parseHyperlink, parseMention])

  return <Linkify options={options}>{text}</Linkify>
}

export default ParsedText
