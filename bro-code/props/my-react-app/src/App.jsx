import Student from "./Students"

function App() {

  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/> 
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student/>
    </>
  )
}

export default App
