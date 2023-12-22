export type SingleBlogList = {
  _id: string
  title: string
  short_description: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
export type HomepageAPIResult = {
  blogs: Array<SingleBlogList>
  resumes: {
    noImg: {
      _id: string
      name: string
      thumbnail: string
      friendly_name: string
    }[]
    img: {
      _id: string
      name: string
      thumbnail: string
      friendly_name: string
    }[]
  }
}

export type SingleBlog = {
  _id: string
  title: string
  short_description: string
  slug: string
  content: string
  image: string
  status: string
  creator: string
  createdAt: string
  updatedAt: string
  readMore: Array<SingleBlogList>
}
export type AllBlogs = {
  total: number
  limit: number
  page: number
  items: SingleBlogList[]
}
