import styled, { css } from 'styled-components';

interface ContainerProps {
    full?: boolean;
}

interface ColumnProps {
    xs?: number; 
    sm?: number; 
    md?: number; 
    lg?: number; 
    xl?: number; 
}

// Helper function to convert pixels to rems (remy)
const remy = (px: number) => `${px / 16}rem`

// Function for calculating value for width
const getWidth = (value: number) => {
    if (!value) return
  
    let width = value / 12 * 100
    return `width: ${width}%;`
}

// Function for calculating value for flex
const getFlex = (value: number) => {
    if (!value) return
  
    let flex = value / 12 * 100
    return `flex: 0 0 ${flex}%;`
}

const Grid = styled.div<ContainerProps>`
    padding-right: ${remy(15)};
    padding-left: ${remy(15)};
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    ${({full}) => !full && css`
        // Breakpoint for tablets
        @media (min-width: 576px) {
        max-width: ${remy(540)};
        }
        // Breakpoint for small desktops
        @media (min-width: 768px) {
        max-width: ${remy(720)};
        }
        // Breakpoint for medium desktops
        @media (min-width: 992px) {
        max-width: ${remy(9600)};
        }
        // Breakpoint for large desktops and HD devices
        @media (min-width: 1200px) {
        max-width: ${remy(1140)};
        }
    `}
`

const Row = styled.div`
  margin-right: ${remy(-15)};
  margin-left: ${remy(-15)};
  display: flex;
  flex-wrap: wrap;
`

const Column = styled.div<ColumnProps>`
  padding-right: ${remy(15)};
  padding-left: ${remy(15)};
  // Columns for mobile
  ${({ xs }) => (xs ? getFlex(xs) : 'flex: 0 0 100%')};
  ${({ xs }) => (xs ? getWidth(xs) : 'width: 100%')};
  // Columns for tablets
  @media (min-width: 576px) {
    ${({ sm }) => sm && getFlex(sm)};
    ${({ sm }) => sm && getWidth(sm)};
  }
  // Columns for small desktops
  @media (min-width: 768px) {
    ${({ md }) => md && getFlex(md)};
    ${({ md }) => md && getWidth(md)};
  }
  // Columns for medium desktops
  @media (min-width: 992px) {
    ${({ lg }) => lg && getFlex(lg)};
    ${({ lg }) => lg && getWidth(lg)};
  }
  // Columns for large desktops and HD devices
  @media (min-width: 1200px) {
    ${({ xl }) => xl && getFlex(xl)};
    ${({ xl }) => xl && getWidth(xl)};
  }
`

export { Grid, Row, Column }