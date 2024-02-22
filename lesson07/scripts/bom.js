const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function() {
    if (input.value != '')
    {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';    
        input.focus();
    }

    else
    {
        input.focus();
    }
});

function displayList(item)
{
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    let lockButton = document.createElement('button');

    li.textContent = item;
    
//    lockButton.textContent = '🔓';
    deleteButton.textContent = '❌';
    
//    li.append(lockButton);
    li.append(deleteButton);
    list.append(li);

/*
    lockButton.addEventListener('click', function()
    {
        if (lockButton.textContent == '🔓')
        {   
            lockButton.textContent = '🔒';
            deleteButton.textContent = '✖️';
        }
        else
        {
            lockButton.textContent = '🔓';
            deleteButton.textContent = '❌';                
        }
    });
*/
    deleteButton.addEventListener('click', function()        
    {
        if (deleteButton.textContent == '❌')
        {
            deleteChapter(li.textContent);
            list.removeChild(li);
            input.focus();
        }
        else
        {
            deleteButton.addEventListener('click', function()
            {
            input.focus()
            });
        }
    });
}

function setChapterList()
{
    localStorage.setItem('favBOMVerses', JSON.stringify(chaptersArray));
}

function getChapterList()
{
    return JSON.parse(localStorage.getItem('favBOMVerses'));    
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}