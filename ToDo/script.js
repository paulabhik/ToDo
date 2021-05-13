$(() => {
    let ulTasks = $('#ulTasks')
    let btnAdd = $('#btnAdd')
    let btnClear = $('#btnClear')
    let inpNewTask = $('#inpNewTask')
    let btnCleanup = $('#btnCleanup')
    let btnSort = $('#btnSort')
    let span = $('#info')

    btnAdd.click(() => {
        let listItem = $('<li>', {
            'class': 'list-group-item',
            text: inpNewTask.val()
        })
        ulTasks.append(listItem)
        inpNewTask.val("")
        btnCleanup.prop('disabled',  ulTasks.children().length == 0)
        btnSort.prop('disabled',  ulTasks.children().length == 0)
        btnClear.prop("disabled", true)
        btnAdd.prop("disabled", true)
        span.prop('hidden', ulTasks.children().length != 0)
    })
    btnClear.click(() => {
        inpNewTask.val("")
    })

    ulTasks.click((event) => {
        let listItem = $(event.target);
        listItem.toggleClass('done')
        
    })

    inpNewTask.keypress((event) => {
        if (event.which === 13){
            let listItem = $('<li>', {
                'class': 'list-group-item',
                text: inpNewTask.val()
            })
            ulTasks.append(listItem)
            inpNewTask.val("")
           // console.log( ulTasks.children());
            btnClear.prop("disabled", true)
            btnAdd.prop("disabled", true)
            btnCleanup.prop('disabled',  ulTasks.children().length == 0)
            btnSort.prop('disabled',  ulTasks.children().length == 0)
            span.prop('hidden', ulTasks.children().length != 0)
        }
    })

    inpNewTask.on('input', () => {
       // console.log(inpNewTask.val() == "")
        if (inpNewTask.val() != ""){
            btnClear.prop("disabled", false)
            btnAdd.prop("disabled", false)
        }
        else if (inpNewTask.val() == ""){
            btnClear.prop("disabled", true)
            btnAdd.prop("disabled", true)
        } 
    })

    btnCleanup.click(() => {
      /*  let done  = document.getElementsByClassName('done')
        let N = done.length
        for (let i = 0; i < N; i++){
            done[0].remove()
        }*/

        $('#ulTasks .done').remove()
        btnCleanup.prop('disabled',  ulTasks.children().length == 0)
        btnSort.prop('disabled',  ulTasks.children().length == 0)
        span.prop('hidden', ulTasks.children().length != 0)
    })

    btnSort.click(() => {
        let after = $('#ulTasks .done')
        $('#ulTasks .done').remove()
        let N = after.length
        for (let i = 0; i < N; i++){
            ulTasks.append(after[i])
        }
        
    })

})