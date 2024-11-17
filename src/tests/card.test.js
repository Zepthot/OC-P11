import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

describe("Card component tests", () => {
  const mockData = {
    id: "123",
    cover: "https://example.com/image.jpg",
    title: "Beautiful Apartment",
  };

  test("Card renders correctly with props", () => {
    render(
      <BrowserRouter>
        <Card {...mockData} />
      </BrowserRouter>
    );

    // Vérifier que le titre est affiché
    const titleElement = screen.getByText(mockData.title);
    expect(titleElement).toBeInTheDocument();

    // Vérifier que l'image est affichée avec le bon alt
    const imageElement = screen.getByAltText(mockData.title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockData.cover);

    // Vérifier que le lien a l'URL correcte
    const linkElement = screen.getByTestId(mockData.id);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", `/apartment/${mockData.id}`);
  });

  test("Card link is accessible and functional", () => {
    render(
      <BrowserRouter>
        <Card {...mockData} />
      </BrowserRouter>
    );

    const linkElement = screen.getByTestId(mockData.id);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", `/apartment/${mockData.id}`);

    // Accessibilité du lien
    expect(linkElement).toHaveClass("card__item__link");
  });
});
