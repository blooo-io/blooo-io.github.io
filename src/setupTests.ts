/* eslint-disable import/no-extraneous-dependencies */
import "mutationobserver-shim";
import "@testing-library/jest-dom/extend-expect";
import { configure } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

configure({ adapter: new EnzymeAdapter() });
