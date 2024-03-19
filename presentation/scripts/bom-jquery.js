const input = $('#favchap');
const button = $('button');
const list = $('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.click(function() {
    if (input.val() != '')
    {
        displayList(input.val());
        chaptersArray.push(input.val());
        setChapterList();
        input.val('').focus();
        // Combined into one line
    }

    else
    {
        input.focus();
    }
});

function displayList(item)
{
    let li = $('<li></li>');
    let deleteButton = $('<button>❌</button>');

    li.text(item);
    
    // deleteButton.textContent = '❌';
    
    deleteButton.click(function()
    {
        deleteChapter(li.text());
        li.remove();
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