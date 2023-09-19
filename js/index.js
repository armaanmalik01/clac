const btn = [...document.getElementsByClassName('char-btn')[0].children];
const output = document.querySelector(".calc-output > p");
const resetbtn = document.querySelector(".reset");

const calculatebtn = document.querySelector(".calculate")

var flag = true;

resetbtn.onclick = function() {
	output.innerText = "";
}


function handleDel(e) {
	if(output.innerText) {
		let data = output.innerText;
		let tmp = data.slice(0,-1);
		output.innerText = tmp;
	}
}

function handleClick({target}) {
  
	if(flag) {
		output.innerText = '';
		flag=false;
	}
	if(target.innerText==='DEL'){
		return handleDel('del')
	}
	output.innerText += target.innerText;
  output.scrollLeft = output.scrollWidth;
}

btn.forEach( e => {
	e.onclick = handleClick
})


var chars = ['+','-','x','/'];


function calculate() {
	let data = output.innerText;
	if(data){
		chars.forEach( e => {
			if(data.indexOf(e) > 0){
				if(e === 'x'){
					data = data.replace('x','*');
				}
				try{
				  
				output.innerText = eval(data)
				}catch(e) {
				  console.log(e.message)
				}
			}
			
		})

	}
}


calculatebtn.onclick = calculate