window.onload = pageLoad;

function pageLoad(){
	var StartButton = document.getElementById("start");
	StartButton.onclick = startGame;
}

function startGame(){
	clearScreen();
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60;
	var x = document.getElementById('clock');
	var ColorBG = document.getElementById("game-layer");
	var timeBar = document.getElementById("timeBar");

	//setting timer using setInterval function
	ColorBG.style.backgroundColor = "#D4FFD0";
	timeBar.style.width = "100%";
	x.innerHTML = second;
	clearInterval(timer);
	timer = setInterval(timeCount,TIMER_TICK);
	
	function timeCount()
	{
		var allbox = document.querySelectorAll("#game-layer div");
		CheckResult();
		x.innerHTML = second;
		ColorBGFromSecond();
		timeBarFromSecond();
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen

	function CheckResult()
	{
		if(allbox.length <= 0)
		{
			alert("You Win!");
			clearInterval(timer);
			return;
		}
		if(second <= 0 && allbox.length > 0)
		{
			alert("Game Over!");
			clearInterval(timer); 
			return;
		}
		second--;
	}
	function ColorBGFromSecond()
	
	{
		if(second < 30 && second > 20)
		{
			ColorBG.style.backgroundColor = "#D4FFD0";
			return;
		}
		if(second < 20 && second > 10)
		{
			ColorBG.style.backgroundColor = "#FFFED0";
			return;
		}
		if(second < 10)
		{
			ColorBG.style.backgroundColor = "#FFD0D0";
			return;
		}
	}
	function timeBarFromSecond()
	{
		var timePercent = (second * 100)/30;
		var timePercentText = timePercent + "%";
		timeBar.style.width = timePercentText;
	}
	}
	
	
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color");
	var colorClass = "square " + colorDrop.value;

	for (var i = 0 ; i < numbox ; i++){
		var tempbox = document.createElement("div");
		tempbox.className = colorClass;
		tempbox.id = "box" + i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function removeBox(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer");

	//delete all  div
	for (var i = 0 ; i < allbox ; i++)
	{
		var tempbox = document.getElementById("box" + i);
		if(document.body.contains(tempbox))
		{
			gameLayer.removeChild(tempbox);
		}
	}
}




