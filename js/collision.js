//判断大鱼和果实的距离
function momFruitsCollsion()
{
	if(!data.gameOver)
	{
		for(var i = 0; i < fruit.num; i++)
	{
		if (fruit.alive[i])
		{
//			calculate length
            var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            if(l < 900)
            {
            	//fruit eaten
            	fruit.dead(i);
            	data.fruitNum++;
            	mom.momBodyCount++;
            	if(mom.momBodyCount > 7)
            	     mom.momBodyCount = 7;
            	if(fruit.fruitType[i] == "blue")   //blue果实
            	{
            		data.double = 2;
            	}
            	wave.born(fruit.x[i],fruit.y[i]);
            }
		}
	}
	}
	
}
