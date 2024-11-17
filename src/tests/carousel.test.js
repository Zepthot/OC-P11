import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Carousel from "../components/Carousel";

// Mock d'un tableau d'images
const mockImages = ["image1.jpg", "image2.jpg", "image3.jpg"];

describe("Carousel component", () => {
  test("renders the first image and buttons correctly", () => {
    render(<Carousel images={mockImages} />);

    // Vérifie que la première image est affichée
    const firstImage = screen.getByAltText("slide-0");
    expect(firstImage).toBeInTheDocument();

    // Vérifie que les boutons sont présents
    expect(screen.getByRole("button", { name: /back/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();

    // Vérifie que l'indice est affiché
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
  });

  test("navigates to the next image when the next button is clicked", () => {
    render(<Carousel images={mockImages} />);

    // Clique sur le bouton "Next"
    const nextButton = screen.getByTestId("next");
    fireEvent.click(nextButton);

    // Vérifie que la deuxième image est affichée
    const secondImage = screen.getByAltText("slide-1");
    expect(secondImage).toBeInTheDocument();
    expect(screen.getByText("2 / 3")).toBeInTheDocument();
  });

  test("navigates to the previous image when the previous button is clicked", () => {
    render(<Carousel images={mockImages} />);

    // Clique sur le bouton "Previous"
    const prevButton = screen.getByTestId("previous");
    fireEvent.click(prevButton);

    // Vérifie que la dernière image est affichée (retour en boucle)
    const lastImage = screen.getByAltText("slide-2");
    expect(lastImage).toBeInTheDocument();
    expect(screen.getByText("3 / 3")).toBeInTheDocument();
  });

  test("cycles to the next image automatically after 5 seconds", () => {
    jest.useFakeTimers(); // Simule les timers

    render(<Carousel images={mockImages} />);

    // Vérifie que la première image est affichée
    expect(screen.getByAltText("slide-0")).toBeInTheDocument();

    // Avance dans le temps de 5 secondes
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // Vérifie que la deuxième image est affichée
    expect(screen.getByAltText("slide-1")).toBeInTheDocument();
  });

  test("renders nothing if no images are provided", () => {
    render(<Carousel images={[]} />);

    // Vérifie qu'il n'y a pas d'images affichées
    expect(screen.queryByAltText(/slide-/)).not.toBeInTheDocument();

    // Vérifie que l'indice est affiché comme 0 / 0
    expect(screen.getByText("0 / 0")).toBeInTheDocument();
  });
});
