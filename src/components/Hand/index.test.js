import React from "react";
import Hand from "./index";
import {cleanup, queryByTestId, render} from "@testing-library/react";

let componentWithoutType;
let componentRock;

describe('Hand', () => {

    beforeEach(() => {
        cleanup();
        componentWithoutType = render(<Hand/>);
        componentRock = render(<Hand type="rock"/>);
    });

    // ReactDOM.render(<Hand type={type} lastInTriangle={lastInTriangle}/>, root);
    it('without type is rendered', () => {
        let hand = componentWithoutType.container;

        expect(queryByTestId(hand, 'hand-withoutType')).toBeTruthy();
    });

    it('with type rock is rendered', () => {
        let hand = componentRock.container;

        expect(queryByTestId(hand, 'hand-withType')).toBeTruthy();
    });
});