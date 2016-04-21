import {generateRestSwitch, combineSwitches} from 'two-way-rest'

const twoWayRestSwitch = generateRestSwitch('todos');

export default combineSwitches([twoWayRestSwitch]);