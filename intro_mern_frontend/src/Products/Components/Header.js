import React from "react"
import propTypes from "prop-types";
import { Container, Section } from 'react-bulma-components'
const Header = ({ title }) => {

    return (

        <Section>
            <Container>
                <h1 className="title has-text-centered">
                    {title}
                </h1>
            </Container>
        </Section>
    )
}

Header.propTypes = {
    title: propTypes.string.isRequired

}

export default Header