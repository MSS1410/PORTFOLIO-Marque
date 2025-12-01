import { Link } from 'react-router-dom'
import styled from 'styled-components'

export function HomeView() {
  return (
    <HomeWrapper>
      <Column>
        <TitleRow>
          <Title>marque</Title>
        
        </TitleRow>

        <Subtitle>designer &amp; developer</Subtitle>

        <Nav>
          <NavItem to='/info'>info</NavItem>
          <NavItem to='/projects'>projects</NavItem>
        </Nav>
      </Column>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  align-items: flex-start;
`
const TitleRow = styled.div`
  display: flex;
  flex-wrap: nowrap;

  gap: 1rem; /* separación entre cada "marque" */
  align-items: baseline;
`
const Title = styled.h1`
  margin: 0;
  font-family: 'Allura', ${({ theme }) => theme.fonts.heading};
  font-size: 6rem;
  letter-spacing: -0.2em;
  font-weight: 200;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.text};
`

const Title2 = styled.h1`
  margin: 0;
  margin-right: 2rem;

  font-size: 4rem;
  letter-spacing: -0.2em;
  font-weight: 100;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.text};
`

const Title3 = styled.h1`
  margin: 0;

  font-family: 'Allura', ${({ theme }) => theme.fonts.heading};
  font-size: 6rem;
  letter-spacing: -0.5rem;
  font-weight: 200;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.text};
`

const Title4 = styled.h1`
  margin: 0;

  font-family: 'Allura', ${({ theme }) => theme.fonts.heading};
  font-size: 6rem;
  letter-spacing: -0.2em;
  font-weight: 200;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.text};
`
const Title5 = styled.h1`
  margin: 0;
  font-family: 'Allura', ${({ theme }) => theme.fonts.heading};
  font-size: 6rem;
  letter-spacing: -0.2em;
  font-weight: 200;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.text};
`
const Title6 = styled.h1`
  margin: 0;
  font-family: 'Allura', ${({ theme }) => theme.fonts.heading};
  font-size: 6rem;
  letter-spacing: -0.2em;
  font-weight: 200;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.text};
`
const Subtitle = styled.h2`
  margin: 0;
  font-size: 1rem;
  margin-top: 0.01rem;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.textSoft};
  letter-spacing: 0.2em;
`

const Nav = styled.nav`
  margin-top: 2rem;

  display: flex;
  gap: 1.5rem;
`

const NavItem = styled(Link)`
  font-size: 0.95rem;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.textSoft};
  letter-spacing: 0.25em;
  position: relative;
  padding-bottom: 0.2rem;
  transition: color 0.2s ease, transform 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.3rem;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.text};
    transition: width 0.25s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    transform: translateY(-1px);

    &::after {
      width: 100%;
    }
  }
`
