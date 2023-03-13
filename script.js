//your JS code here. If required.
function changeColor(id) {
			// Loop through all the squares
			for (var i = 1; i <= 3; i++) {
				// If the square is not the one being hovered over
				if (i !== id) {
					// Change its color
					document.getElementById("square" + i).style.backgroundColor = "#6F4E37"; //coffee
				}
			}
		}

		function resetColor(id) {
			// Loop through all the squares
			for (var i = 1; i <= 3; i++) {
				// If the square is not the one being hovered over
				if (i !== id) {
					// Reset its color
					document.getElementById("square" + i).style.backgroundColor = "#E6E6FA";
				}
			}
		}