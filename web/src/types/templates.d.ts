export type TemplateType = "resume" | "coverletter"

export type ITemplate = {
  _id: string
  name: string
  friendly_name: string
  image: boolean
  thumbnail: string
}
