const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
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
                <Part part={parts[0].name} exer={parts[0].exercises}/>
                <Part part={parts[1].name} exer={parts[1].exercises}/>
                <Part part={parts[2].name} exer={parts[2].exercises}/>
            </div>
        )
    }
    const Total = () => {
        return(
            <div>
                <p>
                    Number of Exercises {parts[0].exercises+parts[1].exercises+parts[2].exercises}
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