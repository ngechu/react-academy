import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Home from "../pages/Home/Home";



describe("Home", () => {
	test("check if home is rendering correct heading", () => {
		render(<Home />)
		expect(screen.getByText("This is Home")).toBeDefined()
	})



	test("test click button", () => {
		render(<Home />)
		let count = screen.getAllByTestId("count")
		const button = screen.getByTestId("clickButton")
		fireEvent.click(button)
		expect(count[0].textContent).toBe("Total number of clicks 1 ")
	})

	test("Home Page should have a p tag", () => {
		render(<Home />)

		const homeparagraph = screen.queryByRole("paragraph")

		expect(homeparagraph).toBeDefined()
	})
})