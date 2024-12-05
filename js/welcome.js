async function displaymessage() {
    const messageDiv = document.getElementById('message');
    await new Promise((resolve => setTimeout(resolve, 2000))
    messageDiv.textContent = 'welcome,Grace!';
    messageDiv.textContent = 'welcome, Grace!'
         
    })
}
window.addEventListener('load',displaymessage);