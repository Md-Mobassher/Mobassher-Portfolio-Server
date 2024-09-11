export interface IProject {
  name: string
  type: string
  description: string[]
  technology: string[]
  position: number
  image: {
    cover: string
    landing?: string
  }
  liveUrl: string
  clientUrl?: string
  serverUrl?: string
}
