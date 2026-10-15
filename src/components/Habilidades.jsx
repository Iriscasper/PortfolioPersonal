import { Card } from 'antd'
import React from 'react'

const habilidadesData = [ "Java", "JavaScript", "HTML", "CSS", "NodeJS", "ReactJS", "MySQL", "MongoDB", "Kotlin", "PHP", "Laravel", "Git"]

const Habilidades = () => (
    <Card id="habilidades" title="Habilidades" style={{marginTop: "1em" }}>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        {habilidadesData.map((habilidad, index) => (
          <li key={index} className='habilidad'>{habilidad}</li>
        ))}
      </ul>
    </Card>
  )

export default Habilidades
