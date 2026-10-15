import React from 'react'
import { Card } from 'antd'

const certificadosData = [
  {nombre: "Nivel básico de prevención de riesgos laborales", obtencion: "Enero de 2025", entidad: "IES Sotero Hernández", web: "https://iessoterohernandez.es"},
]

const Certificados = () => (
  <Card id="certificados" title="Certificados" variant="borderless" style={{ marginTop: "1em" }}>
    {certificadosData.map((certificados, index) =>  (
        <Card type="inner" key={index} title={certificados.nombre} style={{ marginBottom: "1em" }}>
          {certificados.obtencion} - <a href={certificados.web} target='_blank'>{certificados.entidad}</a><br/>
        </Card >
    ))}
  </Card >
)

export default Certificados
