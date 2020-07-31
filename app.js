document.addEventListener('DOMContentLoaded', () => {
	const grid = document.querySelector('.grid');
	const width = 8;
	const squares = [];

	const candyColors = [
		'red',
		'yellow',
		'orange',
		'purple',
		'green',
		'blue'
	]

	// Create a board using JS
	function createBoard() {
		for (let i = 0; i < width * width; i++) {
			const square = document.createElement('div');
			square.setAttribute('draggable', true)
			square.setAttribute('id', i);
			let randomColor = Math.floor(Math.random() * candyColors.length);
			square.style.backgroundColor = candyColors[randomColor];
			grid.appendChild(square);
			squares.push(square);
		}
	}

	createBoard();

	// Drag the candies
	squares.forEach(square => square.addEventListener('dragstart', dragstart));
	squares.forEach(square => square.addEventListener('dragend', dragend));
	squares.forEach(square => square.addEventListener('dragover', dragover));
	squares.forEach(square => square.addEventListener('dragenter', dragenter));
	squares.forEach(square => square.addEventListener('dragleave', dragleave));
	squares.forEach(square => square.addEventListener('drop', drop));

	function dragstart() {
		console.log('this is dragstart');
	}

	function dragend() {
		console.log('this is dragend');
	}

	function dragover() {
		console.log('this is dragover');
	}

	function dragenter() {
		console.log('this is draenter');
	}

	function dragleave() {
		console.log('this is dragleave')
	}

	function drop() {
		console.log('this is drop');
	}
});