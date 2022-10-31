import { Fragment } from "react"

//Fragment se utiliza para poder devolver los dos elementos sin meter un <div> en el medio
//Babel también acepta <> </> y lo transforma en una llamada a un fragment
const Page=({title, children})=>{
  return (
    <Fragment>
      <h2 className="layout-title bordered">{title}</h2>
      <section className="layout-content">{children}</section>
    </Fragment>
  )
}

export default Page