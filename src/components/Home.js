import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            description="Online for touchless delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model Y"
            description="Order Today Bitches"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model 3"
            description="Order Tomorrow Bitches"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model X"
            description="Order on Sunday Bitches"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Lowest cost solar panels in the world"
            description="Get you money back asap"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Get in Line"
            rightBtnText="Learn More"
        />
        <Section 
            title="Solar roofs: New tech"
            description="Roofs that cost less than a brand new roof"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Get in Line"
            rightBtnText="Tell me more"
        />
        <Section 
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Buy Now"
        />
    </Container>
  )
}

const Container = styled.div`
    heightL 100vh;
`

export default Home