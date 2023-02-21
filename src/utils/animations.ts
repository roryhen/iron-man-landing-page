export const fadeInFlyUp = {
  from: {
    opacity: 0,
    y: 100,
  },
  to: {
    opacity: 1,
    y: 0,
  },
}

export const fadeInSlow = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
  config: {
    mass: 5,
    friction: 100,
    tension: 100,
  },
}
