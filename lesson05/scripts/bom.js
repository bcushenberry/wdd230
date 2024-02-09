const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value != '')
    {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        const lockButton = document.createElement('button');

        li.textContent = input.value;
        
        lockButton.textContent = '🔓';
        deleteButton.textContent = '❌';
        
        li.append(lockButton);
        li.append(deleteButton);
        list.append(li);

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

        deleteButton.addEventListener('click', function()        
        {
            if (deleteButton.textContent == '❌')
            {
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

        input.focus();
        input.value = '';
    }
    else
    {
        input.focus();
    }
});