$("#setaCima").hide();

		$("#esconder").hide();

		function amostrar() {
			$("#esconder").show('slow');

			$("#reticecia").hide();
			$("#BotaoAmostrar").hide('slow');

		}
		$("#fotoIngl")
				.click(
						function() {

							document.getElementById("apresentacao").innerHTML = "A CUJO, Mineral Society, Lda";
							document.getElementById("intro").innerHTML = " is an entity that deal with exploration of stones to construction of public infra-instructer end habilitaction.";

						});

		$("#fotoMoca")
				.click(
						function() {

							document.getElementById("apresentacao").innerHTML = "A CUJO, Sociedade Mineira, Lda";

							document.getElementById("intro").innerHTML = " é uma 			entidade vocaciondada na exploração de pedra para fins de construção de infra-estruturas publicas e de habilitação.";

						});

		$("document")
				.ready(
						function() {
							$("html").niceScroll();

							$(".eventoCaregar").hide();
							
							$("#empresa").slideUp(2000)
							$("#empresa").slideDown(2000);

							$(".eventoCaregar").show(4000);

							$(window).scroll(function() {
								if ($(this).scrollTop() > 200) {
									$("#setaCima").show('slow');

									$("#BotaoAmostrar").show('show');
									$("#esconder").hide('slow');
									$("#reticecia").show('slow');

								} else {
									$("#setaCima").hide('slow');
								}

								if ($(window).scrollTop() > 150) {

									$("p li").addClass("animated bounce");

								}
							});
							
							$('#noticia').tooltip('enable');

						});
/** 
 * scroll
 * */
$('a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 1500);
});

$("#fotoMoca")
.hover(
		function() {

			$("#fotoMoca")
					.attr('src',
							'/projectovenda/javax.faces.resource/moz.png.jsf?ln=img');
		});
$("#fotoMoca")
.hover(
function() {

	$("#fotoMoca")
			.attr('src',
					'img/moz.png');
});
$("#fotoMoca")
.mouseleave(
function() {

	$("#fotoMoca")
			.attr('src',
					'img/mocambique.gif');
});

$("#fotoIngl")
.hover(
function() {

	$("#fotoIngl")
			.attr('src',
					'img/ingla.jpg');
});

$("#fotoIngl")
.mouseleave(
function() {

	$("#fotoIngl")
			.attr('src',
					'img/en.gif');
});

var arrayIdsElementsPage = new Array;



/**
 * Carrega um array global com os ids de todos os componentes da pagina Para ter
 * faciliades em obtencao de valores dos componentes bem como trabalhar com ajax
 */
function carregarIdElementosPagina() {
	 arrayIdsElementsPage = new Array;
	 for (form = 0 ; form <= document.forms.length; form++){
		 var formAtual = document.forms[form];
		 if (formAtual != undefined) {
			 for (i = 0; i< document.forms[form].elements.length; i++){
				 if(document.forms[form].elements[i].id != '') {
					 arrayIdsElementsPage[i] = document.forms[form].elements[i].id;
				 }
			 }	
		 }
	 }
}


/**
 * Retorno o valor do id do componente dentro do documento html passando como
 * parametro a descri��o do id declarada em jsf
 * 
 * @param id
 */
function getValorElementPorId(id) {
	 carregarIdElementosPagina();
	 for (i = 0; i< arrayIdsElementsPage.length; i++){
		 var valor =  ""+arrayIdsElementsPage[i];
		 if (valor.indexOf(id) > -1) {
			return valor;
	}
  }	
	 return idundefined;
}


function logout(contextPath) {
	
	var post = 'invalidar_session';
	
	$.ajax({
		type:"POST",
		url: post
	}).always(function(resposta) { 
		document.location = contextPath + '/j_spring_security_logout';
	});
	
}

function mudarPagina(id) {
	
	post="";
	if(id=='contacto'){
		post=id;
	}
	$.ajax({
		type:"POST",
		url: '/'+post
	}).always(function(resposta) { 
		
	});
	
}


