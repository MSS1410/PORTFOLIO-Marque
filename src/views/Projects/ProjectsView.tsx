// src/views/Projects/ProjectsView.tsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { projects, type Project } from '../../data/projects'

type CategoryId = 'api' | 'javascript' | 'react'

export function ProjectsView() {
  const [openCategory, setOpenCategory] = useState<CategoryId | null>(null)
  const [openProjectId, setOpenProjectId] = useState<string | null>(null)

  const handleCategoryToggle = (cat: CategoryId) => {
    setOpenCategory((current) => (current === cat ? null : cat))
    // cuando cambio de categoría, cierro el proyecto abierto
    setOpenProjectId(null)
  }

  const handleProjectToggle = (id: string) => {
    setOpenProjectId((current) => (current === id ? null : id))
  }

  const apiProjects = projects.filter((p) => p.category === 'api')
  const jsProjects = projects.filter((p) => p.category === 'javascript')
  const reactProjects = projects.filter((p) => p.category === 'react')

  return (
    <Wrapper>
      {/* Header */}
      <HeaderRow>
        <MarqueLink to='/'>marque</MarqueLink>
        <ViewLabel>projects</ViewLabel>
      </HeaderRow>

      {/* Grupos */}
      <List>
        <CategoryCard
          label='API projects'
          projects={apiProjects}
          isOpen={openCategory === 'api'}
          onToggle={() => handleCategoryToggle('api')}
          openProjectId={openProjectId}
          onProjectToggle={handleProjectToggle}
        />

        <CategoryCard
          label='javascript projects'
          projects={jsProjects}
          isOpen={openCategory === 'javascript'}
          onToggle={() => handleCategoryToggle('javascript')}
          openProjectId={openProjectId}
          onProjectToggle={handleProjectToggle}
        />

        <CategoryCard
          label='react projects'
          projects={reactProjects}
          isOpen={openCategory === 'react'}
          onToggle={() => handleCategoryToggle('react')}
          openProjectId={openProjectId}
          onProjectToggle={handleProjectToggle}
        />
      </List>
    </Wrapper>
  )
}

/* ========= Category card ========= */

type CategoryCardProps = {
  label: string
  projects: Project[]
  isOpen: boolean
  onToggle: () => void
  openProjectId: string | null
  onProjectToggle: (id: string) => void
}

function CategoryCard({
  label,
  projects,
  isOpen,
  onToggle,
  openProjectId,
  onProjectToggle
}: CategoryCardProps) {
  if (projects.length === 0) return null

  return (
    <Category>
      <CategoryHeader type='button' onClick={onToggle}>
        <CategoryTitle>{label}</CategoryTitle>
        <Chevron $open={isOpen}>▸</Chevron>
      </CategoryHeader>

      {isOpen && (
        <CategoryBody>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isOpen={openProjectId === project.id}
              onToggle={() => onProjectToggle(project.id)}
            />
          ))}
        </CategoryBody>
      )}
    </Category>
  )
}

/* ========= Project card (igual que antes) ========= */

type ProjectCardProps = {
  project: Project
  isOpen: boolean
  onToggle: () => void
}

