import { Card } from "antd"
import React from "react"
import Github from '../assets/github.svg'
import Linkedin from '../assets/linkedin.svg'
import Pdf from '../assets/pdf.svg'

const Contacto = () => {
  return (
    <footer id="contacto">
      <Card title="Contacto" style={{ marginTop: "1em", marginBottom: "1em" }}>
        Puedes contactar conmigo por correo: <b>iriscasper00@gmail.com </b><br/>
        O en los siguientes sitios:
        <ul style={{ display: "flex", gap: 10, listStyle: "none" }}>
          <li>
            <a href="https://www.linkedin.com/in/iris-c-b5834b368" target="_blank">LinkedIn</a>
            <img src={Linkedin} width={16} />
          </li>
          <li>
            <a href="https://github.com/Iriscasper" target="_blank">GitHub</a>
            <img src={Github} width={16} />
          </li>
          <li>
           <a href='./resources/cv-iris-16-10-26.pdf' target='_blank'>Descargar mi CV</a>
           <img src={Pdf} width={18} />
          </li>
        </ul>
      </Card>
    </footer>
  )
}

export default Contacto