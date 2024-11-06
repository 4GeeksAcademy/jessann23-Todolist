import React, { useState } from "react";

const Home = () => { 
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);

	const manejarCambio = (e) => {
		setTarea(e.target.value);
	};

	const agregarTarea = () => {
		if (tarea.trim() !== "") {
			setLista(lista.concat(tarea));
			setTarea(""); 
		}
	};

	const eliminarTarea = (index) => {
		const nuevaLista = lista.filter((item, i) => i !== index);
		setLista(nuevaLista);
	};

	return (
		<div className="w-100 d-flex flex-column align-items-center">
			<h1 className="mb-4" style={{ color: "green" }}>Lista de Tareas</h1>

			<div className="mb-3" style={{ width: "50%" }}>
				<input
					value={tarea}
					type="text"
					className="form-control"
					id="exampleFormControlInput1"
					placeholder="¿Qué vas a hacer hoy?"
					onChange={manejarCambio}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							agregarTarea();
						}
					}}
				/>
			</div>

			<ul className="list-group" style={{ width: "50%" }}>
				{lista.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between align-items-center"
							style={{
								backgroundColor: "grey-light",
								borderRadius: "10px",
								boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
								marginBottom: "10px",
								padding: "15px",
								transition: "background-color 0.3s ease",
							}}
						>
							<span>{item}</span>
							<button 
								className="btn btn-danger btn-sm" 
								onClick={() => eliminarTarea(index)}
								style={{
									borderRadius: "50%",
									width: "30px",
									height: "30px",
									padding: "0",
								}}
							>
								<i className="fas fa-times"></i> 
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Home;
