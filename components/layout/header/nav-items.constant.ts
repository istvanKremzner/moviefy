interface INavItem {
  name: string
  route: string
  isAvailable?: boolean
}

export const navItems: INavItem[] = [
  {
    name: 'Latest arrivals',
    route: '/latest-arrivals',
  },
  {
    name: 'Movies',
    route: '/movies',
    isAvailable: true,
  },
  {
    name: 'Series',
    route: '/series',
  },
  {
    name: 'People',
    route: '/people',
  },
  {
    name: 'Streaming providers',
    route: '/streaming-providers'
  },
];
