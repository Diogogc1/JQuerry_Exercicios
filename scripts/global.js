/*
    Exercícios - JQuerry
    Nome: Diogo Gomes Castro
    Curso: ADS - 3° Período
*/

//EXERCÍCIO 1
$("button:first").click(
    function(){
        $("section:first > p:last").text("Estou estudando JQuery!");
    }
)

//EXERCÍCIO 2
$("button:eq(1)").click(
    function(){
        $("section:eq(1) > p:last").slideToggle();
    }
)

//EXERCÍCIO 3
var id;

$("body li").click(
    function() {
        id = $(this).attr("id");
        
        if(id == "li1" || id == "li2" || id == "li3")
        {
            $("." + id).slideToggle();
        }
    }
)

//EXERCÍCIO 4
$("button:eq(2)").click(
    function(){
        var enviar = true;

        //NOME
        var nome = $("#nome").val()

        $(".erro:first-of-type").text("");
        $(".erro:eq(1)").text("");
        $(".erro:eq(2)").text("");
        
        for(var i=0; i < nome.length; i++)
        {
            if(nome[i] == " ")
            {
                $(".erro:first-of-type").text("O nome não pode conter espaços!")
                enviar = false;
            }
        }

        if(nome.length > 40 || nome.length < 5)
        {
            $(".erro:eq(1)").text("O nome deve conter no mínimo 5 caracteres e no máximo 40!")
            enviar = false;
        }

        //ENDEREÇO
        var ender = $("#ender").val();

        //Remove espaços ao redor
        ender = ender.trim();

        var words = ender.split(" ");

        if(words.length <= 1 || ender.length == 0)
        {
            $(".erro:eq(2)").text("O endereço não pode estar em branco e deve conter no mínimo 2 palavras!")
            enviar = false;
        }

        if (enviar == true) {
            setTimeout(function() {
                alert("Formulário enviado!");
            }, 0);
        }        
    }
)

//EXERCÍCIO 5
var imgs = [
    "images/jquerry_img.jpg",
    "images/sass_img.png",
    "images/bootstrap_img.png",
    "images/Typescript_img.png",
    "images/react_img.png"
]

var index = 0;

$("#prox").click(function(){
        index = (index + 1) % imgs.length;
        $("img").attr("src", imgs[index]).hide().fadeIn("slow");
})

$("#ant").click(function(){
    index = ((index - 1) + imgs.length) % imgs.length;
    $("img").attr("src", imgs[index]).hide().fadeIn("slow");;
})