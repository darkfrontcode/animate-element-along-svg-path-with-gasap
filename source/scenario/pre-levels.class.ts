import { Level } from './level.class'
import { PreLevel } from './pre-level.class'

export class PreLevels
{
	public levels:Array<Level>

	constructor(preLevels:Array<PreLevel>)
	{
		this.levels = new Array<Level>()
		this.buildList(preLevels)
		this.buildChildren(preLevels)
	}

	private buildList(preLevels:Array<PreLevel>) : void
	{
		for(let preLevel of preLevels)
		{
			this.levels.push(new Level(preLevel.value))
		}
	}

	private buildChildren(preLevels:Array<PreLevel>) : void
	{
		for(let preLevel of preLevels)
		{
			const level = this.levels[preLevel.value]
			preLevel.children.map(child => level.addChild(this.levels[child]))
		}
	}
}