import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Apartment from "../pages/Apartment";
import Error from "../pages/Error";
import Header from "../components/Header";
import data from "../assets/data.json";

describe("Router tests", () => {
  describe("Rendering pages", () => {
    test("Home page with home class", () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );

      const homePage = screen.getByTestId("home");
      expect(homePage).toBeInTheDocument();
      expect(homePage).toHaveClass("home");
    });

    test("About page with about class", () => {
      render(
        <BrowserRouter>
          <About />
        </BrowserRouter>
      );

      const aboutPage = screen.getByTestId("about");
      expect(aboutPage).toBeInTheDocument();
      expect(aboutPage).toHaveClass("about");
    });

    test("Apartment page with apartment class", () => {
      const id = data[0].id;
      render(
        <MemoryRouter initialEntries={[`/apartment/${id}`]}>
          <Routes>
            <Route path='/apartment/:id' element={<Apartment />} />
          </Routes>
        </MemoryRouter>
      );

      const apartmentPage = screen.getByTestId("apartment");
      expect(apartmentPage).toBeInTheDocument();
      expect(apartmentPage).toHaveClass("apartment");
    });

    test("Error page with error class", () => {
      render(
        <BrowserRouter>
          <Error />
        </BrowserRouter>
      );

      const errorPage = screen.getByTestId("error");
      expect(errorPage).toBeInTheDocument();
      expect(errorPage).toHaveClass("error");
    });
  });

  describe("From Home to About", () => {
    test("Home to About", () => {
      render(
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      );

      const aboutLink = screen.getByTestId("link-about");
      expect(aboutLink).toBeInTheDocument();

      fireEvent.click(aboutLink);

      const aboutPage = screen.getByTestId("about");
      expect(aboutPage).toBeInTheDocument();
      expect(aboutPage).toHaveClass("about");
    });
  });

  describe("From Home to Apartment", () => {
    test("Home to Apartment", async () => {
      const id = data[0].id;
      render(
        <BrowserRouter initialEntries={["/"]}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/apartment/:id' element={<Apartment />} />
          </Routes>
        </BrowserRouter>
      );

      const apartmentLink = await waitFor(() => screen.getByTestId(id));
      expect(apartmentLink).toBeInTheDocument();

      fireEvent.click(apartmentLink);

      const apartmentPage = screen.getByTestId("apartment");
      expect(apartmentPage).toBeInTheDocument();
      expect(apartmentPage).toHaveClass("apartment");

      expect(window.location.pathname).toBe(`/apartment/${id}`);
    });
  });

  describe("From About to Home", () => {
    test("About to Home", async () => {
      render(
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      );

      const homeLink = await screen.findByTestId("link-home");
      expect(homeLink).toBeInTheDocument();

      fireEvent.click(homeLink);

      const homePage = screen.getByTestId("home");
      expect(homePage).toBeInTheDocument();
      expect(homePage).toHaveClass("home");
    });
  });

  describe("Change URL to About", () => {
    test("From Home to About", async () => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </MemoryRouter>
      );

      expect(screen.getByTestId("home")).toBeInTheDocument();

      render(
        <MemoryRouter initialEntries={["/about"]}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </MemoryRouter>
      );

      const aboutPage = screen.getByTestId("about");
      expect(aboutPage).toBeInTheDocument();
    });
  });
});
