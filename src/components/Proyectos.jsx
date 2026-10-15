import React from "react"
import { Card, Col, Row } from "antd"
import Github from '../assets/github.svg'

const proyectosData = [
  {
    nombre: "Empresa",
    descripcion:
      "Proyecto Java para gestionar las nóminas y los empleados de una empresa",
    url: "https://github.com/Iricasper/Empresa",
  },
  {
    nombre: "Videoclub",
    descripcion:
      "Proyecto PHP con Laravel para la gestión de un videoclub, incluye CRUD, chat entre usuarios y modales para dejar opiniones",
    url: "https://github.com/SMDSFC2005/videoclub/tree/main-iris",
  },
  {
    nombre: "PeluControl",
    descripcion:
      "Proyecto React para gestionar clientes, incluye filtro dinámico, paginación y ordenación",
    url: "https://github.com/Iricasper/PeluControl",
  },
  {
    nombre: "Portfolio",
    descripcion: "La página web que estás viendo ahora mismo",
    url: "https://github.com/Iricasper/PortfolioPersonal",
  },
]

const Proyectos = () => (
  <div id="proyectos">
    <Row gutter={16}>
      {proyectosData.map((proyecto, index) => (
        <Col xl={12} xs={24} key={index} id="proyectosColumn">
          <Card
            className="proyectos"
            title={proyecto.nombre}
            variant="borderless"
            style={{ marginTop: "1em" }}
          >
            {proyecto.descripcion}
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <a href={proyecto.url} target="_blank">
                GitHub
              </a>
              <img src={Github} width={16} />
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
)

export default Proyectos
