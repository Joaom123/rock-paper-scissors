import React from "react";
import Header from "./index";
import {cleanup, queryByTestId, render} from "@testing-library/react";

let component;

describe("Header", () => {

    beforeEach(() => {
        cleanup();
        component = render(<Header score={0}/>);
    });

    it('should render correctly with Logo and Score', () => {
        let header = component.container;
        // console.log(queryByTestId(header, 'header-logo'))

        expect(queryByTestId(header, 'header')).toBeTruthy();
        expect(queryByTestId(header, 'header-logo')).toHaveTextContent('logo.svg') // test if svg was called
        expect(queryByTestId(header, 'header-score')).toHaveTextContent(0);

    });
});