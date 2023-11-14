export type WorkImage = {
  thumbnail: string
  url: string
  title: string
  dimension: {
    thumb: {
      width: number
      height: number
    },
    image: {
      width: number
      height: number
    }
  }
}

export type WorkLogo = {
  url: string,
  width: number,
  height: number
}

export type Work = {
  id: string
  title: string
  year: string
  url: string
  logo: WorkLogo
  zombie?: boolean
  images: WorkImage[]
}

export type WorkContent = Work & {
  content: string
}

export type WorkSingle = {
  id: string
  title: string
  year: string
  url: string
  logo: WorkLogo
  zombie?: boolean
  image: WorkImage
}