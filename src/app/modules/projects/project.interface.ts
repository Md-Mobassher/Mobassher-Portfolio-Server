export interface IProject {
  name: string
  type: string
  description: string[]
  technology: string[]
  image: {
    cover: string
    landing?: string
  }
  liveUrl: string
  clientUrl?: string
  serverUrl?: string
}
