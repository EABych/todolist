$(document).ready(function () {



// активирует/деактивирует кнопку + в зависимости от наличия текста в поле ввода
    $('#title1').keyup(function(){
        var a = document.getElementById("title1").value.replace(/\s+/g,'');
          if(a.length > 0) {
            $('#knopochka').removeAttr('disabled'); 
            } else {       
            $('#knopochka').attr('disabled', 'disabled')          
            ;
        }
      });

// добавляет значение в список с enter клавиатуры
// + проверяет и не пускает пустые строчки для дабавления
// + деактивирует обратно кнопку + 
// + отчищает поля ввода
// + добавляет кнопку "отчистить список", при наличии хотя бы одной записи
      $("#title1").keyup(function(event){
        if(event.keyCode == 13){
            var copyVal = document.getElementById("title1").value;

            var a = document.getElementById("title1").value.replace(/\s+/g,'');
              if(a.length > 0) {
                $('#knopochka').removeAttr('disabled'); 
                $(".todo__list").append(`<li class="item">
                    <label>
                        <input type="checkbox" class="checkbox">
                        <div> ${copyVal} </div>
                        <input type="submit" class="edit" value="" style.display = "">
                        <input type="submit" class="delete" value="" style.display = ""> 
                    </label>
                </li>`);

                var spis = document.getElementById('todoList').childNodes.length -1;
                    if(spis > 0) {
                    document.getElementById("deliteList").style.display = ""; 
                    } else {       
                    document.getElementById("deliteList").style.display = "none";
                    }
                    document.getElementById("title1").value = "";
                    $('#knopochka').attr('disabled', 'disabled');
        } 
    
        }
    });






    
    $('.edit').on('click', function(){
        $(this).closest('div').css('color', 'red');
        document.getElementsByClassName(".edit").style.display = "none";
        document.getElementsByClassName(".delete").style.display = "none";


    });




    $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $('.item'); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                    $('.item').closest('div').attr('contenteditable','false');// скрываем его
            }
    });



//  удаляет по нажатию кнопки в li
    $('#todoList').on('click', '.delete',function(){
        $(this).closest('.item').remove();
        var  activ = ($("input:checkbox:checked").length);   
        if (activ == 0) {
        document.getElementById("deliteList2").style.display = "none";}

        var spis = document.getElementById('todoList').childNodes.length -1;
        if(spis > 0) {
        document.getElementById("deliteList").style.display = ""; 
        } else {       
        document.getElementById("deliteList").style.display = "none";
        } 
        
        var  activ = ($("input:checkbox:checked").length);   
        if (activ == 0) {
        document.getElementById("deliteList2").style.display = "none";
        } else {
            $('#deliteList2').text('Удалить выбранные (' + activ + ")");
        };

    });












    

// все тоже самое, что и enter, только с кнопки 
    $('.knopka').on('click', function () {
        var copyVal = document.getElementById("title1").value;
        
        $(".todo__list").append(`<li class="item"><label>
            <input type="checkbox" class="checkbox">
            <div> ${copyVal} </div>
            <input type="submit" class="edit" value="" style.display = "">
            <input type="submit" class="delete" value="" style.display = ""> 
        </label></li>`);
        document.getElementById("title1").value = "";

        var a = document.getElementById("title1").value.replace(/\s+/g,'');
          if(a.length > 0) {
            $('#knopochka').removeAttr('disabled'); 
            } else {       
            $('#knopochka').attr('disabled', 'disabled');
        }

        var spis = document.getElementById('todoList').childNodes.length -1;
        if(spis > 0) {
        document.getElementById("deliteList").style.display = ""; 
        } else {       
        document.getElementById("deliteList").style.display = "none";
        }
    });     
    
// удаляет весь список
    $('#deliteList').on('click', function() {
        $('ul li').remove();
        document.getElementById("deliteList").style.display = "none";
        document.getElementById("deliteList2").style.display = "none";
    });

// зачеркивает или возвращает обычный вид в зависимости от значения checkbox
// + добавляет на кнопку "удалить выбранные" количество выбраннх checkbox
// + убирает кнопку "удалить выбранные", если нет ниодного выбранного пункта списка
    $(document).on( 'change', 'input[type="checkbox"]', function() {

        var  activ = ($("input:checkbox:checked").length);   
        if (activ == 0) {
        document.getElementById("deliteList2").style.display = "none";
        } else {
            $('#deliteList2').text('Удалить выбранные (' + activ + ")");
        };


        if ($(this).prop('checked') == false){
        $(this).closest('label').css("text-decoration", "none");
        } else {
        $(this).closest('label').css("text-decoration", "line-through");
        document.getElementById("deliteList2").style.display = "";    
        }
    });

// удаляет выбранные элементы
// + убирает кнопку "удалить выбранные"
// + проверяет, если после удаления выбранных ни осталось не одного пункта. убирает кнопку "отчистить список"
    $('#deliteList2').on('click', function() {
        if($(".checkbox:checked")) {
            $(".checkbox:checked").closest('.item').remove();
            document.getElementById("deliteList2").style.display = "none" ;

            var spis = document.getElementById('todoList').childNodes.length -1;
                if(spis > 0) {
                document.getElementById("deliteList").style.display = ""; 
                } else {       
                document.getElementById("deliteList").style.display = "none";
                }                      
        } 

    });




        
    
});
