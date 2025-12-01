// src/components/layout/Layout.tsx
import type { ReactNode } from 'react'
import styled from 'styled-components'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <OuterWrapper>
      <GlowLayer />
      <InnerFrame>{children}</InnerFrame>
    </OuterWrapper>
  )
}
const OuterWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    #000000 0%,
    #000000 14%,
    #0b1120 30%,
    #1d2745 50%,
    #3b2a55 62%,
    #0b1120 80%,
    #000000 100%
  );
  overflow: hidden;
`

const GlowLayer = styled.div`
  position: absolute;
  inset: 2%;
  border-radius: 1.2rem;
  /* sin border */
  box-shadow: 0 0 60px rgba(59, 130, 246, 0.45),
    0 0 90px rgba(147, 51, 234, 0.35);
  opacity: 0.35;
  pointer-events: none;
`
const InnerFrame = styled.main`
  position: relative;
  width: 100%;
  max-width: 1220px;
  min-height: 620px;
  padding: 2.6rem 3.2rem;
  border-radius: 1.2rem;

  background: radial-gradient(
    circle at top,
    rgba(15, 23, 42, 0.95),
    rgba(0, 0, 0, 0.98)
  );
  border: none;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(16px);

  @media (max-width: 768px) {
    padding: 1.8rem 1.4rem;
    max-width: 1220px;
    min-height: 620px;
    border-radius: 1rem;
  }
`
