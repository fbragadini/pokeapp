import { colours } from '../colours'

export function getBgColor(type) {
  let bgColor

  switch (type) {
    case 'normal':
      bgColor = colours.normal
      break
    case 'fire':
      bgColor = colours.fire
      break
    case 'water':
      bgColor = colours.water
      break
    case 'electric':
      bgColor = colours.electric
      break
    case 'grass':
      bgColor = colours.grass
      break
    case 'ice':
      bgColor = colours.ice
      break
    case 'fighting':
      bgColor = colours.fighting
      break
    case 'poison':
      bgColor = colours.poison
      break
    case 'ground':
      bgColor = colours.ground
      break
    case 'flying':
      bgColor = colours.flying
      break
    case 'psychic':
      bgColor = colours.psychic
      break
    case 'bug':
      bgColor = colours.bug
      break
    case 'rock':
      bgColor = colours.rock
      break
    case 'ghost':
      bgColor = colours.ghost
      break
    case 'dragon':
      bgColor = colours.dragon
      break
    case 'dark':
      bgColor = colours.dark
      break
    case 'steel':
      bgColor = colours.steel
      break
    case 'fairy':
      bgColor = colours.fairy
      break
    default:
      bgColor = 'gray'
      break
  }

  return bgColor
}
