const App =() =>{
    const content = 'Half Stack Application Development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of Component'
    const exercises3 = 14
    
    const Header = () => {
        return(
            <div>
                <h1>{content}</h1>
            </div>
        )
    }
    const Part = (props) =>{
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
                <Part part={part1} exer={exercises1}/>
                <Part part={part2}exer={exercises2}/>
                <Part part={part3}exer={exercises3}/>
            </div>
        )
    }
    const Total = () => {
        return(
            <div>
                <p>
                    Number of Exercises {exercises1+exercises2+exercises3}
                </p>
            </div>
        )
    }
    return(
        <div>
            <Header content={content}/>
            <Content/>
            <Total/>
        </div>
    )

}


export default App