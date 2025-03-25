class MainComponent {
    render() {
        const appDiv = document.getElementById('app');
        if (appDiv) {
            appDiv.innerHTML = '<h1>Welcome to My App!</h1>';
        } else {
            console.error('App div not found!');
        }
    }
}

export default MainComponent;

const app = new MainComponent();
app.render();