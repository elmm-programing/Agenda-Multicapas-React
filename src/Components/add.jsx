import React from 'react'
const add = () => {
	return (
		<div class="section1">
			<h1>Agregar usuario</h1>
			<form id="form1">
				<h3>Nombre:</h3>
				<input type="text" name="nombre" id="nombre" placeholder="nombre" />
				<h3>Apellido:</h3>
				<input
					type="text"
					name="apellido"
					id="apellido"
					placeholder="apellido"
				/>
				<h3>Telefono:</h3>
				<input
					type="text"
					name="telefono"
					id="telefono"
					placeholder="telefono"
				/>
				<input type="submit" value="Insertar" />
			</form>
		</div>

	)
}

export default add
