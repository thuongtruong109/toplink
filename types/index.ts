export interface ILink {
  id: number
  title: string
  url: any
  icon: string
}

export type IUrlItem = {
  name: string
  img: string
  link: string
}

export type IUrl = {
  id: string
  title: string
  icon: string
  color: string
  items: Array<IUrlItem>
}

export type IUrlField = Omit<IUrl, "items">;