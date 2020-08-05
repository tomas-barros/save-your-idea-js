const mainTaxt = 'I can remind your task!',
    // dom objects
    inputIdea = document.getElementById('inputIdea')
    ;

var 
    contentInput = '';
    task = localStorage.getItem('content');

// init
inputIdea.value = task;

inputIdea.addEventListener('click', function(e) {
    inputIdea.value = '';
});

inputIdea.addEventListener('keyup', function(e) {
    contentInput = inputIdea.value;
    // debug
    console.log(contentInput);

    //storage
    localStorage.setItem('content', contentInput);
    
});