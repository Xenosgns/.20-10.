        window.addEventListener('load', function () {
            const audio = document.getElementById('backgroundMusic');
            audio.volume = 0.5;

            audio.play().catch(function (error) {
                console.log("Autoplay prevented. User interaction required.");
                document.addEventListener('click', function () {
                    audio.play();
                }, { once: true });
            });
        });

        function showQuestion() {
            const firstOverlay = document.getElementById('modalOverlay');
            firstOverlay.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                firstOverlay.style.display = 'none';
                document.getElementById('questionContent').style.display = 'block';
            }, 300);
        }

        function moveButton() {
            const noButton = document.getElementById('noButton');
            const buttonWidth = noButton.offsetWidth;
            const buttonHeight = noButton.offsetHeight;

            const maxX = window.innerWidth - buttonWidth - 20;
            const maxY = window.innerHeight - buttonHeight - 20;

            const randomX = Math.floor(Math.random() * (maxX - 20)) + 20;
            const randomY = Math.floor(Math.random() * (maxY - 20)) + 20;

            noButton.style.left = randomX + 'px';
            noButton.style.top = randomY + 'px';
            noButton.style.right = 'auto';
            noButton.style.transform = 'none';
        }

        function showLetter() {
            window.location.href = '/html/trangthu.html';
        }