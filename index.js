$(document).ready(function () {

    function addElemToList () {
    var copyVal = document.getElementById("title1").value;
    copyVal = copyVal.replace(/[<]/g, '‹');
    copyVal = copyVal.replace(/[>]/g, '›');



    var a = document.getElementById("title1").value.replace(/\s+/g,'');
        if(a.length > 0) {
        $('#knopochka').removeAttr('disabled'); 
        $(".todo__list").append(`<li class="item">
                <input type="checkbox" class="checkbox">
                <span class='spanClass'>${copyVal}</span>
                <input type="submit" class="delete" value="" style="display:none;">
            </li>`);

           
            

        var spis = document.getElementById('todoList').childNodes.length - 2 ;
            if(spis > 0) {
            document.getElementById("deliteList").style.display = ""; 
            document.getElementById("deliteList3").style.display = ""; 
            } else {       
            document.getElementById("deliteList").style.display = "none";
            document.getElementById("deliteList3").style.display = "none";
            }

        $('#knopochka').attr('disabled', 'disabled');    
        $('#title1').val("");
        
        $('li').off('dblclick').on("dblclick", function(){
            var i = 0;
            var n = 0
            if ($(this).children('.checkbox').prop('checked') == true){   
                $(this).closest('.item').css("text-decoration", "none");
                i += 1;
                n = $(this).closest('.item');
            };
            
                
            $(this).children('.delete').css("display", "none");
            $(this).children('.checkbox').css("display", "none");
            $(this).attr('contenteditable','true');
            $(this).children('span').css("margin-left", "24px");
            $(this).focus(); 

            $(document).mouseup(function (e){ 
                var perem = $(this);
                var perem1 = $(this).children('.delete');
                var perem2 = $(this).children('.checkbox');

                    if (!perem.is(e.target) && !perem1.is(e.target) && !perem2.is(e.target)) { 
                            $('li').attr('contenteditable','false');
                            $('.delete').css("display", "none");
                            $('.checkbox').css("display", "");
                            $('span').css("margin-left", "0");
                            if (i==1) {n.css("text-decoration", "line-through");}
                            i =0;
                            n =0;
                    }
            });
        });

        $('li').mouseenter(function(){
            $(this).children('.delete').css("display", "");
            
        });

        $('li').mouseleave(function(){
            $(this).children('.delete').css("display", "none");
        });


    }
    }


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
            addElemToList ();
            $(".task").prop("placeholder", "Что еще добавим?");
        }
    });

    // все тоже самое, что и enter, только с кнопки 
    $('.knopka').on('click', function(){
        addElemToList();
        $(".task").prop("placeholder", "Что еще добавим?");
    });


    //  удаляет по нажатию кнопки в li
    $('#todoList').on('click', '.delete',function(){
        $(this).closest('.item').remove();
        var  activ = ($("input:checkbox:checked").length);   
        if (activ == 0) {
        document.getElementById("deliteList2").style.display = "none";}

        var spis = document.getElementById('todoList').childNodes.length -2;
        if(spis == -1) {$(".task").prop("placeholder", "Может составим новый список?");
        document.getElementById("deliteList3").style.display = "none";} else

        if(spis > 0) {
        document.getElementById("deliteList").style.display = ""; 
        document.getElementById("deliteList3").style.display = "";
        } else {       
        document.getElementById("deliteList").style.display = "none";
        document.getElementById("deliteList3").style.display = "none";

        } 
        
        var  activ = ($("input:checkbox:checked").length);   
        if (activ == 0) {
        document.getElementById("deliteList2").style.display = "none";
        } else {
            $('#deliteList2').text('Удалить выбранные (' + activ + ")");
        };

    });
         
    // удаляет весь список
    $('#deliteList').on('click', function() {
        $('ul li').remove();
        document.getElementById("deliteList").style.display = "none";
        document.getElementById("deliteList2").style.display = "none";
        document.getElementById("deliteList3").style.display = "none";
        $(".task").prop("placeholder", "Может составим новый список?");
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
        $(this).closest('.item').css("text-decoration", "none");
        } else {
        $(this).closest('.item').css("text-decoration", "line-through");
        document.getElementById("deliteList2").style.display = "";    
        };

        var  activ2 = ($("input:checkbox:checked").length);

        var spis2 = document.getElementById('todoList').childNodes.length - 1;   
        if (activ2 == spis2) {
        document.getElementById("deliteList3").style.display = "none";
        } else {
        document.getElementById("deliteList3").style.display = "";
        }

        var spis = document.getElementById('todoList').childNodes.length - 2 ;
        if(spis > 0) {
        document.getElementById("deliteList").style.display = ""; 
        document.getElementById("deliteList3").style.display = ""; 
        } else {       
        document.getElementById("deliteList").style.display = "none";
        document.getElementById("deliteList3").style.display = "none";
        }

    });

    // удаляет выбранные элементы
    // + убирает кнопку "удалить выбранные"
    // + проверяет, если после удаления выбранных ни осталось не одного пункта. убирает кнопку "отчистить список"
    $('#deliteList2').on('click', function() {
        if($(".checkbox:checked")) {
            $(".checkbox:checked").closest('.item').remove();
            document.getElementById("deliteList2").style.display = "none" ;

            var spis = document.getElementById('todoList').childNodes.length -2;
            console.log(spis);
            if(spis == -1) {$(".task").prop("placeholder", "Может составим новый список?");
            document.getElementById("deliteList").style.display = "none";
            } else 
                   if(spis > 0) {
                document.getElementById("deliteList").style.display = "";
                document.getElementById("deliteList3").style.display = "";
                } else {       
                document.getElementById("deliteList").style.display = "none";
                document.getElementById("deliteList3").style.display = "none";
                }                      
        } 

    });

    $('#deliteList3').on('click', function() {
        $('body input:checkbox').prop('checked', true);
        var  activ = ($("input:checkbox:checked").length);
        document.getElementById("deliteList2").style.display = "";
        $('#deliteList2').text('Удалить выбранные (' + activ + ")");
        document.getElementById("deliteList3").style.display = "none";

        $('.item').css("text-decoration", "line-through")
        $('.delete').css("display", "none")

    });




        

});


