export default {
	async fetch(request, env, ctx) {
		const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- SEO Meta Tags -->
    <title>Are The Vibes Off?</title>
    <meta name="description" content="A definitive answer to a crucial question. The official website for determining if the vibes are, in fact, off.">
    <meta name="keywords" content="vibes, off, are the vibes off, vibe check, humor, minimalist">
    <meta name="author" content="builtbyvibes">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.arethevibesoff.com/"> <!-- Replace with your actual URL -->
    <meta property="og:title" content="Are The Vibes Off?">
    <meta property="og:description" content="A definitive answer to a crucial question.">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://www.arethevibesoff.com/"> <!-- Replace with your actual URL -->
    <meta property="twitter:title" content="Are The Vibes Off?">
    <meta property="twitter:description" content="A definitive answer to a crucial question.">

    <!-- Google Fonts Import -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet">

    <style>
        /* Basic Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Main Styles */
        html, body {
            height: 100%;
            width: 100%;
            -webkit-tap-highlight-color: transparent; /* Removes blue tap highlight on iOS */
        }

        body {
            background-color: #ffffff; /* White background */
            color: #333333; /* Softer black for text */
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            overflow: hidden; /* Prevents scrollbars */
            position: relative; /* Needed for footer positioning */
            cursor: pointer; /* Change cursor to indicate the page is clickable */
        }

        .container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        /* Using h1 for semantic importance and accessibility */
        h1.answer {
            font-family: 'Archivo Black', sans-serif; /* Block font */
            font-size: 15vw; /* Responsive font size */
            text-transform: uppercase;
            font-weight: 400; /* Archivo Black is already bold */
        }

        /* Animation for the "Vibe Shift" */
        @keyframes vibe-shift {
            0%, 100% { transform: translate(0, 0) rotate(0); }
            25% { transform: translate(-2px, 2px) rotate(-1deg); }
            50% { transform: translate(2px, -2px) rotate(1deg); }
            75% { transform: translate(-1px, 1px) rotate(0.5deg); }
        }

        .shake {
            animation: vibe-shift 0.3s ease-in-out;
        }


        .footer {
            position: absolute;
            bottom: 20px;
            width: 100%;
            text-align: center;
            opacity: 0; /* Hidden by default */
            transition: opacity 0.5s ease-in-out;
            font-size: 14px;
            pointer-events: none; /* Prevents footer from capturing mouse events when hidden */
        }

        /* Make footer visible and interactive ONLY when class is added */
        .footer.is-visible {
            opacity: 1;
            pointer-events: auto;
        }

        .footer a {
            color: #333333; /* Changed to match main text color */
            text-decoration: none; /* No underline */
            border-radius: 2px;
        }

        /* Accessibility: Clear focus state for keyboard navigation */
        .footer a:focus {
            outline: 2px dashed #333333; /* Updated outline to match text color */
            outline-offset: 3px;
        }

        /* Adjusting font size for larger screens */
        @media (min-width: 768px) {
            h1.answer {
                font-size: 120px; /* Fixed size for larger screens */
            }
        }
    </style>
</head>
<body>

    <div class="container">
        <main>
             <h1 class="answer">Yes</h1>
        </main>
    </div>

    <footer class="footer">
        <a href="https://www.builtbyvibes.com" target="_blank" rel="noopener noreferrer" aria-label="builtbyvibes (opens in a new tab)">@builtbyvibes</a>
    </footer>

    <script>
        // Using a more robust tap/click event listener that toggles visibility.
        document.addEventListener('DOMContentLoaded', () => {
            const footer = document.querySelector('.footer');
            const answerText = document.querySelector('.answer');
            const page = document.documentElement; // Represents the <html> element

            // Exit if elements aren't found
            if (!footer || !page || !answerText) {
                console.error("Required elements not found");
                return;
            }

            // Function to toggle the footer's visibility
            const toggleFooter = (event) => {
                // Do nothing if the click is on the link itself, allowing the link to work
                if (event.target.tagName === 'A') {
                    return;
                }

                // If footer is already visible, trigger the vibe shift
                if (footer.classList.contains('is-visible')) {
                    answerText.classList.add('shake');
                    // Remove the class after animation so it can be re-triggered
                    setTimeout(() => {
                        answerText.classList.remove('shake');
                    }, 300); // 300ms matches the animation duration
                }

                // Toggle the class on the footer
                footer.classList.toggle('is-visible');
            };

            // 'pointerup' is a modern event that handles mouse clicks, taps, and stylus events.
            // Attaching it to the root <html> element is very reliable.
            page.addEventListener('pointerup', toggleFooter);
        });
    </script>

</body>
</html>`;
		return new Response(html, {
			headers: {
				'Content-Type': 'text/html;charset=UTF-8',
			},
		});
	},
};
