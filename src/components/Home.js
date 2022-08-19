import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
      <Section title="Model S" description="Order Online for Touchless Delivery" backgroundImg="model-s.jpg" leftBtnText="Custom Order" rightBtnText="Existing Inventory" />
      <Section title="Model Y" description="Order Online for Touchless Deliver" backgroundImg="model-y.jpg" leftBtnText="Custom Order" rightBtnText="Existing Inventory" />
      <Section title="Model 3" description="Order Online for Touchless Deliver" backgroundImg="model-3.jpg" leftBtnText="Custom Order" rightBtnText="Existing Inventory" />
      <Section title="Model X" description="Order Online for Touchless Deliver" backgroundImg="model-x.jpg" leftBtnText="Custom Order" rightBtnText="Existing Inventory" />
      <Section title="Loweset Cost Solar Panel in America" description="Money-back gurantee" backgroundImg="solar-panel.jpg" leftBtnText="Order Now" rightBtnText="Learn More" />
      <Section title="Solars for New Roofs" description="Money-back gurantee" backgroundImg="solar-panel.jpg" leftBtnText="Order Now" rightBtnText="Learn More" />
      <Section title="Accessories" description="" backgroundImg="accessories.jpg" leftBtnText="Shop Now" rightBtnText="" />
    </Container>
  )
}

export default Home

const Container = styled.div` 
  height: 100vh;
`