import { render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from '../Header'

const MockHeader=()=>{
    return(
        <BrowserRouter>
        <Header />
        </BrowserRouter>
    )
}

test('Test Header Title',()=>{
    render(<MockHeader />);
    const titleElement = screen.getByRole("heading",{name:"UPayments store"});
    expect(titleElement).toBeInTheDocument()
});

test('Test Header Register',()=>{
    render(<MockHeader />);
    const titleElement = screen.getByText(/register/i);
    expect(titleElement).toBeInTheDocument()
});