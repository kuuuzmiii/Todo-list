const input = document.querySelector('.znach'),
      btn = document.querySelector('.add'),
	  spisocParent = document.querySelector('.spisok'),  
	  spisok = document.querySelector('.elements');


btn.addEventListener('click',(e)=>{
	e.preventDefault();
	if(input.value.length>0){
		const li  = document.createElement('li');
		li.textContent = `${input.value}`;
		spisok.appendChild(li);
		createClose(li);
		input.value = '';
	}
});



spisocParent.addEventListener('click',(e)=>{
	const target = e.target;
	spisok.childNodes.forEach(elem => {
				 if(target && target.childNodes && target.nodeName === "LI" ){
					 if(target === elem){
						liStyle(elem);
						
					 }
				 }
			})
});


function liStyle(block){
	if(block.classList == 'clicked'){
		block.classList.remove('clicked');
		block.classList.add('activ');
	}else{
	    block.classList.remove('activ');
		block.classList.add('clicked');
	}

}


function createClose(elements){
	const span = document.createElement('SPAN');
	const text = document.createTextNode('\u00D7');
	span.appendChild(text);
	span.classList.add('close');
	elements.appendChild(span);
	span.addEventListener('click',()=>{
		span.parentElement.style.display = 'none';
	})
	elements.addEventListener('mouseover',()=>{
		if(elements.classList == 'clicked' ){

		}else{
			elements.classList.add('activ');
		}

	})
	elements.addEventListener('mouseout',()=>{
		elements.classList.remove('activ');
	})
}	 

function addElemClose (){
	spisok.childNodes.forEach(elem =>{
		if(elem.nodeName === "LI"){
			createClose(elem);
		}
	})	

}	
addElemClose();
