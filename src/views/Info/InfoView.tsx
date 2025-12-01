import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Accordion } from '../../components/common/Accordion'
import { FiCamera } from 'react-icons/fi'

import avatarImg from '../../assets/marque-avatar.png'

export function InfoView() {
  const [showPhoto, setShowPhoto] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  const handleShowPhoto = () => {
    // si ya hay un temporizador, lo reseteamos
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current)
    }

    setShowPhoto(true)

    // a los 3 segundos, volvemos a ocultar la foto
    timeoutRef.current = window.setTimeout(() => {
      setShowPhoto(false)
    }, 3000)
  }

  useEffect(() => {
    // limpiar timeout al desmontar la vista
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])
  return (
    <InfoWrapper>
      {/* Header */}
      <HeaderRow>
        <MarqueLink to='/'>marque</MarqueLink>
        <ViewLabel>info</ViewLabel>
      </HeaderRow>

      {/* Contenido principal */}
      <MainGrid>
        <LeftColumn>
          <Accordion title='quien soy?'>
            <Paragraph>
              Marque, desarrollador full stack junior con ojo de diseñador. Me
              enfoco en interfaces limpias, flujos sencillos y pequeños detalles
              visuales que hacen que las aplicaciones se sientan vivas.
            </Paragraph>
          </Accordion>

          <Accordion title='habilidades'>
            <SkillList>
              <li>React / JavaScript / TypeScript</li>
              <li>Node.js & Express</li>
              <li>MongoDB</li>
              <li>HTML5 / CSS3 y styled-components</li>
              <li>REST APIs (JSON)</li>
              <li>Git / GitHub / Vercel / Render</li>
            </SkillList>
          </Accordion>
        </LeftColumn>

        <RightColumn>
          <PhotoCard>
            <PhotoInner $showPhoto={showPhoto}>
              {/* Cara frontal: botón de cámara */}
              <PhotoFront>
                <CameraButton type='button' onClick={handleShowPhoto}>
                  <CameraIcon aria-hidden='true' />
                </CameraButton>
              </PhotoFront>

              {/* Cara trasera: tu foto */}
              <PhotoBack>
                <AvatarImage src={avatarImg} alt='Portrait of Marque' />
              </PhotoBack>
            </PhotoInner>
          </PhotoCard>
        </RightColumn>
      </MainGrid>

      {/* Flecha back */}
    </InfoWrapper>
  )
}

const InfoWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  height: 100%;
`

const HeaderRow = styled.header`
  display: flex;
  align-items: baseline;
  gap: 0.8rem;
`

const MarqueLink = styled(Link)`
  font-family: 'Allura', ${({ theme }) => theme.fonts.heading};
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.textSoft};
  text-transform: lowercase;
  letter-spacing: 0.04em;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const ViewLabel = styled.span`
  font-size: 1.5rem;
  padding-left: 2px;
  text-transform: lowercase;
  letter-spacing: 0.24em;
  color: ${({ theme }) => theme.colors.text};
`

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1.1fr);
  gap: 2rem;
  align-items: flex-start;
  flex: 1;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`
const RightColumn = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`

const PhotoCard = styled.div`
  width: 220px;
  height: 260px;
  perspective: 1000px;
`

const PhotoInner = styled.div<{ $showPhoto: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1.1rem;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
  transform: rotateY(${({ $showPhoto }) => ($showPhoto ? 180 : 0)}deg);

  /* solo hay fondo y sombra cuando la foto está visible */
  background: ${({ $showPhoto }) =>
    $showPhoto
      ? 'radial-gradient(circle at top, rgba(37, 99, 235, 0.3), rgba(15, 23, 42, 0.98))'
      : 'transparent'};
  box-shadow: ${({ $showPhoto }) =>
    $showPhoto ? '0 18px 40px rgba(0, 0, 0, 0.85)' : 'none'};
`

const PhotoSide = styled.div`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PhotoFront = styled(PhotoSide)``

const PhotoBack = styled(PhotoSide)`
  transform: rotateY(180deg);
  overflow: hidden;
`

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: inherit;
`

const CameraButton = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.8);
  background: transparent; /* sin fondo */
  box-shadow: none; /* sin sombra */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.textSoft};
  transition: transform 0.18s ease, color 0.18s ease, border-color 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    color: ${({ theme }) => theme.colors.text};
    border-color: rgba(248, 250, 252, 0.9);
  }

  &:focus-visible {
    outline: 2px solid rgba(148, 163, 184, 0.9);
    outline-offset: 3px;
  }
`

const CameraIcon = styled(FiCamera)`
  font-size: 1.5rem;
`

const Paragraph = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 1px;
`

const SkillList = styled.ul`
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  list-style: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  letter-spacing: 1px;
`
