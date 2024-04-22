const colors = ["red", "blue", "green", "yellow", "purple", "brown", "lemon", "black", "gold"];
        let currentIndex = 0;
        const colorDisplay = document.getElementById("colorDisplay");
        const nextButton = document.getElementById("nextButton");

        function displayColor() {
            colorDisplay.style.backgroundColor = colors[currentIndex];
        }

        function nextColor() {
            currentIndex = (currentIndex + 1) % colors.length;
            displayColor();
        }

        function prevColor() {
            currentIndex = (currentIndex - 1) % colors.length;
            displayColor();
        }

        nextButton.addEventListener("click", nextColor);
        prevButton.addEventListener("click", prevColor);

        
        displayColor();