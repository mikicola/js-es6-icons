const arrIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const iconsContainer = document.querySelector('.icons-container');

function instertIcons(arrIcons, iconsContainer){
	arrIcons.forEach(element => {
		const div = document.createElement('div');
		div.classList.add('box');
		div.innerHTML = `
            <i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color}"></i>
			<span>${element.name}</span>
			`;
			iconsContainer.append(div)
		});

	}

	instertIcons(arrIcons, iconsContainer)

	const iconsTypeSelector = document.getElementById('icons-type-selector');
    iconsTypeSelector.addEventListener('change', function(){

		const selectedType = this.value;
		
		console.log(selectedType);

		
			const filteredIcons = arrIcons.filter((iconArg) => {
				if(iconArg.type == selectedType){
					return true;
					
				}
			});
			
			
			console.log(filteredIcons)
		
		
	})
	
	// if(iconsTypeSelector != 'all'){
	// 	const filteredIcons = arrIcons.filter((iconsArgument) => {
	// 		if(iconsArgument.type == selectedType){
	// 			return true;
				
	// 		}
	// 	})
	// 	// console.log(iconsArgument.type)
	// 	insertIcons(filteredIcons, iconsContainer);
	// 	console.log(filteredIcons)
	// }else{
	// 	insertIcons(arrIcons, iconsContainer);
	// }