function showPage(pageName) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            const navButtons = document.querySelectorAll('.nav-links button');
            navButtons.forEach(btn => btn.classList.remove('active'));
            const selectedPage = document.getElementById(pageName);
            selectedPage.classList.add('active');
            const activeButton = document.querySelector(`[data-page="${pageName}"]`);
            if (activeButton) activeButton.classList.add('active');
            const pageContent = selectedPage.querySelector('.page-content');
            pageContent.classList.remove('active');
            setTimeout(() => pageContent.classList.add('active'), 50);
            window.scrollTo(0, 0);
        }
        function createShapes() {
            const container = document.getElementById('bg-shapes');
            const shapeCount = 15;
            for (let i = 0; i < shapeCount; i++) {
                const shape = document.createElement('div');
                shape.className = 'shape';
                const size = Math.random() * 200 + 50;
                shape.style.width = `${size}px`;
                shape.style.height = `${size}px`;
                shape.style.left = `${Math.random() * 100}%`;
                shape.style.bottom = `-${size}px`;
                shape.style.animationDelay = `${Math.random() * 2}s`;
                shape.style.animationDuration = `${Math.random() * 20 + 10}s`;
                container.appendChild(shape);
            }
        }
        window.addEventListener('load', createShapes);