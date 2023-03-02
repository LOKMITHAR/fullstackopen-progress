const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
    const Header = (props) => {
        console.log(props)
        return(
            <div>
                <h1>{course}</h1>
            </div>
        )
    }
    const Part = (props) =>{
        // let part =''
        // let exer = 0
        console.log(props)
        return(
            <div>
                <p>
                    {props.part} {props.exer}
                </p>
            </div>
        )
    }
    const Content = () => {
        return(
            <div>
                <Part part={part1.name} exer={part1.exercises}/>
                <Part part={part2.name} exer={part2.exercises}/>
                <Part part={part3.name} exer={part3.exercises}/>
            </div>
        )
    }
    const Total = () => {
        return(
            <div>
                <p>
                    Number of Exercises {part1.exercises+part2.exercises+part3.exercises}
                </p>
            </div>
        )
    }
    return(
        <div>
            <Header content={course}/>
            <Content/>
            <Total/>
        </div>
    )

}


export default App