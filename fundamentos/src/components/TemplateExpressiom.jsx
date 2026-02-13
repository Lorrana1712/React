

const nome = "Lorrana"

const dados ={
    idade:17,
    trabalho:"Programadora"
}

const skills = ["React","C#","JS","HTML"]

const projects =[
    {name:"portfólio",tech:"React+CSS",status:"Finalizado"},
    {name:"Lista de Tarefas",tech:"JavaScript",status:"Em Andamento"}
];


const TemplateExpressiom = () => {
  return (

    <div>
        <p>A soma é {2+2}</p>
        <h3>Seu nome é: {nome}</h3>
        <p> Sua idade é :{dados.idade } anos e você é uma {dados.trabalho} </p>
        <p>Você tem {skills.length} habilades </p>

        <h4>Habilidades</h4>
        <ul>
          {skills.map ((skill)=>( 
            <li key={skill}>{skill}</li>
        ))}                           
        </ul>

            <h4>Projetos</h4>
                <ul>
                    {projects.map((project) => (
                        <li key={project.name}>
                            {project.name} - {project.tech} - {(project.status)}
                        </li>


                    ))}
                </ul>
        
    </div>
  )
}

export default TemplateExpressiom