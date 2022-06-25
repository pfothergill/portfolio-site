import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
    render(<App />);

    const aboutNavLink = screen.getByText(/About/i);
    const faqNavLink = screen.getByText(/Faq/i);

    expect(aboutNavLink).toBeInTheDocument();
    expect(faqNavLink).toBeInTheDocument();
});
