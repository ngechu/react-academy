import { fireEvent, render, screen, userEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Navbar from "../components/navbar";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("Navbar tests", () => {
	test("Navbar should have correct links", () => {


		render(<App />, { wrapper: BrowserRouter })

		expect(screen.getByText("Home")).toBeDefined()
		expect(screen.getByText("Contact")).toBeDefined()
		expect(screen.getByText("Users")).toBeDefined()
		expect(screen.getByText("LogOut")).toBeDefined()

	})
		,
		test("Should navigate to contact us when you click contact", () => {
			render(<App />, { wrapper: BrowserRouter })
			fireEvent.click(screen.getByText(/contact/i))
			expect(screen.getByText("Email")).toBeDefined()
			expect(screen.getByText("Name")).toBeDefined()
			expect(screen.getByText("Message")).toBeDefined()
		})

})
