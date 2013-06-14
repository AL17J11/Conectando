// JavaScript Document
function LoginConectar (U, P)
{
	datos="usuario="+U+"&password="+P;
	$.ajax({
		type:"POST",
		url:"http://192.168.1.167/Sitio6/Login_in_m.php",
		data:datos
	}).done(function(msg){
		alert(msg);
		if(msg=="" || msg==null)
		{
			alert("usuario incorrecto");}
			else
			{
				var OUsuario=jQuery.parseJSON(msg);
				ID_Usuario=OUsuario.Usuario;
				alert("Bienvenido "+ID_Usuario);
				location.href="#Busqueda";
			}
	});
}
	$(document).ready(function(e){
		document.addEventListener("deviceready",function(){
			$('.Enviar').tap(function(){
				alert("si entra")
				var formulario=$(this).parents('form');
				var usuario=document.getElementById('Usuario').value;
				var password=document.getElementById('Password').value;
				LoginConectar(usuario,password);
			});
		});
	});
