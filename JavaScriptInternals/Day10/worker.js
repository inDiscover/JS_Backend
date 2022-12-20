function longRun(ms) {
    const start = new Date; // if constructor has no parameters you do not have to provide paranthesis
    while(new Date-start<ms);
}

onmessage = function(message) {
    console.log('main says', message)
    longRun(10000)
    postMessage(3.1415)
}