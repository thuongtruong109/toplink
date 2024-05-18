export interface ILink {
  id: number
  title: string
  url: any
  icon: string
}

export type IUrlItem = {
  name: string
  img: string
}

export type IUrl = {
  id: string
  title: string
  icon: string
  items: Array<IUrlItem>
  color: string
}