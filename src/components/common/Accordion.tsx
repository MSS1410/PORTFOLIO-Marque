// src/components/common/Accordion.tsx
import React, { useState, type ReactNode } from 'react'
import styled from 'styled-components'

type AccordionProps = {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

export function Accordion({
  title,
  children,
  defaultOpen = false
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <Wrapper>
      <Header type='button' onClick={() => setOpen(!open)}>
        <Title $open={open}>{title}</Title>
        <Icon $open={open} aria-hidden='true'>
          ▸
        </Icon>
      </Header>
      {open && <Content>{children}</Content>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-radius: 0.75rem;

  padding: 1rem 1.1rem;
`

const Header = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  &:focus-visible {
    outline: 1px solid rgba(148, 163, 184, 0.7);
    outline-offset: 3px;
  }
`

const Title = styled.span<{ $open: boolean }>`
  font-size: 0.9rem;
  text-transform: lowercase;
  letter-spacing: 0.18em;
  color: ${({ theme, $open }) =>
    $open ? theme.colors.textSoft : theme.colors.text};
`

const Icon = styled.span<{ $open: boolean }>`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSoft};
  transform: rotate(${({ $open }) => ($open ? 90 : 0)}deg);
  transition: transform 0.18s ease;
`

const Content = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`
