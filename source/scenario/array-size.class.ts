import { Level } from './level.class'

export class PathSize
{
	public big: Array<Level>
	public small: Array<Level>

	constructor(big:Array<Level>, small:Array<Level>) {
		this.big = big
		this.small = small
	}
}