function invalidarSession(context, pagina) {
	document.location = (context + pagina + ".jsf");
}

function validarSenhaLogin() {

	j_username = document.getElementById("j_username").value;
	j_password = document.getElementById("j_password").value;

	if (j_username === null || j_username.trim() === '') {
		alert("Informe o Login.");
		$('#j_username').focus();
		return false;
	}

	if (j_password === null || j_password.trim() === '') {
		alert("Informe a Senha.");
		$('#j_password').focus();
		return false;
	}

	return true;

}


function abrirMenupop() {
	$("#menupop").show('slow').mouseleave(function() {
		fecharMenupop();
	});
}

function fecharMenupop() {
	if ($("#menupop").is(":visible")){
		$("#menupop").hide("slow");
	}
}

function redirecionarPagina(context, pagina) {
	pagina = pagina + ".jsf";
	document.location = context + pagina;
}
function redirecionarPaginaAqui(context, pagina) {
	document.location = context + pagina;
}

function localeData_pt_br() {
	PrimeFaces.locales['pt'] = {
		closeText : 'Fechar',
		prevText : 'Anterior',
		nextText : 'Pr�ximo',
		currentText : 'Come�o',
		monthNames : [ 'Janeiro', 'Fevereiro', 'Marcio', 'Abril', 'Maio',
				'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro',
				'Dezembro' ],
		monthNamesShort : [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul',
				'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
		dayNames : [ 'Domingo', 'Segunda', 'Ter�a', 'Quarta', 'Quinta',
				'Sexta', 'S�bado' ],
		dayNamesShort : [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S�b' ],
		dayNamesMin : [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
		weekHeader : 'Semana',
		firstDay : 0,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : '',
		timeOnlyTitle : 'S�o Horas',
		timeText : 'Tempo',
		hourText : 'Hora',
		minuteText : 'Minuto',
		secondText : 'Segundo',
		ampm : false,
		month : 'M�s',
		week : 'Semana',
		day : 'Dia',
		allDayText : 'Todo o Dia'
	};

}

function initTamplete() {
	$(document).ready(function() {
		  $('#menupop').hide();
		  $('#barramenu').hide();
		  $('#barramenu').css("left", "-170px");
		  $('#iniciarmenu').click(function() {
		  	if ($('#barramenu').is(':visible')) {
		  	  ocultarMenu();
			  	 $('#corpo').animate({"padding-left":"10px"}, "slow");

		  	} else {
		  	  $('#barramenu').show();
		  	  $('#barramenu').animate({"left":"0px"}, "slow");
		  	 $('#corpo').animate({"padding-left":"170px"}, "slow");
		  	  
		  	}
		  });
		});
	}


function ocultarMenu() {  
	  $('#barramenu').animate({"left":"-200px"}, "slow", function() {
	  	$('#barramenu').hide();
	  });
	}


function addFocoCampo(campo) {
	var id = getValorElementPorId(campo);
	if (id != undefined){
		document.getElementById(getValorElementPorId(id)).focus();
	}
}

function gerenciaTeclaEnter() {
	
	$(document).ready(function() {
		$('input').keypress(function(e) {
			var code = null;
			code = (e.keyCode ? e.keyCode : e.which);
			return (code === 13) ? false : true;

		});

		$('input[type=text]').keydown(function(e) {
			// Obter o pr�ximo �ndice do elemento de entrada de texto
			var next_idx = $('input[type=text]').index(this) + 1;

			// Obter o n�mero de elemento de entrada de texto em um documento html
			var tot_idx = $('body').find('input[type=text]').length;

			// Entra na tecla no c�digo ASCII
			if (e.keyCode === 13) {
				if (tot_idx === next_idx)
					// V� para o primeiro elemento de texto
					$('input[type=text]:eq(0)').focus();
				else
					// V� para o elemento de entrada de texto seguinte
					$('input[type=text]:eq(' + next_idx + ')').focus();
			}
		});
	});
	
}

