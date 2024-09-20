class ParallaxScroll {
    constructor(textContent, imageUrl) {
        this.textContent = textContent;
        this.imageUrl = imageUrl;
        this.init();
    }

    init() {
        // Create a container for the parallax effect
        const container = document.createElement('div');
        document.body.appendChild(container);
        
        this.createParallaxSection(container);
        this.createContentSection(container);
    }

    createParallaxSection(container) {
        const parallaxDiv = document.createElement('div');
        parallaxDiv.className = 'parallax';
        parallaxDiv.style.backgroundImage = `url('${this.imageUrl}')`;
        container.appendChild(parallaxDiv);
    }

    createContentSection(container) {
        const contentDiv = document.createElement('div');
        contentDiv.className = 'content';

        contentDiv.innerHTML = this.textContent;

        container.appendChild(contentDiv);
    }
}

// Usage
const textContent = `
    <h1>Welcome to Parallax Scrolling</h1>
    <p>Scroll down to see the effect.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Quisque sit amet accumsan arcu.</p>
    <p>Proin in libero ut nisl interdum vehicula.</p>
    <p>Scroll back up to see the parallax effect again.</p>
`;

const parallaxScroll = new ParallaxScroll(textContent, './05.jpg');
const parallaxScroll2 = new ParallaxScroll(textContent, './10.jpg');
