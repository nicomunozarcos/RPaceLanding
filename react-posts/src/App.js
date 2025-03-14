'use client'

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'; 
import './index.css' 

export default function Component() {
  const [routes, setRoutes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:8000/api/raceposts/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar las rutas")
        }
        return response.json()
      })
      .then((data) => {
        setRoutes(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }, [])

  const friends = [
    { id: 1, name: "Ana García", avatar: "/placeholder.svg" },
    { id: 2, name: "Carlos López", avatar: "/placeholder.svg" },
    { id: 3, name: "María Rodríguez", avatar: "/placeholder.svg" },
  ]

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (loading) {
    return <div className="react-app"><div style={{ textAlign: 'center', padding: '20px' }}>Cargando publicaciones...</div></div>
  }

  return (
    <div className="react-app">
      <div className="container2">
        {/* Main Timeline */}
        <div className="timeline">
          {routes.map((route) => (
            <div key={route.id} className="card">
              <div className="card-header">
                <div className="avatar"><img src="/static/imgs/runner.jpg" alt="Avatar" /></div>
                <div>
                  <h3 className="card-title">{route.title}</h3>
                  <time className="card-subtitle">
                    {formatDate(route.date_posted)}
                  </time>
                </div>
              </div>
              <div className="card-image">
                <img src="/static/imgs/route.png" alt="Mapa de la ruta" />
              </div>
              <div className="card-content">
                <div className="card-stats">
                  <span><strong>Distance:</strong> {route.distance} km</span>
                  <span><strong>Elevation:</strong> {route.elevation} m</span>
                </div>
                <p className="card-description">{route.description}</p>
              </div>
              <div className="card-actions">
                <button className="action-button" data-i18n="posts.like">
                  <span>♥</span> Me gusta
                </button>
                <button className="action-button" data-i18n="posts.comment">
                  <span >💬</span> Comentar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          {/* Friends Section */}
          <div className="sidebar-card">
            <div className="sidebar-header">
              <h3 className="sidebar-title" data-i18n="posts.friends">
                <span >👥</span> Amigos
              </h3>
              <button className="view-all-button" data-i18n="posts.seeall">Ver todos</button>
            </div>
            <div className="sidebar-content">
              {friends.map((friend) => (
                <div key={friend.id} className="friend-item">
                  <div className="avatar"></div>
                  <p className="friend-name">{friend.name}</p>
                  <button className="follow-button" data-i18n="posts.follow">Seguir</button>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Routes */}
          <div className="sidebar-card">
            <div className="sidebar-header">
              <h3 className="sidebar-title" data-i18n="posts.suggested">
                <span >⛰️</span> Rutas Sugeridas
              </h3>
            </div>
            <div className="sidebar-content">
              <a href="#" className="route-item">
                <h4 className="route-name">Ruta del Valle</h4>
                <p className="route-stats">8.5 km • 120m elevación</p>
              </a>
              <a href="#" className="route-item">
                <h4 className="route-name">Sendero del Bosque</h4>
                <p className="route-stats">12 km • 250m elevación</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Este código es necesario para montar el componente cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
  const rootElement = document.getElementById('react-root');
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Utilizamos ReactDOM para crear el root
    root.render(<Component />);  // Renderizamos el componente en el contenedor
  } else {
    console.error('No se pudo encontrar el contenedor con id "react-root"');
  }
});
