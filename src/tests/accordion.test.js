import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Accordion from "../components/Accordion";

describe("Accordion tests", () => {
  test("Accordion renders with label and children", () => {
    const label = "Accordion title";
    const children = "Accordion children";
    render(<Accordion label={label}>{children}</Accordion>);

    const accordion = screen.getByTestId("accordion");
    expect(accordion).toBeInTheDocument();

    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();

    const childrenElement = screen.getByTestId("children");
    expect(childrenElement).toBeInTheDocument();
    expect(childrenElement).toHaveTextContent(children);
  });

  test("Accordion opens and closes", async () => {
    const label = "Accordion title";
    const children = "Accordion children";
    render(<Accordion label={label}>{children}</Accordion>);

    const button = screen.getByTestId("button");
    const content = screen.getByTestId("children");

    // Mock de scrollHeight
    Object.defineProperty(content, "scrollHeight", {
      value: 100, // Par exemple, une hauteur fixe
      configurable: true,
    });

    // Vérifier que l'accordéon est fermé initialement
    expect(content.style.height).toBe("0px");

    // Simuler un clic pour ouvrir l'accordéon
    fireEvent.click(button);
    await waitFor(
      () => {
        expect(content.style.height).toBe("100px");
      },
      { timeout: 1000 }
    ); // Timeout supérieur à 500ms pour être sûr

    // Simuler un clic pour fermer l'accordéon
    fireEvent.click(button);
    await waitFor(
      () => {
        expect(content.style.height).toBe("0px");
      },
      { timeout: 1000 }
    );
  });
});
