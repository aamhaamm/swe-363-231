let timeout;
const screensaverElement = document.getElementById('screensaver');

function resetTimer() {
    clearTimeout(timeout);
    screensaverElement.style.display = 'none';
    timeout = setTimeout(showScreensaver, 60000);
}

function showScreensaver() {
    screensaverElement.style.display = 'block';
    initScreensaver();
}

function initScreensaver() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    screensaverElement.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    camera.position.z = 30;

    function animate() {
        requestAnimationFrame(animate);
        torusKnot.rotation.x += 0.01;
        torusKnot.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}

document.addEventListener('mousemove', resetTimer);
document.addEventListener('keypress', resetTimer);

resetTimer();
