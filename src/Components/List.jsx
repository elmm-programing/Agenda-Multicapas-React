import React from 'react'
const list = () => {
	return (
		<div class="section2">
			<h1 class="table-h1">Lista de Usuarios</h1>
			<div class="tbl-header">
				<table cellpadding="0" cellspacing="0" border="0">
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Apellido</th>
							<th>Telefono</th>
						</tr>
					</thead>
				</table>
			</div>
			<div class="tbl-content">
				<table cellpadding="0" cellspacing="0" border="0">
					<tbody id="contenido"></tbody>
				</table>
			</div>
		</div>

	)
}

export default list
