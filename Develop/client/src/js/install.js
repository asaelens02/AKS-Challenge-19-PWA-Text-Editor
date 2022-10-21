const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    //store event
    window.deferredPrompt= event;
    //unhide button
    butInstall.classList.toggle ('hidden',false);

});
// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const beginEvent = window.deferredPrompt;
    console.log ('button click')
    if (!beginEvent) {
        return;
    }
    //call function
    beginEvent.prompt();

    //reset and hide button
    window.deferredPrompt = null;
    butInstall.classList.toggle ('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

    //clear
    window.deferredPrompt = null;
});
