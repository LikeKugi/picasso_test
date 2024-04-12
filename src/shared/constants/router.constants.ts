export type IRouterName = 'INDEX' | 'POST'

export interface IRouterPath {
  path: string,
  name: string,
}

export const RouterConstants: Record<IRouterName, IRouterPath> = {
  INDEX: {
    path: '/',
    name: 'Main'
  },
  POST: {
    path: ':postId',
    name: 'Post',
  }
}
