import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.getByText(/Checkout Form/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    fireEvent.change(screen.getByLabelText(/first name/i), {target: {value: "Jenny" }});
    fireEvent.change(screen.getByLabelText(/last name/i), {target: {value: "Patel" }});
    fireEvent.change(screen.getByLabelText(/address/i), {target: {value: "1928 Glenrock Ave." }});
    fireEvent.change(screen.getByLabelText(/city/i), {target: {value: "Brooklyn, New York" }});
    fireEvent.change(screen.getByLabelText(/state/i), {target: {value: "NY" }});
    fireEvent.change(screen.getByLabelText(/zip/i), {target: {value: "10020" }});

    fireEvent.click(screen.getAllByText(/checkout/i)[1]);

    expect(screen.getByText(/You have ordered/i)).toBeInTheDocument();
});