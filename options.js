let page = document.getElementById('buttonContainer');
const buttonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructorOptions(buttonColors) {
    for (let color of buttonColors) {
        let button = document.createElement('button');
        button.style.backgroundColor = color;
        button.addEventListener('click', () => {
            chrome.storage.sync.set({color: color}, () => {
                console.log(`color is ${color}`);
            });
        });
        page.appendChild(button);
    }
}
constructorOptions(buttonColors);