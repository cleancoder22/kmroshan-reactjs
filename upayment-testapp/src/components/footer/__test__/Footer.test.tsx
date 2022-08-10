import { render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from '../Footer'

const MockHeader=()=>{
    return(
        <BrowserRouter>
        <Footer />
        </BrowserRouter>
    )
}

test('Test Footer Title',()=>{
    render(<MockHeader />);
    const titleElement = screen.getByText(/UPayments store/i);
    expect(titleElement).toBeInTheDocument()
});