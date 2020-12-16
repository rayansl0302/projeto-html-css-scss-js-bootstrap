$(function(){
	function Adicionar(){
		$("#tblCadastro tbody").append(
			"<tr>"+
			"<td><input type='text'/></td>"+
			"<td><input type='text'/></td>"+
			"<td><input type='text'/></td>"+
			"<td><input type='text'/></td>"+
			"<td><img src='images/disk.png' class='btnSalvar'><img src='images/delete.png' class='btnExcluir'/></td>"+
			"</tr>");

		$(".btnSalvar").bind("click", Salvar);     
		$(".btnExcluir").bind("click", Excluir);
	};

	function Salvar(){
		var par = $(this).parent().parent(); //tr
		var tdNome = par.children("td:nth-child(1)");
		var tdEmail = par.children("td:nth-child(2)");
		var tdCPF = par.children("td:nth-child(3)");
		var tdEmpresa = par.children("td:nth-child(4)");
		var tdBotoes = par.children("td:nth-child(5)");

		tdNome.html(tdNome.children("input[type=text]").val());
		tdEmail.html(tdEmail.children("input[type=text]").val());
		tdCPF.html(tdCPF.children("input[type=text]").val());
		tdEmpresa.html(tdEmpresa.children("input[type=text]").val());		
		tdBotoes.html("<img src='images/delete.png'class='btnExcluir'/><img src='images/pencil.png' class='btnEditar'/>");

		$(".btnEditar").bind("click", Editar);
		$(".btnExcluir").bind("click", Excluir);
	};

	function Editar(){
		var par = $(this).parent().parent(); //tr
		var tdNome = par.children("td:nth-child(1)");
		var tdEmail = par.children("td:nth-child(2)");
		var tdCPF = par.children("td:nth-child(3)");
		var tdEmpresa = par.children("td:nth-child(4)");
		var tdBotoes = par.children("td:nth-child(5)");

		tdNome.html("<input type='text' id='txtNome' value='"+tdNome.html()+"'/>");
		tdEmail.html("<input type='text' id='txtEmail' value='"+tdEmail.html()+"'/>");
		tdCPF.html("<input type='text'id='txtCPF' value='"+tdCPF.html()+"'/>");	
		tdEmpresa.html("<input type='text' id='txtEmpresa' value='"+tdEmpresa.html()+"'/>");	
		tdBotoes.html("<img src='images/disk.png' class='btnSalvar'/>");

		$(".btnSalvar").bind("click", Salvar);
		$(".btnEditar").bind("click", Editar);
		$(".btnExcluir").bind("click", Excluir);
	};

	function Excluir(){
	    var par = $(this).parent().parent(); //tr
	    par.remove();
	};

	$(".btnEditar").bind("click", Editar);
	$(".btnExcluir").bind("click", Excluir);
	$("#btnAdicionar").bind("click", Adicionar); 
});
