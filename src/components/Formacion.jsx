import React from 'react'
import { Card } from 'antd'

const formacionData = [
  {nombre: "Técnico/a Superior en Desarrollo de Aplicaciones Web", duracion: "07/11/2024-Actualidad", entidad: "IES Sotero Hernández", web: "https://iessoterohernandez.es"},
  {nombre: "Grado Universitario en Antropología Social y Cultural", duracion: "19/09/2019-Actualidad", entidad: "Universidad de Sevilla", web: "https://www.us.es"},
  {nombre: "Formación Teórico-práctica en voluntariado social", duracion: "01/10/2019-15/06/2020", entidad: "MadAfrica", web: "htpps://www.madafrica.es"},
  {nombre: "Bachillerato en Ciencias de la Salud", duracion: "21/09/2016-21/06/2019", entidad: "IES Juan de Mairena", web: "https://iesjuandemairena.org"},
]

const Formacion = () => (
  <Card id="formacion" title="Formación" variant="borderless" style={{marginTop: "1em" }}>
    {formacionData.map((formacion, index) =>  (
        <Card type="inner" key={index} title={formacion.nombre} style={{ marginBottom: "1em" }}>
          {formacion.duracion} - <a href={formacion.web} target='_blank'>{formacion.entidad}</a>
        </Card >
    ))}
  </Card >
)

export default Formacion
