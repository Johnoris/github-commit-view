import { render, screen } from '@testing-library/react'
import Home from '../../pages/home/home'
import '@testing-library/jest-dom'

describe('Test that the home page loaded successfully', function () {
    test('you can see a list of five trending repos', async () => {
        render(<Home/>)
          // Wait for page to update with query text
         const items = await screen.findAllBy('trending-repo')
         expect(items).toHaveLength(5)
    })
    test('discover the world text is displaying', () => {
        render(<Home/>)
        expect(screen.getByText('Discover the world of code')).toBeInTheDocument()
    })
    test('explore text is displaying', () => {
        render(<Home/>)
        expect(screen.getByText('Explore open source projects from GitHub, and read their commit history to see the story of how they were built.')).toBeInTheDocument()
    })
    test('Nav is displaying', () => {
        render(<Home/>)
        expect(screen.getByRole('Nav')).toBeInTheDocument()
    })
})