'use client'
import React, { memo, useState } from 'react'
import NextImage, { ImageLoader, ImageProps } from 'next/image'

const imageLoader: ImageLoader = (props): string => {
  return props.src
}

interface IImage extends ImageProps {
  fallback?: React.ReactNode
}
const Image = memo((props: IImage) => {
  const [isError, setIsError] = useState(false)

  const handleError = (e: any) => {
    if (props.onError) {
      props.onError(e)
    }
    setIsError(true)
  }

  if (isError && props.fallback) {
    return <>{props.fallback}</>
  }

  return (
    <NextImage
      {...props}
      loader={imageLoader}
      alt={props.alt}
      unoptimized={true}
      onError={handleError}
    />
  )
})

Image.displayName = 'Image'

export default Image
