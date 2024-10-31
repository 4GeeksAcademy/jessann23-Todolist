import React, {useState} from "react";

//create your first component
const Home = () => { 
	const [tarea, setTarea] = useState("")
	const [lista, setLista] = useState([])

	const manejarCambio = (e) => {
		 setTarea (e.target.value)
	//  console.log(e.target.value);
	}

	const agregarTarea =() => {
		console.log("tarea agregada");
		if (!tarea.trim() == ""){
			setLista(lista.concat(tarea))
			setTarea("")
		}
		
  

	}
	console.log(lista);
	
	return (
	<div className="w-100 d-flex flex-column align-items-center">
	<h1>hola</h1>
	
	<div class="mb-3">
  <input value={tarea} type="text" class="form-control" id="exampleFormControlInput1" placeholder="que vas a hacer hoy?" onChange={manejarCambio} onKeyDown={(e) => {
	
	if(e.key == "Enter"){

		agregarTarea()
	}
  }}/>

</div>
	
	<ul class="list-group">

 {lista.map((item,index)=>{
	return(
		<li key={index} class="list-group-item">{item}</li>	
	)
 })}
</ul>
	</div>	
	);
};

export default Home;
