import React, { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const ParticlesBackground = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
          onClick: {
            enable: true,
            mode: 'push',
          },
        },
        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.6,
              color: '#6049EA',
            },
          },
          push: {
            quantity: 3,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ['#6049EA', '#4b36c2', '#8b7bef', '#a78bfa'],
        },
        links: {
          color: '#6049EA',
          distance: 160,
          enable: true,
          opacity: 0.15,
          width: 1,
          triangles: {
            enable: false,
          },
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: 'none',
          random: true,
          straight: false,
          outModes: {
            default: 'bounce',
          },
          attract: {
            enable: false,
          },
        },
        number: {
          density: {
            enable: true,
            area: 900,
          },
          value: 70,
        },
        opacity: {
          value: {
            min: 0.15,
            max: 0.5,
          },
          animation: {
            enable: true,
            speed: 0.8,
            minimumValue: 0.1,
            sync: false,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: {
            min: 1,
            max: 3.5,
          },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.5,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    []
  )

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
      options={options}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}

export default ParticlesBackground
