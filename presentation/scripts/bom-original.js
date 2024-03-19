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

    li.textContent = item;
    
    deleteButton.textContent = '❌';
    
    deleteButton.addEventListener('click', function()        
    {
        deleteChapter(li.textContent);
        list.removeChild(li);
        input.focus();
    });

    li.append(deleteButton);
    list.append(li);

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