import React from "react";
import ReactDOM from 'react-dom';
import Hand from "./index";

describe('Hand', () => {
    function handWithoutType(type, lastInTriangle) {
        const root = document.createElement('div');
        ReactDOM.render(<Hand type={type} lastInTriangle={lastInTriangle}/>, root);

        return root;
    }

    it('without type', () => {
        const root = handWithoutType();

        expect(root.querySelector("div").className).toBe("game__hand game__hand--withoutType");
    });

    it('with type rock', () => {
        const root = handWithoutType("rock");

        expect(root.querySelector("div").className).toBe("game__hand game__hand--rock");
    });

    it('with type rock and lastInTriangle', () => {
        const root = handWithoutType("rock", true);

        expect(root.querySelector("div").className).toBe("game__hand game__hand--rock game__hand--lastInTriangle");
    });

    it('with type paper', () => {
        const root = handWithoutType("paper");

        expect(root.querySelector("div").className).toBe("game__hand game__hand--paper");
    });

    it('with type paper and lastInTriangle', () => {
        const root = handWithoutType("paper", true);

        expect(root.querySelector("div").className).toBe("game__hand game__hand--paper game__hand--lastInTriangle");
    });

    it('with type scissors', () => {
        const root = handWithoutType("scissors");

        expect(root.querySelector("div").className).toBe("game__hand game__hand--scissors");
    });

    it('with type scissors and lastInTriangle', () => {
        const root = handWithoutType("scissors", true);

        expect(root.querySelector("div").className).toBe("game__hand game__hand--scissors game__hand--lastInTriangle");
    });
});