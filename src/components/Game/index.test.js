import React from "react";
import {cleanup, queryByTestId, render} from "@testing-library/react";
import Game from "./index";

let component;

describe('Game', () => {

    beforeEach(() => {
        cleanup();
        component = render(<Game/>);
    });

    it('Initial game is rendered', () => {
        let container = component.container;

        expect(queryByTestId(container, 'game-initial')).toBeTruthy();
    });

    it('should click on Hand', () => {

    });
});