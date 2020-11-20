// TODO: move apollo client code to separate file
import '../styles/globals.css'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'
import ToggleButton from '../components/buttons/togglebutton'
import { Provider } from 'next-auth/client'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from 'react-apollo'

const httpLink = createHttpLink({
    uri: 'http://localhost:5000',
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})

// The function that toggles between themes
export default function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    // Return the layout based on the current theme
    return (
        <ApolloProvider client={client}>
            <Provider session={pageProps.session}>
                <ThemeProvider
                    theme={theme === 'light' ? lightTheme : darkTheme}
                >
                    <Component {...pageProps} />
                    <ToggleButton onClick={toggleTheme}>
                        Toggle theme
                    </ToggleButton>
                </ThemeProvider>
            </Provider>
        </ApolloProvider>
    )
}
