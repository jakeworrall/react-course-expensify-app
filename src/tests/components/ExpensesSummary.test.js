import {ExpensesSummary} from "../../components/ExpensesSummary";
import {shallow} from "enzyme/build";
import expenses from '../fixtures/expenses';
import React from "react";

test('should display summary from 1 expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[1]]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should display summary from multiple expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});