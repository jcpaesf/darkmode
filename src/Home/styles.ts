import styled from 'styled-components'

export const Content = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  min-height: 100vh;
  
  background-color: var(--bg);
  color: var(--txt);

  transition: background 0.3s ease;
`

export const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;

  &:checked + .content .label .ball {
    transform: translateX(2.5rem);
  }

  &:checked + .content {
    --bg: var(--black);
    --txt: var(--white);
    --dark-opacity: 1;
    --light-opacity: 0;
  }
`

export const Label = styled.label`
  display: flex;

  align-items: center;
  justify-content: space-between;

  position: relative;

  height: 2.5rem;
  width: 5rem;
  padding: 0.5rem;

  background: var(--txt);
  border-radius: 5rem;
  
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1;

  transition: background 0.5s ease;

  & > span {
    position: absolute;

    top: 0.25rem;
    left: 0.25rem;

    height: 2rem;
    width: 2rem;

    border-radius: 50%;

    background: var(--bg);

    transform: translateX(0);
    transition: transform 0.3s ease, background 0.5s ease;
  }
`

export const Image = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  & > svg {
    position: absolute;
    font-size: clamp(10rem, 80vw, 80vh);
    transition: opacity 0.3 ease-in-out 0.5;

    &:first-child {
      color: var(--dark-grey);
      opacity: var(--dark-opacity);
    }

    &:last-child {
      color: var(--light-grey);
      opacity: var(--light-opacity);
    }
  }
`