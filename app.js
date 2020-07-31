document.addEventListener('DOMContentLoaded', () => {
	const grid = document.querySelector('.grid');
	const width = 8;
	const squares = [];
	let score = 0;

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
	let colorBeingDragged;
	let colorBeingReplaced;
	let squareIdBeingDragged;
	let squareIdBeingReplaced;

	squares.forEach(square => square.addEventListener('dragstart', dragStart));
	squares.forEach(square => square.addEventListener('dragend', dragEnd));
	squares.forEach(square => square.addEventListener('dragover', dragOver));
	squares.forEach(square => square.addEventListener('dragenter', dragEnter));
	squares.forEach(square => square.addEventListener('dragleave', dragLeave));
	squares.forEach(square => square.addEventListener('drop', dragDrop));

	function dragStart(e) {
		colorBeingDragged = this.style.backgroundColor;
		squareIdBeingDragged = parseInt(this.id);
		console.log(colorBeingDragged);
		console.log(this.id, 'dragstart');
	}

	function dragEnd() {
		console.log('this is dragend');
		// What is a valid move in candy Crash
		let validMoves = [
			squareIdBeingDragged -1,
			squareIdBeingDragged - width,
			squareIdBeingDragged + 1,
			squareIdBeingDragged + width
		];

		let validMove = validMoves.includes(squareIdBeingReplaced)

		if (squareIdBeingReplaced && validMove) {
			squareIdBeingReplaced = null;
		} else if (squareIdBeingReplaced && !validMove) {
			squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced
			squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
		} else squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
	}

	function dragOver(e) {
		e.preventDefault();
		console.log(this.id, 'dragover');
	}

	function dragEnter(e) {
		e.preventDefault();
		console.log(this.id, 'dragenter')
	}

	function dragLeave() {
		console.log(this.id, 'dragend');
	}

	function dragDrop() {
		console.log(this.id, 'dragDrop');
		colorBeingReplaced = this.style.backgroundColor;
		squareIdBeingReplaced = parseInt(this.id);
		this.style.backgroundColor = colorBeingDragged
		squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced
	}

	// check for matches
	// check for row of four
	function checkRowForFour() {
		for (i = 0; i < 60; i++) {
			let rowOfFour = [i, i+1, i+2, i+3]
			let decidedColor = squares[i].style.backgroundColor
			const isBlank = squares[i].style.backgroundColor === ''

			if (rowOfThree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
				score += 3
				rowOfThree.forEach(index => {
					squares[index].style.backgroundColor = '';
				})
			}
		}
	}
	checkRowForThree();

	// check for column of three
	function checkColumnForThree() {
		for (i = 0; i < 47; i++) {
			let columnOfThree = [i, i + width, i + width * 2];
			let decidedColor = squares[i].style.backgroundColor
			const isBlank = squares[i].style.backgroundColor === ''

			const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55]
			if (notValid.includes(i)) continue

			if (columnOfThree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
				score += 3
				columnOfThree.forEach(index => {
					squares[index].style.backgroundColor = '';
				})
			}
		}
	}
	checkColumnForThree();
 // ================== till here this shit is working right now
	// check for row of three
	function checkRowForThree() {
		for (i = 0; i < 61; i++) {
			let rowOfThree = [i, i+1, i+2]
			let decidedColor = squares[i].style.backgroundColor
			const isBlank = squares[i].style.backgroundColor === ''

			if (rowOfThree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
				score += 3
				rowOfThree.forEach(index => {
					squares[index].style.backgroundColor = '';
				})
			}
		}
	}
	checkRowForThree();

	// check for column of three
	function checkColumnForThree() {
		for (i = 0; i < 47; i++) {
			let columnOfThree = [i, i + width, i + width * 2];
			let decidedColor = squares[i].style.backgroundColor
			const isBlank = squares[i].style.backgroundColor === ''

			const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55]
			if (notValid.includes(i)) continue

			if (columnOfThree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
				score += 3
				columnOfThree.forEach(index => {
					squares[index].style.backgroundColor = '';
				})
			}
		}
	}
	checkColumnForThree();

	window.setInterval(function (){
		checkRowForThree();
		checkColumnForThree();
	}, 100);
});