function ProjectCard({ project, isOpen, onToggle }: ProjectCardProps) {
  const [imageIndex, setImageIndex] = useState(0)

  const hasImages = project.images && project.images.length > 0

  const handleCopy = async () => {
    if (!project.githubUrl) return

    if (navigator && 'clipboard' in navigator) {
      try {
        await navigator.clipboard.writeText(project.githubUrl)
      } catch (err) {
        console.error('Failed to copy github url', err)
      }
    }
  }

  const handlePrev = () => {
    if (!hasImages) return
    setImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    if (!hasImages) return
    setImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  return (
    <Card>
      <CardHeader type='button' onClick={onToggle}>
        <TitleBlock>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDate>{project.date}</ProjectDate>
        </TitleBlock>
        <Chevron $open={isOpen}>▸</Chevron>
      </CardHeader>

      {isOpen && (
        <Details>
          <GitRow>
            {project.liveUrl && (
              <LiveLink href={project.liveUrl} target='_blank' rel='noreferrer'>
                live demo
              </LiveLink>
            )}
            <GitLink href={project.githubUrl} target='_blank' rel='noreferrer'>
              github
            </GitLink>

            <CopyButton type='button' onClick={handleCopy}>
              copy github
            </CopyButton>
          </GitRow>

          <Section>
            <SectionTitle>descripción</SectionTitle>
            <SectionText>{project.description}</SectionText>
          </Section>

          <Section>
            <SectionTitle>descripción técnica</SectionTitle>
            <SectionText>{project.techDescription}</SectionText>
          </Section>

          {hasImages && (
            <Section>
              <SectionTitle>media</SectionTitle>
              <Carousel>
                <CarouselMain>
                  <CarouselImage
                    src={project.images[imageIndex]}
                    alt={`${project.title} screenshot ${imageIndex + 1}`}
                  />
                </CarouselMain>
                {project.images.length > 1 && (
                  <CarouselControls>
                    <CarouselButton type='button' onClick={handlePrev}>
                      prev
                    </CarouselButton>
                    <CarouselBullet>
                      {imageIndex + 1} / {project.images.length}
                    </CarouselBullet>
                    <CarouselButton type='button' onClick={handleNext}>
                      next
                    </CarouselButton>
                  </CarouselControls>
                )}
              </Carousel>
            </Section>
          )}
        </Details>
      )}
    </Card>
  )
}

/* ==== styles ==== */

const Wrapper = styled.section`
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
  text-transform: lowercase;
  letter-spacing: 0.24em;
  color: ${({ theme }) => theme.colors.text};
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  flex: 1;
  overflow-y: auto;
  padding-right: 0.4rem;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(148, 163, 184, 0.5);
    border-radius: 999px;
  }
`

/* ==== categoría ==== */

const Category = styled.article`
  border-radius: 1rem;
  padding: 0.9rem 1rem;
  background: rgba(15, 23, 42, 0.85);
  box-shadow: 0 18px 30px rgba(0, 0, 0, 0.7);
`

const CategoryHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  align-items: center;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`

const CategoryTitle = styled.h2`
  margin: 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.32em;
  color: ${({ theme }) => theme.colors.text};
`

const CategoryBody = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`

/* ==== proyecto ==== */

const Card = styled.article`
  border-radius: 0.9rem;
  padding: 0.8rem 0.9rem;
  background: transparent;
`

const CardHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  align-items: center;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`

const TitleBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
`

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 0.95rem;
  text-transform: lowercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.textSoft};
`

const ProjectDate = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
`

const Chevron = styled.span<{ $open: boolean }>`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSoft};
  transform: rotate(${({ $open }) => ($open ? 90 : 0)}deg);
  transition: transform 0.18s ease;
`

const Details = styled.div`
  margin-top: 0.9rem;
  margin-left: 0.6rem;
  padding: 0.9rem 1rem 1rem;
  border-radius: 0.9rem;

  background: linear-gradient(
    135deg,
    rgba(15, 23, 42, 0.96),
    rgba(30, 64, 175, 0.12)
  );

  box-shadow: 0 30px 32px rgba(0, 0, 0, 0.75);

  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`

const GitRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
`

const GitLink = styled.a`
  font-size: 0.8rem;
  text-transform: lowercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.textSoft};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const LiveLink = styled.a`
  font-size: 0.8rem;
  text-transform: lowercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const CopyButton = styled.button`
  font-size: 0.75rem;
  text-transform: lowercase;
  letter-spacing: 0.16em;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.5);
  background: transparent;
  color: ${({ theme }) => theme.colors.textSoft};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: rgba(248, 250, 252, 0.85);
  }
`

const Section = styled.div`
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  gap: 0.55rem;
`

const SectionTitle = styled.span`
  font-size: 0.8rem;
  text-transform: lowercase;
  letter-spacing: 0.28em;
  color: ${({ theme }) => theme.colors.text};
`

const SectionText = styled.p`
  margin: 15px 0 0 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSoft};
`

const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

const CarouselMain = styled.div`
  border-radius: 0.9rem;
  overflow: hidden;
  background: rgba(15, 23, 42, 0.9);
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  justify-content: flex-end;
`

const CarouselButton = styled.button`
  font-size: 0.75rem;
  text-transform: lowercase;
  letter-spacing: 0.16em;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.6);
  background: transparent;
  color: ${({ theme }) => theme.colors.textSoft};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: rgba(248, 250, 252, 0.85);
  }
`

const CarouselBullet = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSoft};
`
