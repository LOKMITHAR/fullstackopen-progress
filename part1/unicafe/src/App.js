const Hello = (props) => {
    const bornYear = () =>{
        const yearNow = new Date().getFullYear()
    return yearNow - props.age
}
    return (
      <div>
        <p>
          Hello {props.name}, you are {props.age} years old
        </p>
        <p>
            So you were born in {bornYear()}
        </p>
      </div>
    )
  }
  
  const App = () => {
    const name = 'Peter'
    const age = 10
  
    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Sam" age={21} />
        <Hello name={name} age={age} />
      </div>
    )
  }
  export default App
// const App = () => {
//     const course = {
//       name: 'Half Stack application development',
//       parts: [
//         {
//           name: 'Fundamentals of React',
//           exercises: 10
//         },
//         {
//           name: 'Using props to pass data',
//           exercises: 7
//         },
//         {
//           name: 'State of a component',
//           exercises: 14
//         }
//       ]
//     }
//     // console.log(course.parts)
//     // let part= course.parts
//     // console.log(part)
//     // const parts= course.parts
//     const Header = (props) => {
//         console.log(props)
//         return(
//             <div>
//                 <h1>{course.name}</h1>
//             </div>
//         )
//     }
//     const Part = (props) =>{
//         // let part =''
//         // let exer = 0
//         console.log(props)
//         return(
//             <div>
//                 <p>
//                     {props.part} {props.exer}
//                 </p>
//             </div>
//         )
//     }
//     const Content = (props) => {
//         console.log(props)
//         return(
//             <div>
//                 <Part part={course.parts[0].name} exer={course.parts[0].exercises}/>
//                 <Part part={course.parts[1].name} exer={course.parts[1].exercises}/>
//                 <Part part={course.parts[2].name} exer={course.parts[2].exercises}/>
//             </div>
//         )
//     }
//     const Total = () => {
//         return(
//             <div>
//                 <p>
//                     Number of Exercises {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}
//                 </p>
//             </div>
//         )
//     }
//     return(
//         <div>
//             <Header course={course}/>
//             <Content />
//             <Total />
//         </div>
//     )

// }


// export default App